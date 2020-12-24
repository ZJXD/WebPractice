const prefixes = ['webkit'];

class Grade {
    constructor(container, img_selector, callback) {
        this.callback = callback || null
        this.container = container;
        this.image = this.container.querySelector(img_selector) || this.container.querySelector('img')
        this.gradientData = []
        if(!this.image || !this.container){
            return
        }
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.imageDimensions = {
            width: 0,
            height: 0
        };
        this.imageData = [];
        this.readImage()
    }

    readImage() {
        this.imageDimensions.width = this.image.width * 0.1;
        this.imageDimensions.height = this.image.height * 0.1;
        this.render()
    }

    render() {
        this.canvas.width = this.imageDimensions.width;
        this.canvas.height = this.imageDimensions.height;
        this.ctx.drawImage(this.image, 0, 0, this.imageDimensions.width, this.imageDimensions.height);
        this.getImageData();
        this.renderGradient();
    }

    getImageData() {
        let imageData = this.ctx.getImageData(
            0, 0, this.imageDimensions.width, this.imageDimensions.height
        ).data;
        this.imageData = Array.from(imageData)
    }

    renderGradient() {
        const ls = window.localStorage;
        const item_name = `grade-${this.image.getAttribute('src')}`;
        let top = null;

        if (ls && ls.getItem(item_name)) {
            top = JSON.parse(ls.getItem(item_name));
        } else {
            let chunkeds = this.getChunkedImageData();
            top = []
            chunkeds.map(chunked=>{
              top.push(this.getTopValues(this.getUniqValues(chunked)))
            })

            if (ls) {
                ls.setItem(item_name, JSON.stringify(top));
            }
        }

        if(this.callback){
            this.gradientData = top
            return
        }

        let gradientProperty = this.getCSSGradientProperty(top);

        let textProperty = this.getTextProperty(top);

        let style = `${this.container.getAttribute('style') || ''}; ${gradientProperty}; ${textProperty}`;
        this.container.setAttribute('style', style)
    }

    /**
     * 对 ImageData.data 处理成颜色
     */
    getChunkedImageData() {
        const perChunk = 4;

        let chunked = this.imageData.reduce((ar, it, i) => {
            const ix = Math.floor(i / perChunk)
            if (!ar[ix]) {
                ar[ix] = []
            }
            ar[ix].push(it);
            return ar
        }, []);

        // 分成5份，从上到下
        const splitCount = Math.floor(chunked.length/5) + 1
        const returnChunk = []
        for (let i = 0; i < 5; i++) {
          const splitArr = chunked.slice(i*splitCount,(i+1)*splitCount)
          const filterArr = splitArr.filter(rgba => {
                return rgba.slice(0, 2).every(val => val < 250) && rgba.slice(0, 2).every(val => val > 0)
            });
          returnChunk.push(filterArr)
        }
        return returnChunk 

        // let filtered = chunked.filter(rgba => {
        //     // return rgba.slice(0, 2).every(val => val < 250) && rgba.slice(0, 2).every(val => val > 0)
        //     return rgba.slice(0, 2).every(val => val < 250) && rgba.slice(0, 2).every(val => val > 10)
        // });

        // return filtered
    }

    getRGBAGradientValues(top) {
        return top.map((color, index) => {
            // return `rgb(${color.rgba.slice(0, 3).join(',')}) ${index == 0 ? '0%' : '75%'}`
            return `rgb(${color.rgba.slice(0, 3).join(',')}) ${index*20 + 10}%`
        }).join(',')
    }

    getCSSGradientProperty(top) {
        const val = this.getRGBAGradientValues(top);
        return prefixes.map(prefix => {
            return `background-image: -${prefix}-linear-gradient(
                        180deg,
                        ${val}
                    )`
        }).concat([`background-image: linear-gradient(
                    180deg,
                    ${val}
                )`]).join(';')
    }

    getMiddleRGB(start, end) {
        let w = 0.5 * 2 - 1;
        let w1 = (w + 1) / 2.0;
        let w2 = 1 - w1;
        let rgb = [parseInt(start[0] * w1 + end[0] * w2), parseInt(start[1] * w1 + end[1] * w2), parseInt(start[2] * w1 + end[2] * w2)];
        return rgb;
    }

    /**
     * 获取出现次数最多的前10个，再对亮度排序
     * @param {Object} uniq 颜色值出现次数对象
     */
    getSortedValues(uniq) {
        const occurs = Object.keys(uniq).map(key => {
                const rgbaKey = key;
                let components = key.split('|'),
                    brightness = ((components[0] * 299) + (components[1] * 587) + (components[2] * 114)) / 1000
                return {
                    rgba: rgbaKey.split('|'),
                    occurs: uniq[key],
                    brightness
                }
            }).sort((a, b) => a.occurs - b.occurs).reverse().slice(0, 10);
        // return occurs.sort((a, b) => a.brightness - b.brightness).reverse()
        return occurs
    }

    getTextProperty(top) {
        let rgb = this.getMiddleRGB(top[0].rgba.slice(0,3), top[1].rgba.slice(0,3));
        let o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);
        if (o > 125) {
            return 'color: #000';
        } else { 
            return 'color: #fff';
        }
    }

    getTopValues(uniq) {
        let sorted = this.getSortedValues(uniq);
        // return [sorted[0], sorted[sorted.length - 1]]
        return sorted[0]
    }

    /**
     * 同一个色值重复的次数
     * @param {Array} chunked 传入的色值数组
     */
    getUniqValues(chunked) {
        return chunked.reduce((accum, current) => {
            let key = current.join('|');
            if (!accum[key]) {
                accum[key] = 1;
                return accum
            }
            accum[key] = ++(accum[key]);
            return accum
        }, {})
    }
}

function GradeList(containers, img_selector, callback){
    const init = (container, img_selector, callback) => {
        let grade = new Grade(container, img_selector, callback),
            gradientData = grade.gradientData
        if(!gradientData.length){
            return null
        }
        return {
            element: container,
            gradientData
        }
    }
    let results = (NodeList.prototype.isPrototypeOf(containers)
    ? Array.from(containers).map(container => init(container, img_selector, callback))
    : [init(containers, img_selector, callback)]).filter(Boolean)

    if(results.length){
        return callback(results)
    }
}
