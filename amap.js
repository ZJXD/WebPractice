(function(config) {
  var ba = navigator.userAgent.toLowerCase()
    , ca = window
    , fa = document
    , ga = fa.documentElement;
  function ia(a) {
      return -1 !== ba.indexOf(a)
  }
  var na = /([a-z0-9]*\d+[a-z0-9]*)/;
  function oa() {
      var a = pa;
      if (!a)
          return null;
      var a = a.toLowerCase()
        , b = null;
      if (b = a.match(/angle \((.*)\)/))
          a = b[1],
          a = a.replace(/\s*direct3d.*$/, "");
      a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, "");
      if (0 <= a.indexOf("intel")) {
          b = ["Intel"];
          0 <= a.indexOf("mobile") && b.push("Mobile");
          (0 <= a.indexOf("gma") || 0 <= a.indexOf("graphics media accelerator")) && b.push("GMA");
          if (0 <= a.indexOf("haswell"))
              b.push("Haswell");
          else if (0 <= a.indexOf("ivy"))
              b.push("HD 4000");
          else if (0 <= a.indexOf("sandy"))
              b.push("HD 3000");
          else if (0 <= a.indexOf("ironlake"))
              b.push("HD");
          else {
              0 <= a.indexOf("hd") && b.push("HD");
              var c = a.match(na);
              c && b.push(c[1].toUpperCase())
          }
          return b = b.join(" ")
      }
      return 0 <= a.indexOf("nvidia") || 0 <= a.indexOf("quadro") || 0 <= a.indexOf("geforce") || 0 <= a.indexOf("nvs") ? (b = ["nVidia"],
      0 <= a.indexOf("geforce") && b.push("geForce"),
      0 <= a.indexOf("quadro") && b.push("Quadro"),
      0 <= a.indexOf("nvs") && b.push("NVS"),
      a.match(/\bion\b/) && b.push("ION"),
      a.match(/gtx\b/) ? b.push("GTX") : a.match(/gts\b/) ? b.push("GTS") : a.match(/gt\b/) ? b.push("GT") : a.match(/gs\b/) ? b.push("GS") : a.match(/ge\b/) ? b.push("GE") : a.match(/fx\b/) && b.push("FX"),
      (c = a.match(na)) && b.push(c[1].toUpperCase().replace("GS", "")),
      0 <= a.indexOf("titan") ? b.push("TITAN") : 0 <= a.indexOf("ti") && b.push("Ti"),
      b = b.join(" ")) : 0 <= a.indexOf("amd") || 0 <= a.indexOf("ati") || 0 <= a.indexOf("radeon") || 0 <= a.indexOf("firegl") || 0 <= a.indexOf("firepro") ? (b = ["AMD"],
      0 <= a.indexOf("mobil") && b.push("Mobility"),
      c = a.indexOf("radeon"),
      0 <= c && b.push("Radeon"),
      0 <= a.indexOf("firepro") ? b.push("FirePro") : 0 <= a.indexOf("firegl") && b.push("FireGL"),
      0 <= a.indexOf("hd") && b.push("HD"),
      0 <= c && (a = a.substring(c)),
      (c = a.match(na)) && b.push(c[1].toUpperCase().replace("HD", "")),
      b = b.join(" ")) : a.substring(0, 100)
  }
  var qa = "microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965".split(";")
    , ra = "ActiveXObject"in ca
    , va = "devicePixelRatio"in ca && 1 < ca.devicePixelRatio || ra && "matchMedia"in ca && ca.matchMedia("(min-resolution:144dpi)") && ca.matchMedia("(min-resolution:144dpi)").matches
    , wa = ia("windows nt")
    , xa = -1 !== ba.search(/windows nt [1-5]\./)
    , ya = -1 !== ba.search(/windows nt 5\.[12]/)
    , za = xa && !ya;
  ia("windows nt 10");
  var Da = ia("windows phone")
    , Ea = ia("macintosh")
    , Fa = ia("Mb2345Browser")
    , Ga = ia("ipad;") || ia("ipad ")
    , Ha = Ga && va
    , Ka = ia("ipod touch;")
    , La = ia("iphone;") || ia("iphone ")
    , Ma = La || Ga || Ka
    , Na = Ma && -1 !== ba.search(/ os [456]_/);
  Ma && ba.search(/ os [4-8]_/);
  Ma && ba.search(/ os [78]_/);
  Ma && ia("os 8_");
  var Qa = Ma && ia("os 10_")
    , Ra = ia("android")
    , Sa = -1 !== ba.search(/android [123]/);
  ia("android 4");
  Ra && -1 === ba.search(/android [1-4]/) || ba.search(/android 4.4/);
  var Ta = Ra ? "android" : Ma ? "ios" : wa ? "windows" : Ea ? "mac" : "other"
    , Ua = ra && !ca.XMLHttpRequest
    , Va = ra && !fa.querySelector
    , Wa = ra && !fa.addEventListener
    , Xa = ra && ia("msie 9")
    , Ya = ra && ia("msie 10")
    , Za = ra && ia("rv:11")
    , $a = Wa || Xa
    , ab = ia("edge")
    , bb = ia("qtweb")
    , cb = ia("ucbrowser")
    , db = ia("alipay") || Ra && cb
    , eb = ia("miuibrowser")
    , fb = ia("micromessenger")
    , gb = ia("mqqbrowser")
    , hb = ia("baidubrowser")
    , chrome = (ia("chrome") || ia("crios")) && !fb && !hb && !gb && !ab && !eb
    , ib = chrome && ia("chromium")
    , jb = chrome && !ib && 30 < parseInt(ba.split("chrome/")[1])
    , kb = ia("firefox")
    , lb = kb && 27 < parseInt(ba.split("firefox/")[1])
    , mb = (Ea || Ma) && ia("safari") && ia("version/")
    , nb = Ea && mb && 7 < parseInt(ba.split("version/")[1])
    , ob = Ma && ia("aliapp")
    , pb = Ma && (!gb && !cb && !fb && !chrome && !kb && !mb || ob && !cb)
    , qb = Ra || Ma || Da || ia("mobile")
    , rb = "ontouchstart"in fa
    , sb = ca.navigator && ca.navigator.msPointerEnabled && !!ca.navigator.msMaxTouchPoints
    , tb = ca.navigator && !!ca.navigator.maxTouchPoints
    , ub = !rb && (tb || sb)
    , vb = rb || ub
    , wb = function() {
      if (!qb)
          return ca.devicePixelRatio || 1;
      var a = document.getElementsByTagName("meta");
      if (window.parent && window.parent !== window)
          try {
              if (window.parent.location.origin === window.location.origin)
                  a = window.parent.document.getElementsByTagName("meta");
              else
                  return 1
          } catch (b) {
              return 1
          }
      for (var c = a.length - 1; 0 <= c; c -= 1)
          if ("viewport" === a[c].name) {
              var c = a[c].content, d;
              -1 !== c.indexOf("initial-scale") && (d = parseFloat(c.split("initial-scale=")[1]));
              a = -1 !== c.indexOf("minimum-scale") ? parseFloat(c.split("minimum-scale=")[1]) : 0;
              c = -1 !== c.indexOf("maximum-scale") ? parseFloat(c.split("maximum-scale=")[1]) : Infinity;
              if (d) {
                  if (c >= a)
                      return d > c ? c : d < a ? a : d
              } else if (c >= a)
                  return 1 <= a ? 1 : Math.min(c, 1);
              console && console.log && console.log("viewport\u53c2\u6570\u4e0d\u5408\u6cd5");
              return null
          }
  }()
    , xb = va && (!qb || !!wb && 1 <= wb)
    , yb = ra && "transition"in ga.style
    , zb = !!fa.createElementNS && !!fa.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
    , Ab = fa.createElement("canvas")
    , Bb = !(!Ab || !Ab.getContext)
    , Cb = window.URL || window.webkitURL
    , Db = !ra && !ab && !(cb && Ra) && window.Worker && Cb && Cb.createObjectURL && window.Blob
    , Eb = ""
    , pa = ""
    , Fb = 0
    , Ib = window.forceWebGL ? {
      alpha: !0,
      antialias: !0,
      depth: !0
  } : {
      alpha: !0,
      antialias: !0,
      depth: !0,
      failIfMajorPerformanceCaveat: !0,
      preserveDrawingBuffer: !0,
      stencil: !0
  }
    , Jb = function() {
      if (!window.forceWebGL && (!Bb || !Db || pb && ob && !cb))
          return !1;
      for (var a = ["webgl", "experimental-webgl", "moz-webgl"], b = null, c = 0; c < a.length; c += 1) {
          try {
              b = Ab.getContext(a[c], Ib)
          } catch (d) {}
          if (b) {
              if (b.drawingBufferWidth !== Ab.width || b.drawingBufferHeight !== Ab.height)
                  break;
              if (window.forceWebGL)
                  return Eb = a[c],
                  Fb = Infinity,
                  !0;
              if (!b.getShaderPrecisionFormat || !b.getParameter || !b.getExtension)
                  break;
              Fb = b.getParameter(b.MAX_RENDERBUFFER_SIZE);
              var e = b.getParameter(b.MAX_VIEWPORT_DIMS);
              if (!e)
                  break;
              Fb = Math.min(Fb, e[0], e[1]);
              mb && "mac" === Ta && (Fb = Math.min(Fb, 4096));
              e = Math.max(screen.width, screen.height);
              xb && (e *= Math.min(2, window.devicePixelRatio || 1));
              if (e > Fb)
                  break;
              if (23 > b.getShaderPrecisionFormat(35632, 36338).precision || 23 > b.getShaderPrecisionFormat(35633, 36338).precision)
                  break;
              pa = b.getExtension("WEBGL_debug_renderer_info") ? b.getParameter(37446) : null;
              if ((b = oa()) && -1 !== qa.indexOf(b))
                  break;
              Eb = a[c];
              return !0
          }
      }
      return !1
  }()
    , Kb = Jb && (jb || lb || nb) && ("mac" === Ta || "windows" === Ta) && !qb
    , Lb = !Bb || bb || Da || qb && kb || Xa || Na || Ha || Ka || Sa || ia("gt-n710") || za
    , Mb = !Lb && !Kb
    , Nb = Kb ? "vw" : Lb ? "d" : Mb ? "dv" : "v"
    , Ob = ia("webkit")
    , Pb = "WebKitCSSMatrix"in ca && "m11"in new window.WebKitCSSMatrix
    , Qb = "MozPerspective"in ga.style
    , Rb = "OTransition"in ga.style
    , Sb = yb || Pb || Qb || Rb
    , Tb = void 0 !== config[8] ? config[8] : !0
    , Ub = void 0 !== config[9] ? config[9] : !0
    , Vb = void 0 !== config[10] ? config[10] : !0
    , Wb = void 0 !== config[11] ? config[11] : !0
    , Xb = void 0 !== config[12] ? config[12] : null
    , Yb = !zb && qb && Bb
    , Zb = !0;
  try {
      if ("undefined" === typeof ca.localStorage)
          Zb = !1;
      else {
          var $b = (new Date).getTime() + "";
          ca.localStorage.setItem("_test", $b);
          ca.localStorage.getItem("_test") !== $b && (Zb = !1);
          ca.localStorage.removeItem("_test")
      }
  } catch (ac) {
      Zb = !1
  }
  var bc = parseInt(ba.split("chrome/")[1])
    , cc = Tb && Bb;
  config.l = {
      cqa: Ga,
      dqa: La,
      size: La ? 100 : Ra ? 200 : 500,
      Iy: Ea,
      jya: wa,
      JI: Ma,
      hDa: Qa,
      El: Ra,
      Dka: Sa,
      C2: db,
      Uy: Ta,
      iH: hb,
      mua: gb,
      PD: mb,
      h9: fb,
      Vr: ra,
      mi: Ua,
      Nu: Va,
      U3: Xa,
      T3: Ya,
      ue: Wa,
      W3: $a,
      gqa: Za,
      Lna: ab,
      jqa: ra && !Za,
      csa: Fa,
      es: Zb,
      zi: cc && Zb && Wb && !qb && chrome,
      Df: Xb,
      geolocation: qb || ra && !Wa || ab,
      Axa: cb,
      xK: cb && !chrome,
      chrome: chrome,
      d2: !0,
      iQ: kb,
      Z: qb,
      osa: qb && Ob,
      r5: qb && Pb,
      nsa: qb && ca.opera,
      Mc: va,
      GK: wb,
      ia: xb,
      Cf: vb,
      t5: sb,
      IS: tb,
      s6: ub,
      Qla: chrome && 57 <= bc,
      Rla: !qb && chrome && 64 <= bc,
      f9: Ob,
      hqa: yb,
      g9: Pb,
      yoa: Qb,
      hta: Rb,
      dH: Sb,
      xo: zb,
      Ok: Bb,
      MR: Db,
      zz: Vb,
      xf: Kb,
      c9: Eb,
      d9: Ib,
      ZQ: pa,
      asa: Fb,
      Kya: !1,
      du: Tb && !Lb,
      O0: Tb ? Nb : "d",
      j1: Tb ? Jb : !1,
      jK: cc,
      rq: Tb && Jb,
      sDa: Tb && (!Lb || Jb),
      Qp: Ub && !!ca.WebSocket && !hb,
      eEa: Yb,
      qta: Bb || Yb ? "c" : "d"
  };
  var dc = config;
  config = void 0;
  var ec = {
      overlay: ["style"],
      "AMap.IndoorMap": ["AMap.CustomLayer", "cvector"],
      "AMap.IndoorMap3D": ["Map3D"],
      "AMap.MarkerList": ["AMap.TplUtils"],
      Map3D: ["vectorlayer", "wgl", "AMap.CustomLayer", "rbush"],
      "AMap.Heatmap": ["AMap.CustomLayer"],
      "AMap.DistrictLayer": ["MVT"],
      vectorForeign: ["gridmap", "MVT"],
      "AMap.GltfLoader": ["AMap.CustomLayer", "Map3D"],
      "AMap.LabelsLayer": ["rbush", "promise"]
  };
  window.AMap ? (window.AMap.version = "1557805551535",
  window.AMap.BK = {
      zL: function(a) {
          a(dc)
      }
  }) : window.AMap = {
      version: "1557805551535",
      BK: {
          zL: function(a) {
              a(dc)
          }
      }
  };
  dc.uj = "1557805551535";
  dc.nu = ec;
  dc.gJ = "raster";
  for (var fc = document.head || document.getElementsByTagName("head")[0], gc = '.vml{behavior:url(#default#VML);display:inline-block;position:absolute}.amap-custom{top:0;left:0;position:absolute}.amap-container img{max-width:none!important;max-height:none!important}.amap-container{touch-action:none;position:relative;overflow:hidden;background:#fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);-ms-touch-action:none}.amap-drags,.amap-layers{width:100%;height:100%;position:absolute;overflow:hidden}.amap-layer img{pointer-events:none}.amap-e,.amap-maps{width:100%;height:100%}.amap-maps,.amap-e,.amap-layers,.amap-tile,.amap-tile-container{position:absolute;left:0;top:0;overflow:hidden}.amap-context{position:absolute;left:0;top:0}.amap-overlays,.amap-markers,.amap-marker{position:absolute;left:0;top:0}.amap-layers{z-index:0}.amap-overlays{z-index:110;cursor:default}.amap-markers{z-index:120}.amap-controls{z-index:150}.amap-copyright{position:absolute;display:block!important;left:77px;height:16px;bottom:0;padding-bottom:3px;font-size:11px;font-family:Arial,sans-serif;z-index:160}.amap-logo{position:absolute;bottom:1px;left:1px;z-index:160;height:20px}.amap-logo img{width:73px!important;height:20px!important;border:0;vertical-align:baseline!important}.amap-icon{position:relative;z-index:1}.amap-icon img{position:absolute;z-index:-1}.amap-marker-label{position:absolute;z-index:2;border:1px solid blue;background-color:white;white-space:nowrap;cursor:default;padding:3px;font-size:12px;line-height:14px}.amap-info{position:absolute;left:0;z-index:140;width:320px}.amap-menu{position:absolute;z-index:140;_width:100px}.amap-info-close{position:absolute;right:5px;_right:12px;+right:11px;top:5px;_top:2px;+top:2px;color:#c3c3c3;text-decoration:none;font:bold 16px/14px Tahoma,Verdana,sans-serif;width:14px;height:14px}.amap-info-outer,.amap-menu-outer{box-shadow:0 1px 2px rgba(0,0,0,0.1);background:none repeat scroll 0 0 white;border-radius:2px;padding:1px;text-align:left}.amap-menu-outer:hover{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-contentContainer:hover .amap-info-outer{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-content{position:relative;background:#fff;padding:10px 18px 10px 10px;line-height:1.4;overflow:auto}.amap-marker-content{position:relative}.amap-info{_width:320px}.amap-menu{_width:100px}.amap-info-sharp-old{overflow:hidden;position:absolute;background-image:url(http://webapi.amap.com/images/arrows.png)}.bottom-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:center 12px;top:100%;margin-top:-9px;left:50%;margin-left:-10px}.bottom-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -46px;top:100%;margin-top:-9px}.bottom-right .amap-info-sharp-old{height:12px;width:13px;top:-1px;background-position:-56px -46px;left:100%;margin-left:-13px;top:100%;margin-top:-9px}.middle-left .amap-info-sharp-old{height:20px;width:12px;background-position:left;top:50%;margin-top:-10px;margin-left:-11px}.center .amap-info-sharp-old{display:none}.middle-right .amap-info-sharp-old{height:20px;margin-right:0;width:12px;background-position:right;left:100%;margin-left:-9px;top:50%;margin-top:-10px}.top-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:top;top:0;margin-top:-3px;left:50%;margin-left:-10px}.top-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -3px;top:0;margin-top:-3px}.top-right .amap-info-sharp-old{height:12px;width:13px;background-position:-56px -3px;left:100%;margin-left:-13px;top:0;margin-top:-3px}.amap-info-sharp{position:absolute}.bottom-center .amap-info-sharp{bottom:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}.bottom-center .amap-info-sharp:after{position:absolute;content:"";margin-left:-8px;margin-top:-7px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid rgba(0,0,0,0.3);filter:blur(2px);z-index:-1}.amap-info-contentContainer:hover.bottom-center .amap-info-sharp:after{border-top:8px solid rgba(0,0,0,0.5)}.bottom-left .amap-info-sharp{border-color:transparent #fff;border-width:0 0 10px 10px;border-style:solid}.bottom-left .amap-info-sharp:after{position:absolute;content:"";margin-left:-10px;border-color:transparent rgba(0,0,0,0.3);border-width:0 0 10px 10px;border-style:solid;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-left .amap-info-sharp:after{border-color:transparent rgba(0,0,0,0.5)}.bottom-left .amap-info-content{border-radius:2px 2px 2px 0}.bottom-right .amap-info-sharp{right:0;border-top:10px solid #fff;border-left:10px solid transparent}.bottom-right .amap-info-sharp:after{position:absolute;margin-top:-9px;margin-left:-10px;content:"";border-top:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-right .amap-info-sharp:after{border-top:10px solid rgba(0,0,0,0.5)}.bottom-right .amap-info-content{border-radius:2px 2px 0 2px}.top-center .amap-info-sharp{top:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #fff}.top-center .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid rgba(0,0,0,0.3);filter:blur(1px);z-index:-1}.top-left .amap-info-sharp{left:0;top:0;border-bottom:10px solid #fff;border-right:10px solid transparent}.top-left .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:0;border-bottom:10px solid rgba(0,0,0,0.3);border-right:10px solid transparent;filter:blur(1px);z-index:-1}.top-right .amap-info-sharp{right:0;top:0;border-bottom:10px solid #fff;border-left:10px solid transparent}.top-right .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-10px;border-bottom:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.middle-right .amap-info-sharp{right:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-left:8px solid #fff;border-bottom:8px solid transparent}.middle-right .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:-8px;border-top:8px solid transparent;border-left:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-right .amap-info-sharp:after{border-left:8px solid rgba(0,0,0,0.5)}.middle-left .amap-info-sharp{left:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-right:8px solid #fff;border-bottom:8px solid transparent}.middle-left .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:0;border-top:8px solid transparent;border-right:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-left .amap-info-sharp:after{border-right:8px solid rgba(0,0,0,0.5)}.amap-info-contentContainer.top-left,.amap-info-contentContainer.top-center,.amap-info-contentContainer.top-right{padding-top:8px}.amap-info-contentContainer.bottom-left,.amap-info-contentContainer.bottom-center,.amap-info-contentContainer.bottom-right{padding-bottom:8px}.amap-info-contentContainer.middle-right{padding-right:8px}.amap-info-contentContainer.middle-left{padding-left:8px}.amap-menu-outer{margin:0;padding:0;list-style-type:none}ul.amap-menu-outer li{cursor:pointer;height:35px;line-height:35px;word-break:break-all;padding:0 10px;font-size:12px;white-space:nowrap}ul.amap-menu-outer li a{text-decoration:none;font-size:13px;margin:0 5px;color:#000;padding:5px 5px}ul.amap-menu-outer li:hover{background-color:#f3f3ee}.amap-overlay-text-container{display:block;width:auto;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:2px 3px;border:1px solid #ccc;border-radius:3px}.amap-overlay-text-container.amap-overlay-text-empty{display:none}.amap-info-content-ie8{border:1px solid #9c9c9c}'.replace(/url\((['"]?)(?:\.\.\/)+/g, "url($1" + dc[2].split(",")[0] + "/"), hc = null, ic = 0, jc = fc.childNodes.length; ic < jc; ic++)
      if (1 === fc.childNodes[ic].nodeType) {
          hc = fc.childNodes[ic];
          break
      }
  if (gc)
      if (fc) {
          var kc = document.createElement("style");
          kc.setAttribute("type", "text/css");
          kc.setAttribute("class", "AMap.style");
          kc.styleSheet ? kc.styleSheet.cssText = gc : kc.innerHTML = gc;
          hc ? fc.insertBefore(kc, hc) : fc.appendChild(kc)
      } else
          document.write("<style type='text/css'>" + gc + "</style>");
  var g = g || {
      Da: {
          xe: 0,
          Cq: [],
          rj: {}
      }
  }
    , z = {
      o: {},
      control: {},
      w: {}
  };
  g.SBa = function(a) {
      var b = Function;
      return function() {
          return (new b("return " + a))()
      }
  }();
  g.CLASS_NAME = "AMap";
  g.c = g.BuryPoint = {};
  g.c.add = g.BuryPoint.add = function(a, b, c) {
      a.h4 || a.C || !(a = a.CLASS_NAME) || (a = a.replace("AMap.", ""),
      g.Sz.Mo(a, b, c))
  }
  ;
  var lc = {
      lang: 1,
      baseRender: 1,
      overlayRender: 1,
      viewMode: 1
  };
  g.c.ya = g.BuryPoint.addOptions = function(a, b) {
      if (!a.jta)
          if (b && (b.innerLayer || b.innerOverlay))
              a.h4 = !0;
          else {
              a.jta = !0;
              var c = a.CLASS_NAME;
              if (c) {
                  c = c.replace("AMap.", "");
                  g.Sz.Mo(c);
                  b = b || {};
                  for (var d in b)
                      b.hasOwnProperty(d) && ("Map" === c && d in lc ? g.Sz.Mo(c, d, b[d]) : g.Sz.Mo(c, d))
              }
          }
  }
  ;
  g.aa = function() {}
  ;
  g.aa.extend = g.aa.extend = function(a) {
      function b() {}
      function c() {
          var a = this.initialize || this.r;
          a && a.apply(this, arguments);
          if (!d && this.xi) {
              a = document.createElement("style");
              a.setAttribute("type", "text/css");
              this.CLASS_NAME && a.setAttribute("class", this.CLASS_NAME);
              this.xi = this.xi.replace(/url\((['"]?)(?:\.\.\/)*/g, "url($1" + g.A.yb + "/");
              a.styleSheet ? a.styleSheet.cssText = this.xi : a.innerHTML = this.xi;
              for (var b = document.head || document.getElementsByTagName("head")[0], c = null, e = 0, f = b.childNodes.length; e < f; e++)
                  if (1 === b.childNodes[e].nodeType) {
                      c = b.childNodes[e];
                      break
                  }
              c ? b.insertBefore(a, c) : b.appendChild(a)
          }
          d = !0
      }
      var d = !1;
      b.prototype = this.prototype;
      var e = new b;
      e.constructor = c;
      c.prototype = e;
      c.prototype.ph = c.prototype["super"] = function(a) {
          return a.callee.ka.apply(this, a)
      }
      ;
      for (var f in this)
          this.hasOwnProperty(f) && "prototype" !== f && (c[f] = this[f]);
      a.T7 && (g.extend(c, a.T7),
      a.T7 = null);
      a.ja && (g.extend.apply(null, [e].concat(a.ja)),
      a.ja = null);
      a.B && e.B && (a.B = g.extend({}, e.B, a.B));
      var h = e.constructor.Gqa
        , k = {};
      if (void 0 !== h)
          for (f in h)
              h.hasOwnProperty(f) && (k[h[f]] = f);
      for (f in a)
          if (Object.prototype.hasOwnProperty.call(a, f)) {
              var l = f
                , m = f;
              h && k[f] && (m = k[f]);
              "function" === typeof a[l] && "function" === typeof e[m] && (a[l].ka = e[m])
          }
      g.extend(e, a);
      a.toString && (e.toString = a.toString);
      c.Sc = this.prototype;
      return c
  }
  ;
  g.aa.zb = g.aa.include = function(a) {
      g.extend(this.prototype, a)
  }
  ;
  g.extend = function(a) {
      var b = Array.prototype.slice.call(arguments, 1), c, d, e, f;
      d = 0;
      for (e = b.length; d < e; d += 1)
          if (f = b[d] || {},
          Object.assign)
              Object.assign(a, f);
          else
              for (c in f)
                  Object.prototype.hasOwnProperty.call(f, c) && (a[c] = f[c]);
      return a
  }
  ;
  g.aa.Nb = function(a) {
      for (var b in a)
          if (a.hasOwnProperty(b)) {
              var c = a[b];
              if ("string" === typeof c)
                  this.prototype[b] && (this.prototype[c] = this.prototype[b]);
              else
                  for (var d = 0, e = c.length; d < e; d++)
                      this.prototype[b] && (this.prototype[c[d]] = this.prototype[b])
          }
  }
  ;
  g.Sz = {
      rj: {},
      getKey: function(a, b) {
          a = a || "";
          return void 0 !== b && a ? a + "@" + b : a
      },
      Mo: function(a, b, c) {
          this.rj[a] || (this.rj[a] = {});
          b = this.getKey(b, c);
          void 0 == this.rj[a][b] && (this.rj[a][b] = 0)
      },
      send: function() {
          var a = [], b;
          for (b in this.rj)
              if (this.rj.hasOwnProperty(b)) {
                  var c = this.rj[b], d = [], e;
                  for (e in c)
                      c.hasOwnProperty(e) && 0 == c[e] && (d.push(e),
                      c[e] = 1);
                  d.length && a.push(b + "~" + d.join(","))
              }
          a.length && (a = ["type=nfl", "k=" + g.A.key, "m=" + (g.l.Z ? 1 : 0), "pf=" + g.l.Uy, "v=" + g.A.gr, "branch=JSAPI", "log=" + a.join("!")],
          a = g.A.Cc + "://webapi.amap.com/count?" + a.join("&"),
          new g.fb.vb(a))
      }
  };
  setInterval(function() {
      g.Sz.send()
  }, 1E4);
  g.sa = {
      g: function(a, b, c, d, e) {
          if (this.ee(a, b, c || this))
              return this;
          var f = this.$e = this.$e || {};
          f[a] = f[a] || [];
          e ? f[a].unshift({
              sb: b,
              Qe: c || this,
              oj: d
          }) : f[a].push({
              sb: b,
              Qe: c || this,
              oj: d
          });
          return this
      },
      ee: function(a, b, c) {
          var d = this.$e;
          if (b && c) {
              if (d && a in d && d[a])
                  for (var e = 0; e < d[a].length; e += 1)
                      if (d[a][e].sb === b && d[a][e].Qe === c)
                          return !0;
              return !1
          }
          return d && a in d && d[a] && 0 < d[a].length
      },
      G: function(a, b, c) {
          if (!this.ee(a))
              return this;
          var d = this.$e;
          if (d && d[a])
              for (var e = 0; e < d[a].length; e += 1)
                  if (!(d[a][e].sb !== b && "mv" !== b || c && d[a][e].Qe !== c)) {
                      d[a].splice(e, 1);
                      d[a].length || (d[a] = null);
                      break
                  }
          return this
      },
      mJ: function(a, b) {
          if (!this.ee(a))
              return this;
          var c = this.$e;
          if (c && c[a])
              for (var d = 0; d < c[a].length; d += 1)
                  if (!b || c[a][d].Qe === b) {
                      c[a].splice(d, 1);
                      c[a].length || (c[a] = null);
                      break
                  }
          return this
      },
      q: function(a, b) {
          if (!this.ee(a))
              return this;
          var c = {
              type: a
          };
          void 0 !== b && (b instanceof Array ? (c = b.slice(0),
          c.type = a) : "string" === typeof b || "number" === typeof b || "boolean" === typeof b ? c.value = b : g.a.NI(b) ? c.value = b : c = g.extend(c, b));
          for (var d = [].concat(this.$e[a]), e = 0; e < d.length; e += 1)
              d[e].sb && (d[e].sb.call(d[e].Qe || this, c),
              d[e] && d[e].oj && this.$e[a] && this.$e[a].splice(e, 1));
          return this
      },
      hi: function(a) {
          a ? this.$e && this.$e[a] && (this.$e[a] = null) : this.$e = null;
          return this
      }
  };
  g.sa.on || (g.sa.on = g.sa.g);
  g.sa.off || (g.sa.off = g.sa.G);
  g.sa.emit || (g.sa.emit = g.sa.q);
  g.Oe = {
      set: function(a, b, c) {
          var d = this.pl;
          if (d && d[a]) {
              var d = d[a]
                , e = "set" + this.t3(a);
              if (d[e]) {
                  var f = !1;
                  !0 == d.C ? f = !0 : d.C = !0;
                  d[e](b, c);
                  f || (d.C = !1);
                  c || this.HJ(a, b)
              } else
                  d.set(a, b, c)
          } else
              (this.Ge = this.Ge || {})[a] = b,
              c || this.HJ(a, b)
      },
      t3: function() {
          var a = {};
          return function(b) {
              a[b] || (a[b] = b[0].toUpperCase() + b.substr(1));
              return a[b]
          }
      }(),
      get: function(a, b, c) {
          var d, e = this.pl;
          d = "get" + this.t3(a);
          if (e && e[a])
              return c = e[a],
              c[d] ? (a = !1,
              !0 == c.C ? a = !0 : c.C = !0,
              b = c[d](b),
              a || (c.C = !1),
              b) : c.get(a, b);
          if (!c && this[d])
              return a = !1,
              !0 == this.C ? a = !0 : this.C = !0,
              b = this[d](b),
              a || (this.C = !1),
              b;
          if (this.Ge && this.Ge.hasOwnProperty(a))
              return this.Ge[a]
      },
      W: function(a, b, c) {
          this.pl || (this.pl = {});
          this.pl[a] !== b && (b.g(a, function(b) {
              this.HJ(a, b)
          }, this),
          this.pl[a] = b,
          c || this.HJ(a))
      },
      Pe: function(a, b, c) {
          for (var d = 0; d < a.length; d += 1)
              this.W(a[d], b, !c)
      },
      hl: function(a) {
          this.pl && this.pl[a] && (this.pl[a].G(a, "mv", this),
          this.pl[a] = void 0)
      },
      il: function() {
          if (this.pl)
              for (var a in this.pl)
                  this.pl.hasOwnProperty(a) && this.hl(a)
      },
      HJ: function(a, b) {
          var c = a + "Changed";
          if (this[c])
              this[c](b);
          this.q(a, b)
      },
      wDa: function(a, b, c) {
          var d = new (g.aa.extend({
              ja: [g.sa, g.Oe]
          }));
          d.gP = function() {
              for (var b = !0, e = 0; e < a.length; e += 1)
                  d.get(a[e]) || (b = !1);
              b && (d.il(),
              c())
          }
          ;
          for (var e = 0; e < a.length; e += 1)
              d.W(a[e], b)
      },
      We: function(a, b) {
          var c, d;
          for (c in a)
              a.hasOwnProperty(c) && (d = a[c],
              this.set(c, d, b))
      }
  };
  g.A = {
      localStorage: !0,
      cH: 500,
      ke: !0,
      pe: {
          dark: "#202020",
          blue_night: "#090d20",
          test: "#033447",
          mapv: "#000001",
          techblue: "#000b11",
          insight: "#19212a",
          "default": "#fcf9f2"
      },
      cEa: "dark light blue darkblue fresh grey midblue".split(" "),
      key: "24e27b17847a56fc66cfc5ee32c03219",
      Cc: "http",
      Ud: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989],
      Rd: "http://restapi.amap.com",
      yb: "http://webapi.amap.com",
      xJ: "http://gaode.com",
      dv: "http://m.amap.com",
      bD: "http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
      $I: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3",
      zT: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]",
      VJ: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8",
      WJ: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11",
      fE: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
      EK: "http://vector.amap.com",
      CK: "vdata.amap.com",
      pya: "ws"
  };
  function mc(a) {
      g.aa.nu = a.nu;
      g.l = a.l;
      g.gJ = a.gJ;
      g.Wta = a[7];
      a.l = null;
      g.A.yb = a[2].split(",")[0];
      g.A.uj = a.uj;
      g.A.aD = a.aD;
      var b = g.A.Cc = g.A.yb.split(":")[0];
      "https" === b && (g.A.pya = "wss",
      g.A.Rd = g.A.Rd.replace("http", "https"),
      g.A.bD = g.A.bD.replace("http", "https"),
      g.A.$I = g.A.$I.replace("http", "https"),
      g.A.zT = g.A.zT.replace("http", "https"),
      g.A.VJ = g.A.VJ.replace("http", "https"),
      g.A.WJ = g.A.WJ.replace("http", "https"),
      g.A.fE = g.A.fE.replace("http", "https"),
      g.A.EK = g.A.EK.replace("http", "https"));
      var c = window.location.href;
      0 !== c.indexOf("http") && window.parent && window.parent !== window && (c = window.parent.location.href);
      g.A.XBa = c;
      c = encodeURIComponent(c);
      g.A.Wt = c;
      g.A.ri = g.A.yb + "/theme/v1.3/markers/" + (g.l.Mc ? "b" : "n");
      var d = document.createElement("style");
      d.type = "text/css";
      g.A.Wma = "url(" + b + "://webapi.amap.com/theme/v1.3/openhand.cur),default";
      var e = ".amap-container{cursor:" + g.A.Wma + ";}.amap-drag{cursor:url(" + b + "://webapi.amap.com/theme/v1.3/closedhand.cur),default;}";
      d.styleSheet ? (b = function() {
          try {
              d.styleSheet.cssText = e
          } catch (a) {}
      }
      ,
      d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(e));
      (document.head || document.getElementsByTagName("head")[0]).appendChild(d);
      g.A.mode = Number(a[3]);
      g.A.Ud = a[1];
      g.A.key = a[0];
      g.A.gr = a[4];
      g.A.Gc = a[5];
      g.A.nka = a[6]
  }
  window.AMap && window.AMap.BK && window.AMap.BK.zL && window.AMap.BK.zL(mc);
  g.qm = {
      lu: Math.PI / 180,
      pua: 180 / Math.PI,
      VP: 6378137
  };
  (function() {
      function a(a) {
          return "undefined" === typeof a ? "" : a
      }
      g.Qh = {
          tpa: function(b) {
              b.name = a(b.name);
              var c = [b.y, b.x, b.name];
              if (g.l.Z) {
                  var d = [g.A.dv + "/callAPP?", "src=jsapi_q"];
                  d.push("&ios=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
                  d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + c.join(",") + "&sourceApplication=jsapi_q"));
                  d.push("&wp=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
                  d.push("&mo=" + encodeURIComponent(g.A.dv + "?q=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_q"));
                  return d.join("")
              }
              return g.A.xJ + "?q=" + c.join(",") + "&src=jsapi_q"
          },
          g3: function(b) {
              b.name = a(b.name);
              b.address = a(b.address);
              b.x = a(b.x);
              b.y = a(b.y);
              var c = [b.id, b.y, b.x, b.name, b.address];
              if (g.l.Z) {
                  var d = [g.A.dv + "/callAPP?", "src=jsapi_p"];
                  d.push("&ios=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                  d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&p=" + c.join(",") + "&sourceApplication=jsapi_p"));
                  d.push("&wp=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                  return d.join("")
              }
              return g.A.xJ + "?p=" + c.join(",") + "&src=jsapi_p"
          },
          e3: function(b) {
              if (g.l.Z) {
                  var c = [g.A.dv + "/callAPP?", "src=jsapi_detail"];
                  c.push("&ios=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                  b.name = a(b.name);
                  b.x = a(b.x);
                  b.y = a(b.y);
                  c.push("&android=" + encodeURIComponent("androidamap?action=openFeature&featureName=PoiDetail&poiid=" + b.id + "&poiname=" + b.name + "&x=" + b.x + "&y=" + b.y + "&sourceApplication=jsapi_detail"));
                  c.push("&wp=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                  c.push("&mo=" + encodeURIComponent(g.A.dv + "/detail/index/poiid=" + b.id + "&sourceApplication=jsapi_detail"));
                  return c.join("")
              }
              return g.A.xJ + "/detail/" + b.id + "?src=jsapi_detail"
          },
          SQ: function(b) {
              b.sname = a(b.sname);
              "" === b.sname && (b.sname = "\u8d77\u70b9");
              b.dname = a(b.dname);
              "" === b.dname && (b.dname = "\u7ec8\u70b9");
              b.mcount = a(b.mcount);
              b.my = a(b.my);
              b.mx = a(b.mx);
              b.mname = a(b.mname);
              var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname];
              if (g.l.Z) {
                  var d = [g.A.dv + "/callAPP?", "src=jsapi_r_" + b.t];
                  d.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                  var e = b.t;
                  0 === b.t ? e = 2 : 2 === b.t && (e = 4);
                  d.push("&android=" + encodeURIComponent("androidamap://route?sourceApplication=jsapi_r_" + b.t + "&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&dev=0&" + b.m + "&t=" + e));
                  d.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                  d.push("&mo=" + encodeURIComponent(g.A.dv + "/?r=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + b.t));
                  return d.join("")
              }
              return g.A.xJ + "?r=" + c.join(",") + "src=jsapi_r_" + b.t
          },
          Ks: function(a) {
              g.l.Z ? window.location.href = a : window.open(a)
          }
      }
  }
  )();
  "function" !== typeof Object.keys && (Object.keys = function(a) {
      var b = [], c;
      for (c in a)
          a.hasOwnProperty(c) && b.push(c);
      return b
  }
  );
  g.a = {
      CLASS_NAME: "AMap.Util",
      kK: [],
      Ca: 268435456,
      Eo: [215440491, 106744817],
      Z8: function() {
          var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
          return function(b, c) {
              var d = [], e;
              c = c || a.length;
              if (b)
                  for (e = 0; e < b; e++)
                      d[e] = a[0 | Math.random() * c];
              else {
                  var f;
                  d[8] = d[13] = d[18] = d[23] = "-";
                  d[14] = "4";
                  for (e = 0; 36 > e; e++)
                      d[e] || (f = 0 | 16 * Math.random(),
                      d[e] = a[19 === e ? f & 3 | 8 : f])
              }
              return d.join("")
          }
      }(),
      AC: {
          start: function(a) {
              a.startTime = new Date;
              a.Is = [];
              var b = (new Date).getTime();
              a.id = requestAnimationFrame(function d() {
                  var e = (new Date).getTime();
                  a.Is.push(e - b);
                  b = e;
                  a.id = requestAnimationFrame(d)
              })
          },
          cancel: function(a) {
              a.id && cancelAnimationFrame(a.id)
          },
          stop: function(a) {
              a.Dma = new Date - a.startTime;
              this.cancel(a);
              a.AC = Math.round(1E3 / (a.Dma / (a.Is.length + 1)))
          }
      },
      p3: function(a, b, c) {
          var d = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : !1;
          if (a === b)
              return b;
          switch (3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "linear") {
          case "ease":
              c = g.ew.MH(0.25, 0.1, 0.25, 1)(c);
              break;
          case "ease-in":
              c = g.ew.MH(0.42, 0, 1, 1)(c);
              break;
          case "ease-out":
              c = g.ew.MH(0, 0, 0.58, 1)(c);
              break;
          case "ease-in-out":
              c = g.ew.MH(0.42, 0, 0.58, 1)(c)
          }
          var e = a + (b - a) * c;
          d && (e >>= 0);
          return e
      },
      createObjectURL: function(a) {
          var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "text/javascript; charset=utf-8"
            , c = null;
          try {
              c = (window.URL || window.webkitURL).createObjectURL(new Blob([a],{
                  type: b
              }))
          } catch (d) {
              c = null
          }
          return c
      },
      revokeObjectURL: function(a) {
          (window.URL || window.webkitURL).revokeObjectURL(a)
      },
      OAa: function(a) {
          for (var b = {}, c = 0, d = a.length; c < d; c++)
              b[a[c]] = c;
          return b
      },
      EC: function(a) {
          var b = {};
          if (g.a.Uj(a, "object"))
              for (var c in a)
                  a.hasOwnProperty(c) && (b[a[c]] = c);
          return b
      },
      Vf: function(a, b) {
          for (var c = 0, d = b.length; c < d; c += 1)
              a.push(b[c])
      },
      create: "function" === typeof Object.create ? Object.create : function(a, b) {
          function c() {}
          c.prototype = a;
          var d = new c, e;
          for (e in b)
              b.hasOwnProperty(e) && (d[e] = b[e]);
          return d
      }
      ,
      jb: function(a) {
          if ("object" === typeof a && null !== a) {
              if (a.E5 || this.Uj(a, "Float32Array") || this.Uj(a, "Uint16Array"))
                  return a;
              var b = this.isArray(a) ? [] : {}, c;
              for (c in a)
                  a.hasOwnProperty(c) && (b[c] = g.a.jb(a[c]));
              return b
          }
          return a
      },
      t4: function(a) {
          return (a | 0) === a
      },
      Qva: "function" === typeof Object.setPrototypeOf ? Object.setPrototypeOf : function(a, b) {
          for (var c in b)
              a[c] = b[c]
      }
      ,
      Eh: function(a) {
          return "function" === typeof a
      },
      Hka: function(a) {
          var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "webgl";
          if (!a)
              return a;
          for (var c = [], d = 0, e = a.length; d < e; d += 2) {
              var f = parseInt(a.substr(d, 2), 16);
              if ("webgl" === b || "rgba" === b && 0 === d)
                  f = this.nc(f / 255, 3);
              c.push(f)
          }
          c.push(c.shift());
          return c
      },
      ns: function() {},
      keys: "function" === typeof Object.keys ? Object.keys : function(a) {
          var b = [], c;
          for (c in a)
              a.hasOwnProperty(c) && b.push(c);
          return b
      }
      ,
      map: function(a, b) {
          var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
            , d = [];
          if (a && a.length)
              g.a.Rb(a, function() {
                  for (var e = arguments.length, f = Array(e), h = 0; h < e; h++)
                      f[h] = arguments[h];
                  d[f[1]] = b.apply(c || a, f)
              });
          else
              return a;
          return d
      },
      forEach: function(a, b) {
          if (a && a.length) {
              var c = a.length;
              if (0 < c && (b(a[0], 0),
              1 < c)) {
                  b(a[1], 1);
                  for (var d = 2; d < c; d++)
                      b(a[d], d)
              }
          }
      },
      Rb: function(a, b) {
          var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          if (a && a.length)
              for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d, a); d++)
                  ;
      },
      find: function(a, b) {
          for (var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = 0, e = a.length; d < e; d++)
              if ("function" === typeof b) {
                  if (b.call(c, a[d], d, a))
                      return a[d]
              } else if (a[d] === b)
                  return a[d];
          return null
      },
      NI: function(a) {
          return "object" === typeof HTMLElement ? a instanceof HTMLElement : a && "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName
      },
      Rv: function(a, b) {
          var c = "ASDFGHJKLQWERTYUIO!sdfghjkleiu3~yr5-P&mq9`%zCN*b=8@^xpVM", d, e;
          "v5" < (b || "v5") ? (d = c.length,
          e = 512) : (d = 27,
          c = c.substr(0, 27),
          e = 333);
          var f, h, k, l, m;
          h = [];
          k = NaN;
          l = 0;
          for (m = a.length; l < m; l++)
              f = a[l],
              f = c.indexOf(f),
              isNaN(k) ? k = f * d : (h.push(k + f - e),
              k = NaN);
          return h
      },
      zva: function(a, b) {
          for (var c = 1, c = 512 < b.length ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math.ceil(b.length / c), e = 0; e < d; e += 1) {
              var f = c * e
                , h = f + c;
              h > b.length && (h = b.length);
              for (; f < h; f += 1)
                  a(b[f])
          }
      },
      mBa: function(a) {
          if (/^rgba\(/.test(a))
              return this.uv(a);
          var b = a = this.vH(a);
          "#" === a[0] && (a = a.substring(1),
          3 === a.length && (a = a.replace(/./g, function(a) {
              return a + a
          })),
          b = this.kr(8 === a.length ? a : "ff" + a));
          return this.uv(b)
      },
      vH: function() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
            , a = a.toLowerCase()
            , b = {
              aliceblue: "#f0f8ff",
              antiquewhite: "#faebd7",
              aqua: "#00ffff",
              aquamarine: "#7fffd4",
              azure: "#f0ffff",
              beige: "#f5f5dc",
              bisque: "#ffe4c4",
              black: "#000000",
              blanchedalmond: "#ffebcd",
              blue: "#0000ff",
              blueviolet: "#8a2be2",
              brown: "#a52a2a",
              burlywood: "#deb887",
              cadetblue: "#5f9ea0",
              chartreuse: "#7fff00",
              chocolate: "#d2691e",
              coral: "#ff7f50",
              cornflowerblue: "#6495ed",
              cornsilk: "#fff8dc",
              crimson: "#dc143c",
              cyan: "#00ffff",
              darkblue: "#00008b",
              darkcyan: "#008b8b",
              darkgoldenrod: "#b8860b",
              darkgray: "#a9a9a9",
              darkgreen: "#006400",
              darkkhaki: "#bdb76b",
              darkmagenta: "#8b008b",
              darkolivegreen: "#556b2f",
              darkorange: "#ff8c00",
              darkorchid: "#9932cc",
              darkred: "#8b0000",
              darksalmon: "#e9967a",
              darkseagreen: "#8fbc8f",
              darkslateblue: "#483d8b",
              darkslategray: "#2f4f4f",
              darkturquoise: "#00ced1",
              darkviolet: "#9400d3",
              deeppink: "#ff1493",
              deepskyblue: "#00bfff",
              dimgray: "#696969",
              dodgerblue: "#1e90ff",
              firebrick: "#b22222",
              floralwhite: "#fffaf0",
              forestgreen: "#228b22",
              fuchsia: "#ff00ff",
              gainsboro: "#dcdcdc",
              ghostwhite: "#f8f8ff",
              gold: "#ffd700",
              goldenrod: "#daa520",
              gray: "#808080",
              green: "#008000",
              greenyellow: "#adff2f",
              honeydew: "#f0fff0",
              hotpink: "#ff69b4",
              indianred: "#cd5c5c",
              indigo: "#4b0082",
              ivory: "#fffff0",
              khaki: "#f0e68c",
              lavender: "#e6e6fa",
              lavenderblush: "#fff0f5",
              lawngreen: "#7cfc00",
              lemonchiffon: "#fffacd",
              lightblue: "#add8e6",
              lightcoral: "#f08080",
              lightcyan: "#e0ffff",
              lightgoldenrodyellow: "#fafad2",
              lightgrey: "#d3d3d3",
              lightgreen: "#90ee90",
              lightpink: "#ffb6c1",
              lightsalmon: "#ffa07a",
              lightseagreen: "#20b2aa",
              lightskyblue: "#87cefa",
              lightslategray: "#778899",
              lightsteelblue: "#b0c4de",
              lightyellow: "#ffffe0",
              lime: "#00ff00",
              limegreen: "#32cd32",
              linen: "#faf0e6",
              magenta: "#ff00ff",
              maroon: "#800000",
              mediumaquamarine: "#66cdaa",
              mediumblue: "#0000cd",
              mediumorchid: "#ba55d3",
              mediumpurple: "#9370d8",
              mediumseagreen: "#3cb371",
              mediumslateblue: "#7b68ee",
              mediumspringgreen: "#00fa9a",
              mediumturquoise: "#48d1cc",
              mediumvioletred: "#c71585",
              midnightblue: "#191970",
              mintcream: "#f5fffa",
              mistyrose: "#ffe4e1",
              moccasin: "#ffe4b5",
              navajowhite: "#ffdead",
              navy: "#000080",
              oldlace: "#fdf5e6",
              olive: "#808000",
              olivedrab: "#6b8e23",
              orange: "#ffa500",
              orangered: "#ff4500",
              orchid: "#da70d6",
              palegoldenrod: "#eee8aa",
              palegreen: "#98fb98",
              paleturquoise: "#afeeee",
              palevioletred: "#d87093",
              papayawhip: "#ffefd5",
              peachpuff: "#ffdab9",
              peru: "#cd853f",
              pink: "#ffc0cb",
              plum: "#dda0dd",
              powderblue: "#b0e0e6",
              purple: "#800080",
              rebeccapurple: "#663399",
              red: "#ff0000",
              rosybrown: "#bc8f8f",
              royalblue: "#4169e1",
              saddlebrown: "#8b4513",
              salmon: "#fa8072",
              sandybrown: "#f4a460",
              seagreen: "#2e8b57",
              seashell: "#fff5ee",
              sienna: "#a0522d",
              silver: "#c0c0c0",
              skyblue: "#87ceeb",
              slateblue: "#6a5acd",
              slategray: "#708090",
              snow: "#fffafa",
              springgreen: "#00ff7f",
              steelblue: "#4682b4",
              tan: "#d2b48c",
              teal: "#008080",
              thistle: "#d8bfd8",
              tomato: "#ff6347",
              turquoise: "#40e0d0",
              violet: "#ee82ee",
              wheat: "#f5deb3",
              white: "#ffffff",
              whitesmoke: "#f5f5f5",
              yellow: "#ffff00",
              yellowgreen: "#9acd32"
          };
          return "string" === typeof a ? b[a.toLowerCase()] ? b[a.toLowerCase()] : a : a
      },
      NH: function(a, b, c) {
          var d, e;
          d = Math.floor(c / 2);
          e = c - d;
          d = (1 << d) - 1 << e;
          e = (1 << e) - 1;
          return [c, a & d | b & e, b & d | a & e]
      },
      OH: function(a) {
          return a ? encodeURIComponent(a) : ""
      },
      Vc: function(a, b, c, d) {
          c = a[b].i[c];
          if ("undefined" === typeof c)
              return null;
          a = a[b].s;
          if ("number" === typeof c)
              return a[c];
          for (; "undefined" === typeof c[d.toString()] && !(d -= 1,
          3 > d); )
              ;
          d = c[d.toString()];
          return "number" === typeof d ? a[d] : null
      },
      uv: function(a) {
          a = a.split(",");
          a[0] = parseFloat(a[0].split("rgba(")[1]) / 255;
          a[1] = parseFloat(a[1]) / 255;
          a[2] = parseFloat(a[2]) / 255;
          a[3] = parseFloat(a[3]);
          return a
      },
      lva: function(a) {
          a = a.split(",");
          a[0] = parseFloat(a[0].split("rgb(")[1]) / 255;
          a[1] = parseFloat(a[1]) / 255;
          a[2] = parseFloat(a[2]) / 255;
          return a
      },
      uT: function(a) {
          return "rgba(" + 255 * a[0] + "," + 255 * a[1] + "," + 255 * a[2] + "," + a[3] + ")"
      },
      kma: function(a) {
          return this.uT(this.Tm(a))
      },
      Tm: function(a) {
          if (a instanceof Array)
              return 3 == a.length && a.push(1),
              a;
          a = this.vH(a);
          if (0 == a.indexOf("#")) {
              if (4 === a.length)
                  return a = a.substr(1).replace(/./g, function(a) {
                      return a + a
                  }),
                  this.As(a);
              if (7 == a.length)
                  return this.As(a.substr(1));
              if (9 == a.length)
                  return a = a.substr(1),
                  this.Ek(a.substr(6) + a.substr(0, 6))
          } else {
              if (0 == a.indexOf("rgb("))
                  return a = this.lva(a),
                  a.push(1),
                  a;
              if (0 == a.indexOf("rgba("))
                  return this.uv(a)
          }
      },
      d7: function(a) {
          return g.a.kr("ff" + a)
      },
      kr: function(a) {
          for (var b = [], c = 0, d = a.length; c < d; c += 2)
              b.push(parseInt(a.substr(c, 2), 16));
          b.push((b.shift() / 255).toFixed(2));
          return "rgba(" + b.join(",") + ")"
      },
      As: function(a) {
          return g.a.Ek("ff" + a)
      },
      Ek: function(a) {
          for (var b = [], c = 0, d = a.length; c < d; c += 2)
              b.push(parseInt(a.substr(c, 2), 16) / 255);
          b.push(b.shift());
          return b
      },
      Qk: function(a) {
          for (var b in a)
              if (a.hasOwnProperty(b))
                  return !1;
          return !0
      },
      fo: function(a, b) {
          0 <= b && a.splice(b, 1);
          return a
      },
      mwa: function(a, b) {
          return a.startsWith ? a.startsWith(b) : a.substr(0, b.length) === b
      },
      Tx: function(a, b) {
          var c = g.a.indexOf(a, b);
          return g.a.fo(a, c)
      },
      filter: function(a, b, c) {
          var d = [];
          g.a.Rb(a, function(a, f) {
              b.call(c, a, f) && d.push(a)
          });
          return d
      },
      indexOf: function(a, b) {
          if (!a || !a.length)
              return -1;
          if (a.indexOf)
              return a.indexOf(b);
          for (var c = 0; c < a.length; c += 1)
              if (a[c] === b)
                  return c;
          return -1
      },
      vC: function(a, b) {
          return a.endsWith ? a.endsWith(b) : a.length < b.length ? !1 : a.substr(a.length - b.length) == b ? !0 : !1
      },
      bind: function() {
          var a = !1;
          Function.prototype.bind && (a = !0);
          return function(b, c) {
              var d = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null;
              return a ? d ? (d.unshift(c),
              b.bind.apply(b, d)) : b.bind(c) : function() {
                  return b.apply(c, d || arguments)
              }
          }
      }(),
      Db: function(a, b) {
          b = b || {};
          a.B = g.extend({}, a.B, b);
          return a.B
      },
      cma: function(a, b, c) {
          return "function" == typeof b ? this.NO(a, !0, this.bla(b, c, 1)) : this.NO(a, !0)
      },
      NO: function(a, b, c, d, e, f, h) {
          var k;
          c && (k = e ? c(a, d, e) : c(a));
          if (void 0 !== k)
              return k;
          if (!this.y4(a))
              return a;
          if (d = this.isArray(a)) {
              if (k = this.yqa(a),
              !b)
                  return this.Jka(a, k)
          } else {
              var l = Object.prototype.toString.call(a)
                , m = "[object Function]" == l;
              if ("[object Object]" == l || "[object Arguments]" == l || m && !e) {
                  if (k = this.zqa(m ? {} : a),
                  !b)
                      return this.Ska(k, a)
              } else
                  return e ? a : {}
          }
          f || (f = []);
          h || (h = []);
          for (e = f.length; e--; )
              if (f[e] == a)
                  return h[e];
          f.push(a);
          h.push(k);
          (d ? this.Kka : this.Xka)(a, function(d, e) {
              k[e] = g.a.NO(d, b, c, e, a, f, h)
          });
          return k
      },
      Ska: function(a, b) {
          return null == b ? a : this.Vka(b, Object.keys(b), a)
      },
      y4: function(a) {
          var b = typeof a;
          return !!a && ("object" == b || "function" == b)
      },
      pDa: function(a) {
          return !!a && "object" == typeof a
      },
      nDa: function(a) {
          return "number" == typeof a && -1 < a && 0 == a % 1 && 9007199254740991 >= a
      },
      yqa: function(a) {
          var b = a.length
            , c = new a.constructor(b);
          b && "string" == typeof a[0] && Object.hasOwnProperty.call(a, "index") && (c.index = a.index,
          c.input = a.input);
          return c
      },
      Jka: function(a, b) {
          var c = -1
            , d = a.length;
          for (b || (b = Array(d)); ++c < d; )
              b[c] = a[c];
          return b
      },
      zqa: function(a) {
          a = a.constructor;
          "function" == typeof a && a instanceof a || (a = Object);
          return new a
      },
      bla: function(a, b, c) {
          if ("function" != typeof a)
              return this.Mu;
          if (void 0 === b)
              return a;
          switch (c) {
          case 1:
              return function(c) {
                  return a.call(b, c)
              }
              ;
          case 3:
              return function(c, e, f) {
                  return a.call(b, c, e, f)
              }
              ;
          case 4:
              return function(c, e, f, h) {
                  return a.call(b, c, e, f, h)
              }
              ;
          case 5:
              return function(c, e, f, h, k) {
                  return a.call(b, c, e, f, h, k)
              }
          }
          return function() {
              return a.apply(b, arguments)
          }
      },
      Kka: function(a, b) {
          for (var c = -1, d = a.length; ++c < d && !1 !== b(a[c], c, a); )
              ;
          return a
      },
      Mu: function(a) {
          return a
      },
      Ema: function(a) {
          return function(b, c, d) {
              var e = g.a.Owa(b);
              d = d(b);
              for (var f = d.length, h = a ? f : -1; a ? h-- : ++h < f; ) {
                  var k = d[h];
                  if (!1 === c(e[k], k, e))
                      break
              }
              return b
          }
      },
      Xka: function(a, b) {
          return g.a.Ema()(a, b, Object.keys)
      },
      Owa: function(a) {
          return g.a.y4(a) ? a : Object(a)
      },
      Vka: function(a, b, c) {
          c || (c = {});
          for (var d = -1, e = b.length; ++d < e; ) {
              var f = b[d];
              c[f] = a[f]
          }
          return c
      },
      q2: function() {
          return !1
      },
      join: function(a, b) {
          if (a.join)
              return a.join(b);
          var c = [], d;
          for (d in a)
              a.hasOwnProperty(d) && c.push(d + "=" + (a[d] || ""));
          return c.join(b)
      },
      U2: function(a, b) {
          return (a || "") + Math.round(Math.random() * Math.pow(10, b || 6))
      },
      ub: function() {
          var a = 0;
          return function(b) {
              b._amap_id || (a += 1,
              b._amap_id = a);
              return b._amap_id
          }
      }(),
      Pna: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
      wf: Date.now ? function() {
          return Date.now()
      }
      : function() {
          return (new Date).getTime()
      }
      ,
      ZC: function(a, b, c, d) {
          var e;
          if (d) {
              var f = 0, h, k = this.wf;
              e = function() {
                  h = k();
                  if (h - f < b)
                      return !1;
                  f = h;
                  a.apply(c, arguments)
              }
          } else {
              var l, m, n;
              n = function() {
                  l = !1;
                  m && (e.apply(c, m),
                  m = !1)
              }
              ;
              e = function() {
                  l ? m = arguments : (l = !0,
                  a.apply(c, arguments),
                  setTimeout(n, b))
              }
          }
          return e
      },
      nc: function(a, b) {
          return a === a << 0 ? a : +parseFloat(a).toFixed(b || 0)
      },
      isArray: Array.isArray ? Array.isArray : function(a) {
          return this.Uj(a, "array")
      }
      ,
      Uj: function(a, b) {
          return Object.prototype.toString.call(a).split(" ")[1].slice(0, -1).toLowerCase() === b.toLowerCase()
      },
      ja: "function" === typeof Array.prototype.ja ? function(a, b) {
          return a.ja(b)
      }
      : function(a, b) {
          return -1 !== this.indexOf(a, b)
      }
      ,
      X7: function(a) {
          var b = 0;
          if (0 === a.length)
              return b;
          for (var c, d = 0, e = a.length; d < e; d += 1)
              c = a.charCodeAt(d),
              b = (b << 5) - b + c,
              b &= b;
          return b
      },
      zBa: function(a, b) {
          b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1;
          for (var c = "", d = 0, e = a.length; d < e; d++)
              c += String.fromCharCode((a.charCodeAt(d) - 256 - b + 65535) % 65535);
          return c
      },
      Zma: function(a, b) {
          var c = (a + "").slice(-2)
            , d = (b + "").slice(-2);
          a = a.slice(0, -2);
          b = b.slice(0, -2);
          var e = parseInt((d + c).slice(1))
            , f = Math.ceil(e / 250) % 2 ? 1 : -1
            , d = parseInt("1" + d) / 3E3;
          a -= parseInt("1" + c) / 3E3 * f;
          b -= d * (1 < e / 500 ? 1 : -1);
          return new g.T(parseFloat(a).toFixed(5),parseFloat(b).toFixed(5))
      },
      G5: function(a) {
          return "undefined" !== typeof JSON && JSON.stringify ? g.a.X7(JSON.stringify(a)) : null
      },
      FFa: function(a, b) {
          if (b || !a.hasOwnProperty("_amap_hash")) {
              var c = g.a.G5(a);
              c && (a._amap_hash = c)
          }
          return a._amap_hash
      },
      iepngFix: function(a) {
          function b() {
              for (var a; c.length; )
                  a = c.shift(),
                  window.DD_belatedPNG.fixPng(a);
              d.KR = !0
          }
          this.q6 || (this.q6 = [],
          this.KR = !1);
          var c = this.q6
            , d = this;
          if ("img" === a.tagName.toLowerCase())
              c.push(a);
          else {
              a = a.getElementsByTagName("*");
              for (var e = 0; e < a.length; e += 1)
                  c.push(a[e])
          }
          window.DD_belatedPNG && this.KR ? setTimeout(function() {
              b()
          }, 100) : this.KR || g.qb.load("AMap.FixPng", b)
      },
      Ha: function(a) {
          if (g.a.isArray(a))
              if (g.a.isArray(a[0]))
                  for (var b = 0; b < a.length; b += 1)
                      a[b] = g.a.Ha(a[b]);
              else if (b = typeof a[0],
              "string" === b || "number" === b)
                  return new g.T(a[0],a[1]);
          return a
      },
      rya: function(a) {
          for (var b = [], c = 0, d = a.length; c < d; c += 1)
              b[c] = [a[c].x, a[c].y];
          return b
      },
      bq: function(a) {
          return g.a.isArray(a) ? new g.xd(a[0],a[1]) : a
      },
      GO: function(a) {
          var b = a.type
            , c = a.VT
            , d = a.error;
          a = new g.fb.XMLHttpRequest(a.url,{
              vd: void 0 === b ? "GET" : b,
              I1: a.data,
              rT: "text/plain"
          });
          a.g("complete", function(a) {
              a = JSON.parse(a.data);
              c && c(a)
          }, this);
          a.g("error", function() {
              var a = {
                  errmsg: "REQUEST_FAILED"
              };
              d && d(a)
          }, this)
      }
  };
  (function() {
      function a(a) {
          window.clearTimeout(a)
      }
      function b(a) {
          var b, c, d = ["webkit", "moz", "o", "ms"];
          for (b = 0; b < d.length && !c; b += 1)
              c = window[d[b] + a];
          return c
      }
      function c(a) {
          var b = +new Date
            , c = Math.max(0, (g.l.El ? 50 : 20) - (b - d));
          d = b + c;
          return window.setTimeout(a, c)
      }
      var d = 0
        , e = window.requestAnimationFrame || b("RequestAnimationFrame") || c
        , f = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || a;
      g.a.Qc = function(a, b, c, d) {
          if (c)
              b ? g.a.bind(a, b).call(b, d) : a();
          else
              return e(function() {
                  b ? g.a.bind(a, b).call(b, d) : a()
              })
      }
      ;
      g.a.fi = function(a) {
          a && f.call(window, a)
      }
  }
  )();
  g.a.sT = window.requestIdleCallback ? function(a, b) {
      return window.requestIdleCallback(a, b)
  }
  : function(a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
        , c = g.a.wf();
      return setTimeout(function() {
          a({
              didTimeout: !1,
              timeRemaining: function() {
                  return Math.max(0, 70 - (g.a.wf() - c))
              }
          })
      }, b.timeout || 0)
  }
  ;
  g.a.eP = window.cancelIdleCallback ? function(a) {
      return window.cancelIdleCallback(a)
  }
  : function(a) {
      clearTimeout(a)
  }
  ;
  (function(a) {
      var b = 1
        , c = {};
      a.a.Ova = function(a, b) {
          if (c[a]) {
              var f = c[a];
              f.VD = 1;
              f.result = b;
              if (f.Qm) {
                  for (var h = f.Qm, k = 0, l = h.length; k < l; k++)
                      h[k].call(null, b);
                  f.Qm = null
              }
          }
      }
      ;
      a.a.Zla = function(a) {
          c[a] = null
      }
      ;
      a.a.aya = function(a, b) {
          if (c[a]) {
              var f = c[a];
              0 < f.VD ? b(null, f.result) : (f.Qm || (f.Qm = []),
              f.Qm.push(b))
          } else
              b(null, a)
      }
      ;
      a.a.LQ = function(d, e) {
          var f = navigator.geolocation;
          if (!a.l.JI || "https:" === document.location.protocol)
              return d(null, f);
          var h;
          e && e.bya && (h = "f" + b++,
          c[h] = {
              VD: 0
          });
          var k = null
            , l = !1;
          e && e.timeout && (k = setTimeout(function() {
              k = void 0;
              d({
                  code: 3,
                  info: "TIME_OUT",
                  message: "Get geolocation time out."
              });
              l = !0
          }, e.timeout));
          f.getCurrentPosition(function() {
              l || (clearTimeout(k),
              k = void 0,
              d(null, f))
          }, function(b) {
              l || (clearTimeout(k),
              k = void 0,
              2 === b.code && 0 < b.message.indexOf("permission") ? a.qb.load("AMap.GeoRemoteLoc", function() {
                  d(null, a.V9, h)
              }) : d(null, f))
          }, {
              timeout: 1E3
          });
          return h
      }
  }
  )(g);
  (function(a) {
      var b = a.aa.extend({
          ja: [a.sa],
          r: function() {}
      });
      a.wj = new b
  }
  )(g);
  (function(a) {
      var b = a.aa.extend({
          ja: [a.sa],
          r: function() {
              this.Lea()
          },
          Lea: function() {
              a.wj && a.wj.g("vecTileParsed.buildings", this.qea, this)
          },
          r4: function(a) {
              return a.map.zY
          },
          fpa: function(a) {
              return this.r4(a) ? a.map.TM : null
          },
          Lva: function(a, b) {
              if (b) {
                  var e = b.map;
                  e && (e.TM ? e.TM.toString() : "") !== (a ? a.toString() : "") && (e.TM = a || [],
                  e.set("display", 0))
              }
          },
          w7: function(a, b) {
              if (b) {
                  var e = b.map;
                  e && e.zY !== a && (e.zY = a,
                  e.set("display", 0))
              }
          },
          Xza: function() {},
          vY: function(a, b) {
              if (a)
                  for (var e = 0, f = a.length; e < f; e++)
                      a[e] && 0 > b.indexOf(a[e]) && b.push(a[e])
          },
          u2: function(b) {
              if (!b)
                  return null;
              b = b.map.xa;
              for (var d = 0, e = b.length; d < e; d++)
                  if (a.o.Uh && b[d]instanceof a.o.Uh && b[d].ha && b[d].ha.length && (-1 !== b[d].ha.indexOf("building") || -1 !== b[d].ha.indexOf("poilabel")) && b[d].Ja) {
                      var f = b[d].U.get("tiles", null, !0);
                      if (f && f.length)
                          return b[d]
                  }
              return null
          },
          Doa: function(a) {
              if (a = this.u2(a)) {
                  if (a = a.U.get("tiles", null, !0))
                      a = a[0];
                  else
                      return null;
                  if (!a || !a.length)
                      return null;
                  for (var b = [], e = 0, f = a.length; e < f; e++) {
                      var h = a[e];
                      h.ae && h.ae.ef && this.vY(h.ae.ef, b)
                  }
                  return b
              }
          },
          qea: function(a) {
              if (a.Qo && a.Qo.ae) {
                  var b = a.Qo.ae.ef;
                  if (b) {
                      var e = [];
                      this.vY(b, e);
                      this.q("vecTileParsed.builds.found", {
                          h1: e,
                          Qo: a.Qo
                      })
                  }
              }
          }
      });
      a.yj = new b
  }
  )(g);
  (function(a) {
      function b() {
          return {
              checkup: function() {
                  var a = Array.prototype.slice.call(arguments, 0);
                  a.pop()(null, a)
              }
          }
      }
      function c(a) {
          return {
              injectCode: function(b, c) {
                  var d = null
                    , e = null;
                  try {
                      d = (new Function("self",b))(a)
                  } catch (f) {
                      console.error("error", e),
                      e = f.toString()
                  }
                  c(e, d)
              }
          }
      }
      function d(a) {
          function b(c, d) {
              function e(a, b, c) {
                  a = {
                      qz: Date.now(),
                      cz: h,
                      error: a,
                      result: b,
                      Zp: !1,
                      Jk: !1
                  };
                  if (c)
                      for (var f in c)
                          c.hasOwnProperty(f) && (a[f] = c[f]);
                  d(a)
              }
              var f = c.lR
                , h = c.cz
                , l = c.rP
                , m = c.VB
                , n = c.Ika || []
                , p = a._wkHandlers[f];
              p ? p[l] ? m ? p[l].apply(p, n.concat(e)) : e(null, p[l].apply(p, n)) : e("Unknown cmd: " + l) : e("Can not find handler for: " + f)
          }
          var c = []
            , d = null
            , e = null;
          for (d in this._wkHandlers)
              -1 !== d.indexOf("_def_") && (e = this._wkHandlers.ZDa = d);
          "function" === typeof this._wkHandlers[e].r && this._wkHandlers[e].r.call(this._wkHandlers[e]);
          a.Ut = function(a) {
              c.push.apply(c, a)
          }
          ;
          a.addEventListener("message", function(d) {
              function e(b) {
                  if (t) {
                      t.push(b);
                      var d = !!b.Zp;
                      d || n++;
                      b = n >= h || b.Jk;
                      if (d || b) {
                          d = 1 < t.length ? {
                              fva: t
                          } : t[0];
                          d.qz = Date.now();
                          d.mFa = p;
                          if (c.length) {
                              try {
                                  a.postMessage(d, c)
                              } catch (f) {
                                  a.postMessage(d),
                                  console.error(f)
                              }
                              c.length = 0
                          } else
                              a.postMessage(d);
                          t.length = 0;
                          b && (e = t = null)
                      }
                  } else
                      console.error("Seemed callback already sent!!", b, b.result.dc)
              }
              var f = d.data;
              d = f.cva || [f];
              for (var h = d.length, n = 0, p = Date.now() - f.qz, t = [], f = 0; f < h; f++)
                  b(d[f], e)
          }, !1)
      }
      function e(d, h) {
          this.B = a.extend({
              batchSend: !0,
              lazy: !1,
              libPolyfills: null
          }, h);
          this.op = [];
          this.oA = this.B.clientId || "w" + f++;
          this.B.onReady && this.pS(this.B.onReady);
          this.CF = this.rda();
          if ("function" === typeof d) {
              var m = {};
              m[this.CF] = d;
              d = m
          }
          d[e.YQ] = c;
          d[this.FX()] = b;
          this.RF = d;
          this.hB(null);
          this.B.lazy || this.Gx();
          a.Rpa || !1 === this.B.hostWorker || (a.Rpa = this);
          this.On && this.On.r && this.On.r.call(this.On)
      }
      var f = 1
        , h = 1;
      a.extend(e, {
          YQ: "_g_",
          $va: function(a) {
              if (!a.Daa) {
                  var b = [];
                  a.addEventListener("message", function(a) {
                      a = a.data;
                      a = a.fva || [a];
                      for (var c = 0, d = a.length; c < d; c++) {
                          var e = a[c], f;
                          a: {
                              f = e.cz;
                              for (var k = !e.Jk, h = 0, v = b.length; h < v; h++) {
                                  var x = b[h];
                                  if (f === x.cz) {
                                      k || b.splice(h, 1);
                                      f = x;
                                      break a
                                  }
                              }
                              f = void 0
                          }
                          f && f.VB(e.error, e.result, !0)
                      }
                  }, !1);
                  a.raa = b;
                  a.Daa = !0
              }
          }
      });
      a.extend(e.prototype, {
          rda: function() {
              return "_def_" + this.oA
          },
          FX: function() {
              return "_cln_" + this.oA
          },
          Lia: function() {
              var a = Array.prototype.slice.call(arguments, 0);
              this.q_ = a;
              if (this.kx) {
                  for (var b = 0, c = this.kx.length; b < c; b++)
                      this.kx[b].apply(null, a);
                  this.kx.length = 0
              }
          },
          Ut: function(a) {
              this.Cia && this.op.push.apply(this.op, a)
          },
          pS: function(a) {
              this.q_ ? a.apply(null, this.q_) : (this.kx || (this.kx = []),
              this.kx.push(a))
          },
          Gx: function(b) {
              var c = this;
              if (!c.DW) {
                  c.DW = !0;
                  var d = function(d, e) {
                      d && a.l.MR && console.warn(d);
                      c.Lia.call(c, d, e);
                      b && b(d, e)
                  };
                  a.l.MR ? this.yia(function(a, b) {
                      b ? this.Sea(b, function(a, c) {
                          a ? d(a) : (this.hB(c),
                          this.CO = c,
                          this.op.length = 0,
                          this.On = null,
                          d(null, {
                              Zka: b,
                              mya: c
                          }))
                      }) : d("Worker start failed!")
                  }) : d("Worker not supported!")
              }
          },
          jf: function(b, c) {
              var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : a.a.ns
                , f = this;
              b = b || f.CF;
              var h = {};
              if (a.a.Uj(c, "object")) {
                  var q = "return {", r;
                  for (r in c)
                      if (c.hasOwnProperty(r))
                          var s = c[r]
                            , q = "function" === typeof s ? q + ("\n\t" + r + ": " + s.toString() + ",") : "object" === typeof s ? q + ("\n\t" + r + ": " + JSON.stringify(s) + ",") : q + ("\n\t" + r + ': "' + s + '",');
                  c = new Function(q + "\n}")
              }
              f.hW(b, c, h);
              f.hB(null, h);
              f.pS(function(a) {
                  a ? d(a) : f.CO ? (a = f.KX(c, f.FM(f.oA, b), !0),
                  f.CO.sendMessage(e.YQ + ":injectCode", a, function(a, b) {
                      a || f.hB(f.CO, h);
                      d(a, b)
                  })) : d("Worker msger missing!!")
              })
          },
          FM: function(a, b) {
              if (!a || !b)
                  throw Error("clientId or ns missing!!");
              return a + "_" + b
          },
          Oda: function(a, b, c) {
              function d() {
                  var b = Array.prototype.slice.call(arguments, 0);
                  c.sendMessage.apply(c, [a].concat(b))
              }
              var e = this;
              if (!c)
                  return function() {
                      var a = b.apply(e.On, arguments);
                      e.DW || "untilCall" === e.B.lazy && e.Gx();
                      return a
                  }
                  ;
              d._proxy2Worker = !0;
              return d
          },
          sba: function(a) {
              var b = {}, c;
              for (c in a)
                  a.hasOwnProperty(c) && this.hW(c, a[c], b);
              return b
          },
          hW: function(a, b, c) {
              b = b.call(null, !1);
              for (var d in b)
                  b.hasOwnProperty(d) && (c[a + ":" + d] = b[d],
                  a === this.CF && (c[d] = b[d]))
          },
          hB: function(a, b) {
              if (!b)
                  this.On || (this.On = this.sba(this.RF)),
                  b = this.On;
              else if (this.On)
                  for (var c in b)
                      b.hasOwnProperty(c) && (this.On[c] = b[c]);
              for (c in b)
                  if (b.hasOwnProperty(c)) {
                      var d = b[c];
                      "function" === typeof d && (this[c] = this.Oda(c, d, a))
                  }
              this.Cia = !!a
          },
          KX: function(a, b) {
              var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1, d = a.toString(), e, d = d.replace(/^function([^\(]*)\(/, function() {
                  e = "_prep_h" + h++;
                  return "function " + e + "("
              });
              return e ? "\n\t\t\t\t" + d + "\n\t\t\t\tif (self._wkHandlers['" + b + "'] && " + !c + ") {\n\t\t\t\t\tthrow new Error('" + b + " already exists!')\n\t\t\t\t} else {\n\t\t\t\t\tif (" + c + " && self._wkHandlers['" + b + "']) {\n\t\t\t\t\t\tvar handlerFunObj = " + e + ".call(null, self) || {}\n\n\t\t\t\t\t\tif (typeof Object.assign === 'function') {\n\t\t\t\t\t\t\tObject.assign(self._wkHandlers['" + b + "'], handlerFunObj)\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfor (var key in handlerFunObj) {\n\t\t\t\t\t\t\t\tif (handlerFunObj.hasOwnProperty(key)) {\n\t\t\t\t\t\t\t\t\tself._wkHandlers['" + b + "'][key] = handlerFunObj[key]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tself._wkHandlers['" + b + "'] = " + e + ".call(null, self) || {}\t\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t" + e + " = null;\n\t\t\t" : (console.error("No function match!!"),
              !1)
          },
          yia: function(a) {
              var b = this.oA, c = [], d;
              for (d in this.RF)
                  if (this.RF.hasOwnProperty(d)) {
                      var f = this.KX(this.RF[d], this.FM(b, d));
                      f && c.push(f)
                  }
              b = this.B.libPolyfills || [];
              d = 0;
              for (f = b.length; d < f; d++)
                  b[d] = "(" + b[d].toString() + ")(self);";
              var h = b.join(";\n") + ";\n" + c.join(";\n")
                , c = this.B.hostWorker
                , r = this;
              c && c !== r ? c.pS(function(b, c) {
                  b ? a.call(r, b) : c.mya.sendMessage(e.YQ + ":injectCode", h, function(b) {
                      b ? a.call(r, b) : a.call(r, null, c.Zka)
                  })
              }) : a.call(r, null, r.Oja(h))
          },
          Oja: function(b) {
              b = ["self._wkHandlers={};", b, "(" + d.toString() + ")(self)"].join("");
              var c;
              try {
                  var e = a.a.createObjectURL(b);
                  c = new Worker(e);
                  setTimeout(function() {
                      a.a.revokeObjectURL(e);
                      e = null
                  }, 3E3)
              } catch (f) {
                  return
              }
              return c
          },
          kca: function(b) {
              var c = 1
                , d = b.raa
                , e = this
                , f = !!e.B.batchSend;
              return function(h) {
                  var r = Array.prototype.slice.call(arguments, 1)
                    , s = "function" === typeof r[r.length - 1] ? r.pop() : null
                    , u = e.oA
                    , v = h.split(":")
                    , x = e.CF;
                  1 < v.length && (h = v[1],
                  x = v[0]);
                  r = {
                      qz: a.a.wf(),
                      lR: e.FM(u, x),
                      VB: !!s,
                      cz: u + "_" + c++,
                      rP: h,
                      Ika: r
                  };
                  s && d.push({
                      rP: r.rP,
                      lR: r.lR,
                      qz: r.qz,
                      cz: r.cz,
                      VB: s
                  });
                  f ? e.Waa(b, r) : e.ix(b, r)
              }
          },
          ix: function(a, b) {
              if (this.op.length) {
                  try {
                      a.postMessage(b, this.op)
                  } catch (c) {
                      a.postMessage(b),
                      console.error(c)
                  }
                  this.op.length = 0
              } else
                  a.postMessage(b)
          },
          Waa: function(b, c) {
              b.yN || (b.yN = []);
              b.yN.push(c);
              if (!b.j_) {
                  var d = this;
                  b.j_ = setTimeout(function() {
                      b.j_ = null;
                      var c = b.yN;
                      c.length && (d.ix(b, 1 === c.length ? c[0] : {
                          qz: a.a.wf(),
                          cva: c
                      }),
                      c.length = 0)
                  }, 0)
              }
          },
          Gja: function(a) {
              var b = this;
              a.addEventListener("error", function(a) {
                  console.error(a);
                  b.hB(null)
              }, !1);
              e.$va(a)
          },
          Sea: function(a, b) {
              var c = this;
              c.Gja(a);
              var d = this.kca(a);
              if (e.Qba)
                  b.call(c, null, {
                      sendMessage: d
                  });
              else {
                  e.Qba = !0;
                  var f = [c.FX() + ":checkup", Math.random().toFixed(5) + "", Math.round(1E3 * Math.random()), !1, function(a, e) {
                      var h = !0;
                      if (a || !e || e.length !== f.length - 2)
                          h = !1;
                      else
                          for (var k = 0, v = e.length; k < v; k++)
                              if (e[k] !== f[k + 1]) {
                                  h = !1;
                                  break
                              }
                      h ? b.call(c, null, {
                          sendMessage: d
                      }) : (console.error(a),
                      b.call(c, "Self checkup failed!!"))
                  }
                  ];
                  d.apply(c, f)
              }
          }
      });
      a.bA = e
  }
  )(g);
  (function() {
      if (!g.oe) {
          g.oe = {
              Ze: {},
              uy: {}
          };
          var a = g.oe
            , b = g.oe.Ze
            , c = g.a
            , d = g.A;
          b.start = function(b) {
              a.uy[b.id] = {
                  K: b.K,
                  time: {
                      f4: c.wf()
                  },
                  wla: function() {
                      return c.wf() - this.time.f4
                  }
              }
          }
          ;
          b.end = function(b) {
              var d = a.uy[b.id]
                , e = d.time
                , d = c.bind(d.wla, d)
                , l = b.index
                , m = b.key;
              "function" !== typeof b.Gc && (b.Gc = function() {}
              );
              if (void 0 === e[m])
                  void 0 === l ? e[m] = d() : (e[m] = [],
                  e[m][l] = d());
              else if (void 0 !== l && void 0 === e[m][l])
                  e[m][l] = d();
              else
                  return b.Gc(Error("Duplicate Invoke"));
              b.Gc(null)
          }
          ;
          b.push = function(b) {
              var c = a.uy[b.id].time
                , d = b.key
                , e = b.rf;
              "function" !== typeof b.Gc && (b.Gc = function() {}
              );
              if (void 0 === c[d])
                  c[d] = e;
              else
                  return b.Gc(Error("Duplicate Invoke"));
              b.Gc(null)
          }
          ;
          b.send = function(b) {
              var c = d.Cc + "://webapi.amap.com/count?"
                , k = g.extend(e({
                  K: a.uy[b.id].K
              }), b.params || {})
                , l = g.a;
              b.params && b.params.rs && !b.params.type && (b = a.uy[b.id].time,
              delete b.f4,
              k = g.extend(k, b));
              b = [];
              for (var m in k)
                  l.isArray(k[m]) ? b.push([m, k[m].join("-")].join("=")) : b.push([m, k[m]].join("="));
              b.push("jl=" + (d.aD ? 1 : 0));
              if (l.Uj(window.performance, "performance") && l.Uj(window.performance.getEntriesByType, "function")) {
                  var n = 0
                    , p = ["webapi.amap.com", "jsapi-test.amap.test", "localhost"]
                    , q = ["/maps", "/css"];
                  l.Rb(window.performance.getEntriesByType("resource"), function(a) {
                      var b = void 0
                        , c = void 0;
                      a.name.match(/:\/\/([^:?#/]+)/) && (b = RegExp.$1);
                      a.name.match(/[^\/](\/[^/?#:]+)/) && (c = RegExp.$1);
                      b && c && l.ja(p, b) && l.ja(q, c) && (n += parseInt(a.responseEnd - a.startTime))
                  });
                  0 !== n && b.push("sd=" + n)
              }
              new g.fb.vb(c + b.join("&"))
          }
          ;
          var e = function(a) {
              var b = g.l;
              a = g.j.J2(a.K);
              return {
                  type: "q",
                  resolution: a.width + "*" + a.height,
                  k: d.key,
                  u: d.Wt,
                  iw: b.xf ? 1 : 0,
                  cw: b.j1 ? 1 : 0,
                  gc: b.ZQ,
                  m: b.Z ? 1 : 0,
                  cv: b.du ? 1 : 0,
                  pf: b.Uy,
                  dpr: window.devicePixelRatio,
                  screenwidth: screen.width,
                  scale: b.GK || 0,
                  detect: b.ia ? 1 : 0,
                  v: d.gr
              }
          }
      }
  }
  )();
  (function() {
      if (!g.OK) {
          var a = g.a.EC({
              A: "Conf",
              extend: "extend",
              l: "Browser",
              Rv: "uncodeCoords"
          });
          g.OK = function() {
              var b = new g.bA(function() {
                  return {
                      r: function() {
                          this.Lw = {
                              Wj: 0,
                              nv: 0
                          };
                          this.yk = {};
                          this.Tn = [];
                          this.np = {};
                          this.Gj = {};
                          this.nt = 0;
                          this.YY = 500
                      },
                      kh: function(a, b) {
                          var e = a.Ed
                            , f = a.we
                            , h = "building" === a.ha[0];
                          (f && e !== this.Lw.nv && this.Lw.nv || !f && !h && e !== this.Lw.Wj && this.Lw.Wj) && this.lka(!!f);
                          f ? this.Lw.nv = e : h || (this.Lw.Wj = e);
                          this.yra(a, b)
                      },
                      lka: function(a) {
                          if (a)
                              this.cW();
                          else if (!a && Object.keys(this.yk).length)
                              for (var b in this.yk)
                                  this.yk.hasOwnProperty(b) && (a = this.yk[b],
                                  a.it || a.abort())
                      },
                      Xwa: function() {
                          this.nt > this.YY && this.eT(Object.keys(this.Gj).slice(0, Math.floor(this.YY / 2)))
                      },
                      eT: function(a) {
                          for (var b = 0, e = a.length; b < e; b++)
                              delete this.Gj[a[b]];
                          this.nt -= a.length
                      },
                      BP: function(a) {
                          var b = a.ha;
                          a = a.we;
                          var e = new XMLHttpRequest;
                          e.dq = "";
                          e.ND = [(new Date).getTime(), a ? 1 : 0, b.join("|")].join("-");
                          return e
                      },
                      K3: function(a, b, e) {
                          var f = this
                            , h = a.Eb
                            , k = a.we
                            , l = []
                            , m = h.filter(function(a) {
                              var b = f.Gj[a.key];
                              if (b) {
                                  if (b.QY)
                                      return !0;
                                  l.push(a.key)
                              }
                              return !1
                          })
                            , n = !1;
                          if (m.length && ((n = m.length === h.length) || "function" !== typeof b || b(a, m),
                          !k)) {
                              var p = [];
                              m.forEach(function(a) {
                                  a = a.key;
                                  p.push.apply(p, f.Gj[a]);
                                  delete f.Gj[a]
                              });
                              this.nt -= m.length;
                              this.ps(this.extend({}, a, {
                                  rE: p,
                                  Ed: a.Ed,
                                  Rk: n
                              }), e)
                          }
                          !k && l.length && this.eT(l);
                          this.Xwa();
                          return n
                      },
                      yra: function(a, b) {
                          function e(e, f) {
                              var m = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
                              if (p.yk[q.ND] || p.Hea(q)) {
                                  var n = e.split("|");
                                  f && (n[0] = f + n[0]);
                                  var t = n
                                    , w = "";
                                  n[n.length - 1] && (w = n[n.length - 1],
                                  t = n.splice(0, n.length - 1));
                                  if (k)
                                      for (var n = 0, y = t.length; n < y; n++) {
                                          if (t[n]) {
                                              var E = JSON.parse(t[n]);
                                              if (E.length) {
                                                  var C = E[0].split("-").slice(0, -1).join("/");
                                                  p.Gj[C] ? p.Gj[C].push(E) : (p.Gj[C] = [E],
                                                  p.nt++);
                                                  m && (p.Gj[C].QY = !0)
                                              }
                                          }
                                      }
                                  else
                                      p.ps(p.extend({}, a, {
                                          rE: t,
                                          Ed: h,
                                          Rk: m,
                                          DR: !0
                                      }), b);
                                  return w
                              }
                              r || (p.tl(l, b),
                              r = !0)
                          }
                          var f = this
                            , h = a.Ed
                            , k = a.we
                            , l = a.Eb
                            , m = a.url;
                          if (!this.K3(a, function(a, b) {
                              var c = a.Eb
                                , d = a.url
                                , e = d.match(/&t=([^&]+)/)[1].split(";");
                              b.reverse().forEach(function(a) {
                                  a = c.indexOf(a);
                                  -1 !== a && e.splice(a, 1)
                              });
                              a.url = d.replace(/&t=[^&]+/, "&t=" + e.join(";"))
                          }, b)) {
                              if (this.uB() && (this.cW(),
                              k)) {
                                  this.tl(l, b);
                                  return
                              }
                              var n = 0
                                , p = this
                                , q = this.BP(a);
                              k ? this.Tn.push(q) : (this.yk[q.ND] = q,
                              q.Eb = l,
                              q.Gc = b);
                              var r = !1;
                              q.onreadystatechange = function() {
                                  if (4 === q.readyState && 0 === q.status)
                                      q.it || (q.it = !0,
                                      f.tl(l, b),
                                      q.onreadystatechange = null,
                                      k ? f.v_(q) : delete f.yk[q.ND]),
                                      q = null;
                                  else if (!q.it)
                                      if (3 === q.readyState) {
                                          var h = q.responseText.substring(n);
                                          q.dq = e(h, q.dq);
                                          n = q.responseText.length
                                      } else
                                          4 === q.readyState && (h = q.responseText.substring(n),
                                          a.Jg && (h += "|"),
                                          e(h, q.dq, !0),
                                          q.dq = "",
                                          k ? f.v_(q) : delete f.yk[q.ND],
                                          q = null)
                              }
                              ;
                              q.onerror = function() {}
                              ;
                              q.open("GET", m, !0);
                              q.send();
                              k && (q.v8 = l.map(function(a) {
                                  return a.key
                              }))
                          }
                      },
                      oD: function(a) {
                          function b(d, p, r) {
                              var s = [r, d, p].join("/");
                              d = e.filter(function(a) {
                                  return a.key === s
                              })[0];
                              18 < k && !n && (s += "/" + k);
                              if (d && "loaded" !== d.status && -1 !== m.indexOf(t))
                                  if ("limg" === t)
                                      p = h[1],
                                      d.qd = p,
                                      "string" === typeof p.b && (p.b = x.tA(p.b)),
                                      r = "",
                                      (r = "object" === typeof p.u ? p.u.url : p.u) && (p.u = {
                                          url: r,
                                          jk: "limg-" + d.key + "-" + f
                                      });
                                  else {
                                      p = {
                                          tg: d.ra,
                                          Ai: s,
                                          Ma: h,
                                          vd: t,
                                          Ex: a.$t,
                                          SC: "building" === t,
                                          oi: "poilabel" === t || "roadlabel" === t || "building" === t && q
                                      };
                                      if ("poilabel" === t || "roadlabel" === t)
                                          p.qd = d.qd;
                                      t === m[m.length - 1] && (d.status = "loaded");
                                      l.push(p)
                                  }
                          }
                          var e = a.Eb
                            , f = a.RR
                            , h = a.gC
                            , k = a.Ed
                            , l = a.Ic
                            , m = a.ha
                            , n = a.xf
                            , p = a.aR
                            , q = a.ke
                            , r = h[0].split("-")
                            , s = parseInt(r[1])
                            , u = parseInt(r[2])
                            , v = parseInt(r[0])
                            , x = this
                            , t = r[3]
                            , r = Math.pow(2, v);
                          10 > v && (s <= p && b(s + r, u, v),
                          s >= r - p && b(s - r, u, v));
                          b(s, u, v)
                      },
                      v_: function(a) {
                          for (var b = this.Tn.length - 1; 0 <= b; b--)
                              this.Tn[b] === a && this.Tn.splice(b, 1)
                      },
                      Hea: function(a) {
                          for (var b = 0, e = this.Tn.length; b < e; b++)
                              if (this.Tn[b] === a)
                                  return !0;
                          return !1
                      },
                      uB: function() {
                          return Object.keys(this.yk).length ? !0 : !1
                      },
                      cW: function() {
                          if (this.Tn.length) {
                              for (var a = this.Tn.length - 1; 0 <= a; a--) {
                                  var b = this.Tn[a];
                                  b.it || b.abort();
                                  b.v8 && this.eT(b.v8)
                              }
                              this.Tn.length = 0
                          }
                      },
                      tl: function(a, b) {
                          b(null, {
                              Eb: a,
                              z4: !0,
                              disabled: this.disabled
                          }, {
                              Jk: !0
                          })
                      }
                  }
              }
              ,{
                  batchSend: !1
              });
              b.jf(null, new Function("\n     return {\n      " + a.Conf + ": " + JSON.stringify(g.A) + ",\n      " + a.extend + ": " + g.extend.toString() + ",\n      " + a.Browser + ": " + JSON.stringify(g.l) + ",\n      " + a.uncodeCoords + ": " + g.a.Rv.toString() + "\n     }"));
              return b
          }
      }
  }
  )();
  g.j = {
      CLASS_NAME: "DomUtil",
      get: function(a) {
          return "string" === typeof a ? document.getElementById(a) : a
      },
      UC: function(a, b, c) {
          return a.parentNode == b ? !0 : a.parentNode && a.parentNode !== document.body && !g.j.bn(a.parentNode, c) ? g.j.UC(a.parentNode, b) : !1
      },
      jo: function(a) {
          if (!a)
              return [0, 0];
          var b = a.offsetWidth
            , c = a.offsetHeight;
          b && c || !a.childNodes[0] || (b = b || a.childNodes[0].offsetWidth,
          c = c || a.childNodes[0].offsetHeight);
          window.opera && (b = Math.max(b, a.childNodes[0].scrollWidth),
          c = Math.max(c, a.childNodes[0].scrollHeight));
          return [b, c]
      },
      JDa: function(a, b) {
          var c = document.head || document.getElementsByTagName("head")[0];
          if (c) {
              var d = document.createElement("link");
              d.setAttribute("rel", "stylesheet");
              d.setAttribute("type", "text/css");
              d.setAttribute("href", a);
              b ? c.appendChild(d) : c.insertBefore(d, c.firstChild)
          } else
              document.write("<link rel='stylesheet' href='" + a + "'/>")
      },
      Vc: function(a, b) {
          var c = a.style[b];
          !c && a.currentStyle && (c = a.currentStyle[b]);
          c && "auto" !== c || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a, null)) ? c[b] : null);
          c && "auto" !== c || "height" !== b || (c = a.clientHeight + "px");
          c && "auto" !== c || "width" !== b || (c = a.clientWidth + "px");
          return "auto" === c ? null : c
      },
      uI: function(a) {
          if (a)
              return new g.xd(a.clientWidth || document.body.clientWidth,a.clientHeight || (g.l.Vr ? "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight : document.body.clientHeight),!0)
      },
      J2: function(a) {
          return new g.xd(a.clientWidth,a.clientHeight)
      },
      XQ: function(a) {
          var b = 0, c = 0, d = a, e = document.body, f = document.documentElement, h, k = g.l.Nu;
          do {
              b += d.offsetTop || 0;
              c += d.offsetLeft || 0;
              b += parseInt(g.j.Vc(d, "borderTopWidth"), 10) || 0;
              c += parseInt(g.j.Vc(d, "borderLeftWidth"), 10) || 0;
              h = g.j.Vc(d, "position");
              if (d.offsetParent === e && "absolute" === h)
                  break;
              if ("fixed" === h) {
                  b += e.scrollTop || f.scrollTop || 0;
                  c += e.scrollLeft || f.scrollLeft || 0;
                  break
              }
              d = d.offsetParent
          } while (d);d = a;
          do {
              if (d === e)
                  break;
              b -= d.scrollTop || 0;
              c -= d.scrollLeft || 0;
              g.j.qna() || !g.l.f9 && !k || (c += d.scrollWidth - d.clientWidth,
              k && "hidden" !== g.j.Vc(d, "overflow-y") && "hidden" !== g.j.Vc(d, "overflow") && (c += 17));
              d = d.parentNode
          } while (d);return new g.H(c,b)
      },
      qna: function() {
          g.j.Eca || (g.j.Eca = !0,
          g.j.Dca = "ltr" === g.j.Vc(document.body, "direction"));
          return g.j.Dca
      },
      create: function(a, b, c, d) {
          a = document.createElement(a);
          c && (a.className = c);
          b && (d && "before" === d ? b.insertBefore(a, b.firstChild) : b.appendChild(a));
          return a
      },
      W1: function() {
          document.selection && document.selection.empty && document.selection.empty();
          this.Fha || (this.Fha = document.onselectstart,
          document.onselectstart = g.a.q2)
      },
      j2: function() {},
      Rwa: function(a, b, c) {
          c ? this.Ra(a, b) : this.ab(a, b)
      },
      bn: function(a, b) {
          if (a && b)
              return 0 < a.className.length && RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
      },
      Ra: function(a, b) {
          a && b && (a.classList && a.classList.add ? a.classList.add(b) : g.j.bn(a, b) || (a.className += (a.className ? " " : "") + b))
      },
      Eva: function(a, b) {
          a && (a.className = b || "")
      },
      ab: function(a, b) {
          function c(a, c) {
              return c === b ? "" : a
          }
          a && b && (a.classList && a.classList.remove ? a.classList.remove(b) : a.className = a.className.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, ""))
      },
      b3: function(a, b) {
          return 1 === b ? "" : "opacity"in a.style ? "opacity:" + b : 8 <= document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'" : "filter:alpha(opacity=" + Math.ceil(100 * b) + ")"
      },
      lq: function(a, b) {
          if (a.style)
              if ("opacity"in a.style)
                  a.style.opacity = b;
              else if ("filter"in a.style) {
                  var c = Math.round(100 * b);
                  a.style.filter = "";
                  100 !== c && (a.style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + c + ")")
              }
      },
      ZT: function(a) {
          for (var b = document.documentElement.style, c = 0; c < a.length; c += 1)
              if (a[c]in b)
                  return a[c];
          return !1
      },
      r3: function(a) {
          var b = g.l.g9;
          return "translate" + (b ? "3d" : "") + "(" + a.x + "px," + a.y + "px" + ((b ? ",0" : "") + ")")
      },
      KCa: function(a, b) {
          return g.j.r3(b.add(b.Gd(-1 * a))) + (" scale(" + a + ") ")
      },
      A7: function(a, b, c) {
          a.Oi = b;
          !c && g.l.dH ? (b = g.j.r3(b),
          c = a.style[g.j.eg].split("rotate"),
          1 < c.length ? (c[0] = b,
          a.style[g.j.eg] = c.join("rotate")) : a.style[g.j.eg] = b,
          g.l.r5 && (a.style.WebkitBackfaceVisibility = "hidden")) : (a.style.left = b.x + "px",
          a.style.top = b.y + "px")
      },
      se: function(a) {
          a.Oi || (a.Oi = a.style.left ? new g.H(parseInt(a.style.left),parseInt(a.style.top)) : new g.H(0,0));
          return a.Oi
      },
      vFa: function(a, b) {
          a = a instanceof Array ? a : [a];
          for (var c = 0; c < a.length; c += 1)
              a[c].style.cssText = b
      },
      t7: function(a, b) {
          ";" !== b[b.length - 1] && (b += ";");
          return b.toLowerCase() !== a.style.cssText.replace(/ /g, "").toLowerCase() ? (a.style.cssText = b,
          !0) : !1
      },
      Va: function(a, b) {
          a = a instanceof Array ? a : [a];
          for (var c = 0; c < a.length; c += 1)
              for (var d in b)
                  b.hasOwnProperty(d) && (a[c].style[d] = b[d]);
          return this
      },
      ID: function(a) {
          for (; a.childNodes.length; )
              a.removeChild(a.childNodes[0])
      },
      remove: function(a) {
          a && a.parentNode && a.parentNode.removeChild(a)
      },
      rotate: function(a, b, c) {
          var d = g.j.eg;
          c = c || {
              x: a.clientWidth / 2,
              y: a.clientHeight / 2
          };
          d ? (a.style[d] = "" + (" rotate(" + b + "deg)"),
          a.style[g.j.Ls[d] + "-origin"] = c.x + "px " + c.y + "px") : (d = Math.cos(b * Math.PI / 180),
          b = Math.sin(b * Math.PI / 180),
          a.style.filter = "progid:DXImageTransform.Microsoft.Matrix()",
          0 < a.filters.length && (a = a.filters.item(0),
          a.Dx = -c.x * d + c.y * b + c.x,
          a.Dy = -c.x * b - c.y * d + c.y,
          a.M11 = a.M22 = d,
          a.M12 = -(a.M21 = b)))
      },
      m3: function(a, b, c) {
          var d = g.j.eg;
          c = c || {
              x: a.clientWidth / 2,
              y: a.clientHeight / 2
          };
          return d ? g.j.Ls[d] + ":" + ("" + (" rotate(" + b + "deg)")) + ";" + (g.j.Ls[d] + "-origin:" + c.x + "px " + c.y + "px") : ""
      },
      dm: function(a, b, c) {
          a.width = b;
          a.height = c
      },
      getElementsByClassName: function(a, b, c) {
          b = b || "*";
          c = c || document;
          if (c.getElementsByClassName)
              return c.getElementsByClassName(a);
          b = c.getElementsByTagName(b);
          a = RegExp("(^|\\s)" + a + "(\\s|$)");
          c = [];
          for (var d = 0, e; d < b.length; d++)
              e = b[d],
              a.test(e.className) && c.push(e);
          return c
      },
      fillText: function(a, b) {
          if (a)
              return void 0 !== a.textContent ? a.textContent = b : void 0 !== a.innerText ? a.innerText = b : a.innerHTML = b,
              a
      }
  };
  (function() {
      var a = g.j.ZT(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), b;
      g.extend(g.j, {
          W1: function() {
              g.F.g(window, "selectstart", g.F.preventDefault);
              if (a) {
                  var c = document.documentElement.style;
                  "none" !== c[a] && (b = c[a],
                  c[a] = "none")
              }
          },
          j2: function() {
              g.F.G(window, "selectstart", g.F.preventDefault);
              a && "none" !== b && (document.documentElement.style[a] = b,
              b = "none")
          },
          ina: function() {
              g.F.g(window, "dragstart", g.F.preventDefault)
          },
          Rna: function() {
              g.F.G(window, "dragstart", g.F.preventDefault)
          }
      })
  }
  )();
  g.j.eg = g.j.ZT(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]);
  g.j.Ls = {
      transform: "transform",
      WebkitTransform: "-webkit-transform",
      OTransform: "-o-transform",
      MozTransform: "-moz-transform",
      msTransform: "-ms-transform"
  };
  g.j.YE = g.j.ZT(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
  g.j.kza = "webkitTransition" === g.j.YE || "OTransition" === g.j.YE ? g.j.YE + "End" : "transitionend";
  g.F = {
      g: function(a, b, c, d) {
          function e(b) {
              b = b || window.event;
              b.target = b.target || b.srcElement;
              return c.call(d || a, b, k)
          }
          var f = g.a.ub(a) + "_" + g.a.ub(c) + "_" + g.a.ub(d || a)
            , h = b + f;
          if (a[h])
              return this;
          var k = b;
          g.l.iQ && "mousewheel" === b && (b = "DOMMouseScroll");
          if (g.l.Vr && ("mouseover" === b || "mouseout" === b)) {
              var l = e;
              b = "mouseover" === b ? "mouseenter" : "mouseleave";
              e = function(a) {
                  l(a)
              }
          }
          if (g.l.s6 && 0 === b.indexOf("touch"))
              return a[h] = e,
              this.tka(a, b, e, f);
          g.l.Cf && "dblclick" === b && this.rka && this.rka(a, e, f);
          "addEventListener"in a ? a.addEventListener(b, e, !1) : "attachEvent"in a ? a.attachEvent("on" + b, e) : a["on" + b] = e;
          a[h] = e;
          return this
      },
      oj: function(a, b, c, d) {
          var e = this;
          this.g(a, b, function h(k) {
              e.G(a, b, h, d);
              return c.call(d || a, k || window.event, b)
          }, d)
      },
      G: function(a, b, c, d) {
          c = g.a.ub(a) + "_" + g.a.ub(c) + "_" + g.a.ub(d || a);
          d = b + c;
          var e = a[d];
          g.l.iQ && "mousewheel" === b && (b = "DOMMouseScroll");
          !g.l.Vr || "mouseover" !== b && "mouseout" !== b || (b = "mouseover" === b ? "mouseenter" : "mouseleave");
          g.l.s6 && -1 < b.indexOf("touch") ? this.Gua(a, b, c) : g.l.Cf && "dblclick" === b && this.Cua ? this.Cua(a, c) : "removeEventListener"in a ? a.removeEventListener(b, e, !1) : "detachEvent"in a && -1 === b.indexOf("touch") ? e && a.detachEvent("on" + b, e) : a["on" + b] = null;
          a[d] = void 0;
          return this
      },
      CFa: function(a, b) {
          var c = document.createEvent("MouseEvents");
          c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
          b.target.dispatchEvent(c)
      },
      yka: function(a) {
          a.sf = "info";
          g.l.ue && g.F.stopPropagation(a)
      },
      stopPropagation: function(a) {
          a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
          return this
      },
      nwa: function(a) {
          var b = g.F.yka;
          g.l.Cf && (g.F.g(a, "touchstart", b, this),
          g.F.g(a, "touchmove", b, this),
          g.F.g(a, "touchend", b, this));
          g.l.Z || (g.F.g(a, "mousedown", b, this),
          g.F.g(a, "mouseup", b, this),
          g.F.g(a, "mousemove", b, this),
          g.F.g(a, "mousewheel", b, this));
          g.l.IS && (g.F.g(a, "pointerdown", b, this),
          g.F.g(a, "pointerup", b, this),
          g.F.g(a, "pointermove", b, this));
          g.l.t5 && (g.F.g(a, "MSPointerDown", b, this),
          g.F.g(a, "MSPointerUp", b, this),
          g.F.g(a, "MSPointerMove", b, this))
      },
      preventDefault: function(a) {
          a.preventDefault ? a.preventDefault() : a.returnValue = !1;
          return this
      },
      stop: function(a) {
          return g.F.preventDefault(a).stopPropagation(a)
      },
      Dva: function(a) {
          return a && a.getBoundingClientRect ? (a.vL = a.getBoundingClientRect(),
          a.QV = [a.clientLeft, a.clientTop],
          !0) : !1
      },
      Exa: function(a) {
          a.vL && (a.vL = null,
          a.QV = null)
      },
      eoa: function(a, b) {
          var c = b.vL || b.getBoundingClientRect()
            , d = b.QV || [b.clientLeft, b.clientTop];
          return new g.H(a.clientX - c.left - d[0],a.clientY - c.top - d[1])
      },
      Sl: function(a, b) {
          if (b && b.getBoundingClientRect)
              return this.eoa(a, b);
          var c = document.body
            , d = document.documentElement
            , c = new g.H(g.l.Cf ? a.pageX : a.clientX + (c.scrollLeft || d.scrollLeft),g.l.Cf ? a.pageY : a.clientY + (c.scrollTop || d.scrollTop));
          return b ? c.$a(g.j.XQ(b)) : c
      },
      w4: function(a) {
          return 1 === a.which || 0 === a.button || 1 === a.button
      }
  };
  g.extend(g.F, {
      xN: [],
      bZ: !1,
      tka: function(a, b, c, d) {
          switch (b) {
          case "touchstart":
              return this.wka(a, b, c, d);
          case "touchend":
              return this.uka(a, b, c, d);
          case "touchmove":
              return this.vka(a, b, c, d)
          }
      },
      no: function(a) {
          if (g.l.IS)
              return a;
          switch (a) {
          case "pointerdown":
              return "MSPointerDown";
          case "pointerup":
              return "MSPointerUp";
          case "pointercancel":
              return "MSPointerCancel";
          case "pointermove":
              return "MSPointerMove"
          }
      },
      wka: function(a, b, c, d) {
          function e(a) {
              for (var b = !1, d = 0; d < f.length; d += 1)
                  if (f[d].pointerId === a.pointerId) {
                      b = !0;
                      break
                  }
              b || f.push(a);
              a.touches = f.slice();
              a.changedTouches = [a];
              c(a)
          }
          var f = this.xN;
          a["_amap_touchstart" + d] = e;
          a.addEventListener(this.no("pointerdown"), e, !1);
          this.bZ || (a = function(a) {
              for (var b = 0; b < f.length; b += 1)
                  if (f[b].pointerId === a.pointerId) {
                      f.splice(b, 1);
                      break
                  }
          }
          ,
          document.documentElement.addEventListener(this.no("pointerup"), a, !1),
          document.documentElement.addEventListener(this.no("pointercancel"), a, !1),
          this.bZ = !0);
          return this
      },
      vka: function(a, b, c, d) {
          function e(a) {
              if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE || 0 !== a.buttons) {
                  for (var b = 0; b < f.length; b += 1)
                      if (f[b].pointerId === a.pointerId) {
                          f[b] = a;
                          break
                      }
                  a.touches = f.slice();
                  a.changedTouches = [a];
                  c(a)
              }
          }
          var f = this.xN;
          a["_amap_touchmove" + d] = e;
          a.addEventListener(this.no("pointermove"), e, !1);
          return this
      },
      uka: function(a, b, c, d) {
          function e(a) {
              for (var b = 0; b < f.length; b += 1)
                  if (f[b].pointerId === a.pointerId) {
                      f.splice(b, 1);
                      break
                  }
              a.touches = f.slice();
              a.changedTouches = [a];
              c(a)
          }
          var f = this.xN;
          a["_amap_touchend" + d] = e;
          a.addEventListener(this.no("pointerup"), e, !1);
          a.addEventListener(this.no("pointercancel"), e, !1);
          return this
      },
      Gua: function(a, b, c) {
          c = a["_amap_" + b + c];
          switch (b) {
          case "touchstart":
              a.removeEventListener(this.no("pointerdown"), c, !1);
              break;
          case "touchmove":
              a.removeEventListener(this.no("pointermove"), c, !1);
              break;
          case "touchend":
              a.removeEventListener(this.no("pointerup"), c, !1),
              a.removeEventListener(this.no("pointercancel"), c, !1)
          }
          return this
      }
  });
  (function() {
      function a(a) {
          var b = a.target || a.srcElement;
          b.ZV && f(b.ZV);
          b.ZV = e(function() {
              var c = b.Zo;
              if (c && c.Yo)
                  for (var d = 0; d < c.Yo.length; d += 1)
                      c.Yo[d].call(c, a)
          })
      }
      function b() {
          var b = this.contentDocument.defaultView;
          b.Zo = this.Baa;
          b.addEventListener("resize", a);
          a.call(b, {
              target: b
          })
      }
      var c = document.attachEvent
        , d = navigator.userAgent.match(/(Trident|Edge)/)
        , e = g.a.Qc
        , f = g.a.fi;
      g.extend(g.F, {
          xka: function(e, f) {
              if (!e.Yo)
                  if (e.Yo = [],
                  c)
                      e.Zo = e,
                      e.attachEvent("onresize", a);
                  else {
                      "static" === window.getComputedStyle(e).position && (e.style.position = "relative");
                      var l = e.Zo = document.createElement("object");
                      l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
                      l.Baa = e;
                      l.onload = b;
                      l.type = "text/html";
                      d && e.appendChild(l);
                      l.data = "about:blank";
                      d || e.appendChild(l)
                  }
              e.Yo.push(f)
          },
          REa: function(b, d) {
              b.Yo.splice(b.Yo.indexOf(d), 1);
              b.Yo.length || (c ? b.detachEvent("onresize", a) : (b.Zo.contentDocument.defaultView.removeEventListener("resize", a),
              b.Zo = !b.removeChild(b.Zo)))
          },
          $la: function(a) {
              a.Yo = null;
              if (a.Zo) {
                  var b = a.Zo;
                  b.parentNode === a && b.parentNode.removeChild(b);
                  a.Zo = null
              }
          }
      })
  }
  )();
  g.qb = {
      psa: g.A.yb + "/maps",
      nu: g.aa.nu,
      aS: 0,
      Ty: [],
      iu: {},
      Lg: function(a, b) {
          function c() {
              d += 1;
              d === e.length && b && b()
          }
          a.length || b();
          for (var d = 0, e = [], f = 0; f < a.length; f += 1) {
              var h = this.nu[a[f]];
              if (h)
                  for (var k = 0; k < h.length; k += 1)
                      e.push(h[k]);
              e.push(a[f])
          }
          for (f = 0; f < e.length; f += 1)
              this.eQ(e[f], c)
      },
      VC: function(a) {
          for (var b = 0; b < a.length; b += 1)
              if (1 !== this.hC(a[b]).status)
                  return !1;
          return !0
      },
      eQ: function(a, b) {
          var c = this.hC(a);
          if (1 === c.status)
              b && b();
          else {
              b && c.Hx.push(b);
              try {
                  if (g.l.es && window.localStorage) {
                      var d = window.localStorage["_AMap_" + a];
                      d && (d = JSON.parse(d),
                      d.version === g.A.uj ? (window._jsload_(a, d.script, !0),
                      d.css && window._cssload_(a, d.css, !0)) : window.localStorage.removeItem("_AMap_" + a))
                  }
              } catch (e) {}
              if (0 === c.status) {
                  this.kua(a);
                  var f = this;
                  f.aS || (f.aS = 1,
                  window.setTimeout(function() {
                      f.aS = 0;
                      var a = f.psa + "/modules?v=" + g.A.gr + "&key=" + g.A.key + "&m=" + f.Ty.join(",") + "&vrs=" + g.A.uj;
                      g.qb.lt(f.Ty.join(","));
                      f.Ty = [];
                      c.aK = f.Jra(a)
                  }, 1));
                  c.status = -1
              }
          }
      },
      lt: function(a) {
          a = g.A.Rd + "/v3/log/init?" + ["s=rsv3&product=JsModule&key=" + g.A.key, "m=" + a].join("&");
          new g.fb.vb(a,{
              callback: "callback"
          })
      },
      load: function(a, b) {
          var c = this.nu[a];
          if (c) {
              for (var d = [], e = 0; e < c.length; e += 1)
                  d.push(c[e]);
              d.push(a);
              for (var f = 0, c = function() {
                  f += 1;
                  f === d.length && b && b()
              }, e = 0; e < d.length; e += 1)
                  this.eQ(d[e], c)
          } else
              this.eQ(a, b)
      },
      kua: function(a) {
          for (var b = 0; b < this.Ty.length; b += 1)
              if (this.Ty[b] === a)
                  return;
          this.Ty.push(a)
      },
      sn: function(a, b) {
          var c = this.hC(a);
          try {
              eval(b)
          } catch (d) {
              return
          }
          c.status = 1;
          for (var e = 0, f = c.Hx.length; e < f; e += 1)
              c.Hx[e]();
          c.Hx = []
      },
      nd: function(a, b) {
          var c = this;
          c.timeout = setTimeout(function() {
              1 !== c.iu[a].status ? (c.remove(a),
              c.load(a, b)) : clearTimeout(c.timeout)
          }, 5E3)
      },
      hC: function(a) {
          this.iu[a] || (this.iu[a] = {},
          this.iu[a].status = 0,
          this.iu[a].Hx = []);
          return this.iu[a]
      },
      remove: function(a) {
          this.iu[a] = null
      },
      Jra: function(a) {
          g.A.mode && (a += "&mode=" + g.A.mode);
          var b = document.createElement("script");
          b.charset = "utf-8";
          a && 0 === a.indexOf(g.A.yb) && (b.crossOrigin = "Anonymous");
          b.src = a;
          document.body.appendChild(b);
          return b
      }
  };
  window._jsload_ = function(a, b, c) {
      var d = g.qb.hC(a);
      d.aK && 0 <= g.a.indexOf(document.body.childNodes, d.aK) && document.body.removeChild(d.aK);
      d.aK = null;
      try {
          if (!c && window.localStorage && b && "" !== b && g.l.es) {
              var e = window.localStorage["_AMap_" + a]
                , e = e || "{}"
                , e = JSON.parse(e);
              e.version !== g.A.uj || e.script ? window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                  version: g.A.uj,
                  script: b
              })) : window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                  version: g.A.uj,
                  script: b,
                  css: e.css
              }))
          }
      } catch (f) {}
      g.qb.sn(a, b)
  }
  ;
  window._cssload_ = function(a, b, c) {
      try {
          !c && window.localStorage && b && "" !== b && g.l.es && window.localStorage.setItem("_AMap_" + a, JSON.stringify({
              css: b,
              version: g.A.uj
          }))
      } catch (d) {}
      var e = document.createElement("style");
      e.type = "text/css";
      -1 === g.A.yb.indexOf("webapi.amap.com") && (b = b.replace(/webapi.amap.com/gi, g.A.yb.split("://")[1]));
      "https" === g.A.Cc && (b = b.replace(/http:/gi, "https:"));
      e.styleSheet ? (a = function() {
          try {
              e.styleSheet.cssText = b
          } catch (a) {}
      }
      ,
      e.styleSheet.disabled ? setTimeout(a, 10) : a()) : e.appendChild(document.createTextNode(b));
      a = document.head || document.getElementsByTagName("head")[0];
      2 > a.childNodes.length ? a.appendChild(e) : a.insertBefore(e, a.childNodes[1])
  }
  ;
  (function(a) {
      var b = g.l;
      if (!g.indexedDB && b.zi) {
          var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB
            , d = a.IDBKeyRange || a.nGa || a.XDa || a.WDa;
          if (c) {
              var e = g.a
                , f = null;
              a = "amap-jsapi" + (a.Mya ? "-debug" : "");
              var h = g.extend({}, g.sa), k;
              try {
                  k = c.open(a),
                  k.onsuccess = function() {
                      f = this.result;
                      h.q("dbReady", {
                          status: "success"
                      })
                  }
                  ,
                  k.onerror = function() {
                      h.q("dbReady", {
                          status: "error"
                      })
                  }
                  ,
                  k.onblocked = function() {
                      h.q("dbReady", {
                          status: "blocked"
                      })
                  }
                  ,
                  k.onupgradeneeded = function(a) {
                      a.currentTarget.result.createObjectStore("tile", {
                          keyPath: "tileKey"
                      })
                  }
              } catch (l) {
                  b.zi = !1
              } finally {
                  if (!b.zi)
                      return
              }
              var b = function(a) {
                  return function() {
                      try {
                          return a.apply(this, arguments)
                      } catch (b) {
                          var c = arguments[arguments.length - 1];
                          "function" === typeof c && setTimeout(function() {
                              c({
                                  code: 4,
                                  QH: b
                              })
                          }, 1)
                      }
                  }
              }
                , m = b(function(a, b) {
                  return null === f ? (setTimeout(function() {
                      b && b({
                          code: 3
                      })
                  }, 1),
                  null) : f.transaction("tile", a).objectStore("tile")
              });
              g.indexedDB = {
                  EB: function(a, b) {
                      f ? "function" === typeof a && a() : h.g("dbReady", function(c) {
                          "success" === c.status ? "function" === typeof a && a() : "function" === typeof b && b({
                              code: 3,
                              status: status
                          })
                      })
                  },
                  count: b(function(a) {
                      var b = this
                        , c = arguments;
                      this.EB(function() {
                          b.lt.apply(b, c)
                      }, a)
                  }),
                  lt: b(function(a) {
                      var b = m("readonly", a).count();
                      b.onsuccess = function() {
                          a(null, b.result)
                      }
                      ;
                      b.onerror = function() {
                          a({
                              code: 7
                          })
                      }
                  }),
                  get: b(function(a, b, c) {
                      var d = this
                        , e = setTimeout(function() {
                          e && (e = null,
                          c && c({
                              code: 7
                          }))
                      }, b.timeout || 1E3);
                      this.EB(function() {
                          d.dda.call(d, a, function(a, b) {
                              e && (clearTimeout(e),
                              e = null,
                              c(a, b))
                          })
                      }, c)
                  }),
                  dda: b(function(a, b) {
                      var c = m("readonly", b);
                      if (e.isArray(a)) {
                          var d, f;
                          (function() {
                              function e(b) {
                                  var f = c.get(a[b]);
                                  f.onsuccess = function(a) {
                                      a.target.result && (d[b] = a.target.result);
                                      h()
                                  }
                                  ;
                                  f.onerror = h
                              }
                              function h() {
                                  f++;
                                  f === a.length && b(null, d)
                              }
                              d = [];
                              for (var k = f = 0, l = a.length; k < l; k++)
                                  e(k)
                          }
                          )()
                      } else {
                          var h = c.get(a);
                          h.onsuccess = function(a) {
                              b && b(null, a.target.result)
                          }
                          ;
                          h.onerror = function() {
                              b && b({
                                  code: 1
                              })
                          }
                      }
                  }),
                  add: b(function(a, b) {
                      var c = this
                        , d = arguments;
                      this.EB(function() {
                          c.Faa.apply(c, d)
                      }, b)
                  }),
                  Faa: b(function(a, b) {
                      function c() {
                          0 === --f && b(null)
                      }
                      e.isArray(a) || (a = [a]);
                      var d = a.length
                        , f = d
                        , h = 0
                        , k = Math.ceil(d / 5)
                        , l = setInterval(function() {
                          if (h++ < k) {
                              var e = 5 * h;
                              e > d && (e = d);
                              for (var f = m("readwrite", b), s = 5 * (h - 1); s < e; s++) {
                                  var E = f.put(a[s]);
                                  E.onsuccess = E.onerror = c
                              }
                          } else
                              clearInterval(l)
                      }, 32)
                  }),
                  remove: b(function(a, b) {
                      var c = this
                        , d = arguments;
                      this.EB(function() {
                          c.Sia.apply(c, d)
                      }, b)
                  }),
                  Sia: b(function(a, b) {
                      var c = m("readwrite", b);
                      e.isArray(a) || (a = [a]);
                      a = a.sort();
                      c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function(c) {
                          if (c = c.target.result) {
                              if (e.ja(c.value.tileKey, a))
                                  c["delete"]();
                              for (var d = -1, f = 0, h = a.length; f < h; f++)
                                  if (a[f] > c.value.tileKey) {
                                      d = f;
                                      break
                                  }
                              c["continue"](a[d])
                          } else
                              b && b(null)
                      }
                  }),
                  clear: b(function(a) {
                      var b = this
                        , c = arguments;
                      this.EB(function() {
                          b.rF.apply(b, c)
                      }, a)
                  }),
                  rF: b(function(a) {
                      var b = m("readwrite", a).clear();
                      b.onsuccess = function() {
                          a && a(null)
                      }
                      ;
                      b.onerror = function() {
                          a && a({
                              code: 2
                          })
                      }
                  })
              }
          } else
              b.zi = !1
      }
  }
  )(window);
  (function() {
      function a(a) {
          u.data.keys = u.data.keys.filter(function(b) {
              return !r.ja(a, b)
          }).concat(a)
      }
      function b(a) {
          var b = g.A.uj + "|" + a.Ai.replace(/\//g, ",") + "|" + (a.xf ? "w" : "v") + "|", c;
          c = a.ia;
          var d = a.ke;
          c = [c ? 1 : 0, q.Z ? 1 : 0, d ? 1 : 0].join();
          return b + c + "|" + m(a.url)
      }
      function c() {
          u.data.keys.length >= u.$K && d()
      }
      function d() {
          var a = u.data.keys.length
            , b = Math.floor(a / 2);
          a > u.$K && (b = Math.floor(a - u.$K / 2));
          a = u.data.keys.slice(0, b);
          u.data.keys = u.data.keys.slice(b + 1);
          s.remove(a, function(a) {
              a && 3 === a.code && (q.zi = !1)
          })
      }
      function e() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r.ns;
          k();
          x.setItem(u.key, u.data, !0);
          f(a)
      }
      function f(a) {
          q.zi && s && s.clear(function(b) {
              b && 3 === b.code && (q.zi = !1);
              a()
          })
      }
      function h() {
          k();
          var a = x.getItem(u.key, !0);
          a && (a.DK === u.data.DK && a.K0 === u.data.K0 ? u.data = a : e())
      }
      function k() {
          u.data = {
              DK: q.Df,
              K0: g.A.uj,
              keys: [],
              uf: {},
              Zm: {}
          };
          u.Ms = {}
      }
      function l(a) {
          a && (u.data.DK = a,
          q.Df = a)
      }
      function m(a) {
          var b = "limg";
          /flds=([^&]+)/.test(a) && (b = RegExp.$1);
          return b
      }
      function n(a) {
          if ("object" === typeof a && null !== a) {
              var b = [];
              if (r.isArray(a))
                  if (Object.keys(a).length == a.length)
                      b = a.map(function(a) {
                          return n(a)
                      });
                  else {
                      b.push("__arrayObject");
                      var c = {}, d;
                      for (d in a)
                          (0 > parseInt(d) || isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = n(a[d]));
                      b.push(c);
                      b.push(a.map(function(a) {
                          return n(a)
                      }))
                  }
              else if (r.Uj(a, "Float32Array"))
                  b.push("__Float32Array"),
                  b.push(Array.prototype.slice.call(a));
              else if (r.Uj(a, "Uint16Array"))
                  b.push("__Uint16Array"),
                  b.push(Array.prototype.slice.call(a));
              else
                  for (d in b = {},
                  a)
                      a.hasOwnProperty(d) && (b[d] = n(a[d]));
              return b
          }
          return a
      }
      function p(a) {
          if ("object" === typeof a && null !== a) {
              var b = {};
              if (r.isArray(a))
                  if ("__Float32Array" === a[0])
                      b = new Float32Array(a[1]);
                  else if ("__Uint16Array" === a[0])
                      b = new Uint16Array(a[1]);
                  else if ("__arrayObject" === a[0]) {
                      b = p(a[2]);
                      a = a[1];
                      for (var c in a)
                          a.hasOwnProperty(c) && (b[c] = a[c])
                  } else
                      b = a.map(function(a) {
                          return p(a)
                      });
              else
                  for (c in a)
                      a.hasOwnProperty(c) && (b[c] = p(a[c]));
              return b
          }
          return a
      }
      var q = g.l
        , r = g.a;
      if (!g.Aj && q.zi) {
          var s = g.indexedDB
            , u = {
              $K: 1E3,
              key: "_AMap_data.tileKeys"
          }
            , v = []
            , x = {
              getItem: function(a, b) {
                  var c = localStorage.getItem(a);
                  if (c && b) {
                      var d;
                      try {
                          d = JSON.parse(c)
                      } catch (e) {
                          d = null
                      }
                      c = d
                  }
                  return c
              },
              setItem: function(a, b, c) {
                  var d = b;
                  c && (d = JSON.stringify(b),
                  1.5 < d.length / 1024 / 1024 && Object.keys(b.Zm).length && (b.Zm = {},
                  d = JSON.stringify(b)));
                  try {
                      localStorage.setItem(a, d)
                  } catch (f) {
                      e()
                  }
              }
          };
          g.Aj = {
              clear: e,
              get: function(c, d) {
                  function f(a) {
                      var b = {
                          nR: l,
                          q5: G,
                          SDa: x,
                          uf: u.data.uf
                      };
                      a && B.length && (/\|limg/.test(B[0]) ? b.V4 = a.map(function(a) {
                          return JSON.parse(a.data)
                      }).filter(function(a) {
                          return a && a.key
                      }) : b.Ic = h(a));
                      d && d(null, b);
                      x.length && (l = [],
                      G = [])
                  }
                  function h(a) {
                      var b = [];
                      m(c.url).split(",").forEach(function(c) {
                          a.forEach(function(a) {
                              if (a = JSON.parse(a.data[c])) {
                                  var d = a.tg;
                                  a.tg = new g.Gq(d.z,d.x,d.y);
                                  a.tg.S = d.S;
                                  b.push(a)
                              }
                          })
                      });
                      return b
                  }
                  var k = "FS" === c.type;
                  if (!q.es || !(k || q.zi && 0 !== u.data.keys.length))
                      return d({
                          code: 1
                      });
                  var l = []
                    , x = []
                    , B = []
                    , G = []
                    , H = [];
                  c.Iwa.forEach(function(a) {
                      var d = !1
                        , e = b({
                          Ai: a.key,
                          url: c.url,
                          xf: c.xf,
                          ia: c.o.ia,
                          ke: c.ke
                      });
                      k && (v.push(e),
                      u.data.Zm[e] && (l.push(a),
                      B.push(e),
                      H.push({
                          data: p(u.data.Zm[e]),
                          tileKey: e
                      }),
                      d = !0));
                      d || (q.zi && r.ja(u.data.keys, e) ? (B.push(e),
                      x.push(a)) : G.push(a))
                  });
                  if (k && 0 === x.length || 0 === B.length)
                      return f(H);
                  k && H.length && H.forEach(function(a) {
                      a = r.indexOf(B, a.tileKey);
                      B.splice(a, 1)
                  });
                  s.get(B, {
                      timeout: c.timeout || 1E3
                  }, function(b, c) {
                      if (b || c.length !== B.length)
                          b && 3 === b.code ? q.zi = !1 : e(),
                          G = x,
                          x = [],
                          f(null);
                      else {
                          if (k)
                              for (var d = c.length - 1; 0 <= d; d--) {
                                  var h = c[d];
                                  h && h.data ? u.data.Zm[h.tileKey] = n(h.data) : G.push(x.splice(d, 1)[0])
                              }
                          l = x;
                          x = [];
                          f(c);
                          a(B)
                      }
                  });
                  (G.length || x.length) && f(H)
              },
              Sv: function(a) {
                  a.Eb.forEach(function(c) {
                      c = b({
                          Ai: c.key,
                          url: a.url,
                          xf: a.xf,
                          ia: a.o.ia,
                          ke: a.ke
                      });
                      u.Ms[c] && delete u.Ms[c]
                  })
              },
              set: function(a, c) {
                  a.Df && a.Df !== u.data.DK && (l(a.Df),
                  e(),
                  c && c({
                      code: 2
                  }));
                  !a.qd && a.Ic ? a.Ic.forEach(function(c) {
                      var d = b({
                          Ai: c.Ai,
                          url: a.url,
                          xf: a.xf,
                          ia: a.o.ia,
                          ke: a.ke
                      });
                      if (q.zi || r.ja(v, d)) {
                          var e = u.Ms[d] || {};
                          e[c.vd] = c.Ma;
                          u.Ms[d] = e
                      }
                  }) : a.data && a.data.forEach(function(c) {
                      var d = b({
                          Ai: c.key,
                          url: a.url,
                          xf: a.xf,
                          ia: a.o.ia,
                          ke: a.ke
                      });
                      if (q.zi || r.ja(v, d))
                          u.Ms[d] = c.data
                  });
                  u.data.uf = {
                      "x-vd-v": a["x-vd-v"],
                      tv: a.tv,
                      bgc: a.bgc
                  }
              },
              flush: function() {
                  var a = !0;
                  return function() {
                      var b = this;
                      if (a) {
                          if (Object.keys(u.data.Zm).length)
                              for (var c in u.data.Zm)
                                  u.data.Zm.hasOwnProperty(c) && !r.ja(v, c) && delete u.data.Zm[c];
                          q.zi ? s.count(function(a, c) {
                              a || (c !== u.data.keys.length ? (u.data.keys.length && (u.data.keys = []),
                              f(function() {
                                  b.HF(!0)
                              })) : b.HF(!0))
                          }) : b.HF(!0);
                          a = !1
                      } else
                          b.HF()
                  }
              }(),
              HF: function() {
                  var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1
                    , b = {}
                    , d = []
                    , f = Object.keys(u.Ms)
                    , h = [];
                  f.length ? (f.forEach(function(a) {
                      var c = u.Ms[a];
                      a.split("|").pop().split(",").every(function(a) {
                          return "limg" === a ? !0 : c && void 0 !== c[a]
                      }) ? (r.ja(u.data.keys, a) || (h.push(a),
                      d.push({
                          tileKey: a,
                          data: c
                      })),
                      r.ja(v, a) && void 0 === u.data.Zm[a] && (u.data.Zm[a] = c)) : b[a] = c
                  }),
                  d.length && (q.zi ? s.add(d, function(a) {
                      a ? 3 !== a.code ? e() : q.zi = !1 : (u.data.keys = u.data.keys.concat(h),
                      x.setItem(u.key, u.data, !0),
                      c())
                  }) : x.setItem(u.key, u.data, !0)),
                  u.Ms = b) : (a && x.setItem(u.key, u.data, !0),
                  c())
              }
          };
          h()
      }
  }
  )();
  g.T = g.aa.extend({
      r: function(a, b, c) {
          var d = parseFloat(b)
            , e = parseFloat(a);
          if (isNaN(a) || isNaN(b))
              throw "Invalid Object: LngLat(" + e + ", " + d + ")";
          !0 !== c && (d = Math.max(Math.min(d, 90), -90),
          e = (e + 180) % 360 + (-180 > e || 180 === e ? 180 : -180));
          this.P = d;
          this.Q = e
      },
      HQ: function() {
          return g.a.nc(this.Q, 6)
      },
      CQ: function() {
          return g.a.nc(this.P, 6)
      },
      add: function(a, b) {
          return new g.T(this.Q + a.Q,this.P + a.P,b)
      },
      $a: function(a, b) {
          return new g.T(this.Q - a.Q,this.P - a.P,b)
      },
      dd: function(a, b) {
          return new g.T(this.Q / a,this.P / a,b)
      },
      Gd: function(a, b) {
          return new g.T(this.Q * a,this.P * a,b)
      },
      re: function(a) {
          return g.Hq.distance(this, a)
      },
      offset: function(a, b) {
          if (isNaN(a) || isNaN(b))
              return !1;
          var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.P * Math.PI / 180))
            , c = this.Q + 180 * c / Math.PI
            , d = 2 * Math.asin(Math.round(b) / 12756274);
          return new g.T(c,this.P + 180 * d / Math.PI)
      },
      cb: function(a) {
          a = g.a.Ha(a);
          return a instanceof g.T ? 1E-9 >= Math.max(Math.abs(this.P - a.P), Math.abs(this.Q - a.Q)) : !1
      },
      toString: function() {
          return g.a.nc(this.Q, 6) + "," + g.a.nc(this.P, 6)
      },
      fl: function() {
          return [this.Q, this.P]
      },
      jb: function() {
          var a = this.controlPoints
            , b = new g.T(this.Q,this.P);
          a && (b.controlPoints = [].concat(a));
          return b
      }
  });
  g.T.bpa = function(a, b, c) {
      c = c + 1 || Math.round(Math.abs(a.Q - b.Q));
      if (!c || 0.001 > Math.abs(a.Q - b.Q))
          return [];
      var d = []
        , e = Math.PI
        , f = g.qm.lu
        , h = g.qm.pua
        , k = Math.asin
        , l = Math.sqrt
        , m = Math.sin
        , n = Math.pow
        , p = Math.cos
        , q = Math.atan2
        , r = a.P * f;
      a = a.Q * f;
      var s = b.P * f;
      b = b.Q * f;
      for (var k = 2 * k(l(n(m((r - s) / 2), 2) + p(r) * p(s) * n(m((a - b) / 2), 2))), u, v, x, t, f = 1; f < c; f += 1)
          u = 1 / c * f,
          v = m((1 - u) * k) / m(k),
          x = m(u * k) / m(k),
          u = v * p(r) * p(a) + x * p(s) * p(b),
          t = v * p(r) * m(a) + x * p(s) * m(b),
          v = v * m(r) + x * m(s),
          v = q(v, l(n(u, 2) + n(t, 2))),
          u = q(t, u),
          b > a ? (u < a && (u += 2 * e),
          u > b && (u -= 2 * e)) : (u > a && (u -= 2 * e),
          u < b && (u += 2 * e)),
          d.push(new g.T(u * h,v * h,!0));
      return d
  }
  ;
  g.T.Nb({
      HQ: "getLng",
      CQ: "getLat",
      add: "add",
      $a: "subtract",
      dd: "divideBy",
      Gd: "multiplyBy",
      re: "distance",
      offset: "offset",
      cb: "equals",
      toString: "toString"
  });
  g.me = g.aa.extend({
      r: function() {
          this.CLASS_NAME = "AMap.Bounds";
          var a = null
            , b = null;
          if (1 === arguments.length && arguments[0]instanceof Array)
              a = new g.T(arguments[0][0],arguments[0][1],!0),
              b = new g.T(arguments[0][2],arguments[0][3],!0);
          else if (2 === arguments.length)
              a = g.a.Ha(arguments[0]),
              b = g.a.Ha(arguments[1]);
          else if (4 === arguments.length)
              a = new g.T(arguments[0],arguments[1]),
              b = new g.T(arguments[2],arguments[3]);
          else if (0 === arguments.length)
              a = new g.T(-180,-90),
              b = new g.T(180,90);
          else
              throw "Invalid Object: Bounds(" + arguments.join(",") + ")";
          this.xc = a;
          this.oc = b
      },
      Fu: function() {
          return this.xc
      },
      jy: function() {
          return this.oc
      },
      Oj: function() {
          return new g.T(this.xc.Q,this.oc.P,!0)
      },
      po: function() {
          return new g.T(this.oc.Q,this.xc.P,!0)
      },
      contains: function(a) {
          var b = this.xc, c = this.oc, d;
          if (a instanceof g.Ro)
              return this.eU().contains(a);
          a instanceof g.me ? (d = a.xc,
          a = a.oc) : d = a = g.a.Ha(a);
          var e = d.Q
            , f = b.Q
            , h = a.Q
            , k = c.Q;
          f > k && (k += 360,
          0 > e && (e += 360),
          0 > h && (h += 360));
          return d.P >= b.P && a.P <= c.P && e >= f && h <= k
      },
      Hg: function(a) {
          var b = this.xc
            , c = this.oc
            , d = a.xc;
          a = a.oc;
          var e = a.Q >= b.Q && d.Q <= c.Q;
          return a.P >= b.P && d.P <= c.P && e
      },
      ki: function() {
          return new g.T(this.xc.Q > this.oc.Q ? (this.xc.Q + this.oc.Q + 360) / 2 % 360 : (this.xc.Q + this.oc.Q) / 2,(this.xc.P + this.oc.P) / 2)
      },
      extend: function(a) {
          this.xc.Q = Math.min(this.xc.Q, a.Q);
          this.xc.P = Math.min(this.xc.P, a.P);
          this.oc.Q = Math.max(this.oc.Q, a.Q);
          this.oc.P = Math.max(this.oc.P, a.P);
          return this
      },
      Dxa: function(a) {
          return this.extend(a.xc).extend(a.oc)
      },
      toString: function() {
          return this.xc.toString() + ";" + this.oc.toString()
      },
      jb: function() {
          return new g.me(this.xc.jb(),this.oc.jb())
      },
      cb: function(a) {
          return a instanceof g.me ? this.xc.cb(a.xc) && this.oc.cb(a.oc) : !1
      },
      ij: function() {
          return Math.abs(this.oc.Q - this.xc.Q)
      },
      gj: function() {
          return Math.abs(this.xc.P - this.oc.P)
      },
      eU: function(a) {
          var b = [this.Fu(), this.po(), this.jy(), this.Oj()];
          a && b.push(this.Fu());
          return new g.Ro(b)
      },
      Mwa: function(a) {
          return new g.Gf(a.hc(this.Oj(), 20),a.hc(this.po(), 20))
      },
      yQ: function(a, b) {
          return this.eU(b).yQ(a)
      },
      vQ: function(a) {
          return this.Mwa(a).ki()
      }
  });
  g.me.Nb({
      Fu: "getSouthWest",
      jy: "getNorthEast",
      Oj: "getNorthWest",
      po: "getSouthEast",
      contains: "contains",
      Hg: "intersects",
      ki: "getCenter",
      extend: "extend"
  });
  g.H = g.aa.extend({
      r: function(a, b, c) {
          if (isNaN(a) || isNaN(b))
              throw "Invalid Object: Pixel(" + a + ", " + b + ")";
          this.x = c ? Math.round(a) : Number(a);
          this.y = c ? Math.round(b) : Number(b)
      },
      hf: function() {
          return this.x
      },
      de: function() {
          return this.y
      },
      add: function(a, b) {
          return new g.H(this.x + a.x,this.y + a.y,b)
      },
      $a: function(a, b) {
          return new g.H(this.x - a.x,this.y - a.y,b)
      },
      dd: function(a, b) {
          return new g.H(this.x / a,this.y / a,b)
      },
      Gd: function(a, b) {
          return new g.H(this.x * a,this.y * a,b)
      },
      re: function(a) {
          var b = a.x - this.x;
          a = a.y - this.y;
          return Math.sqrt(b * b + a * a)
      },
      floor: function() {
          return new g.H(Math.floor(this.x),Math.floor(this.y))
      },
      round: function() {
          return new g.H(this.x,this.y,!0)
      },
      cb: function(a) {
          return a instanceof g.H && this.x === a.x && this.y === a.y
      },
      jb: function(a) {
          return new g.H(this.x,this.y,a)
      },
      toString: function() {
          return this.x + "," + this.y
      },
      fl: function() {
          return [this.x, this.y]
      },
      length: function() {
          return Math.sqrt(this.x * this.x + this.y * this.y)
      },
      direction: function() {
          var a = this.x
            , b = this.y;
          if (0 === a && 0 === b)
              return null;
          if (0 === a)
              return 0 < b ? 90 : 270;
          var c = 180 * Math.atan(b / a) / Math.PI;
          return 0 > a && 0 < b ? c + 180 : 0 > a && 0 > b ? c + 180 : 0 < a && 0 > b ? c + 360 : c
      },
      hu: function(a) {
          var b = this.length()
            , c = a.length();
          return b && c ? 180 * Math.acos((this.x * a.x + this.y * a.y) / c / b) / Math.PI : null
      },
      Pma: function(a) {
          var b = this.length()
            , c = a.length();
          return b && c ? (this.x * a.x + this.y * a.y) / c / b : null
      },
      toFixed: function(a) {
          this.x = g.a.nc(this.x, a);
          this.y = g.a.nc(this.y, a);
          return this
      }
  });
  g.H.Nb({
      hf: "getX",
      de: "getY",
      add: "add",
      $a: "subtract",
      dd: "divideBy",
      Gd: "multiplyBy",
      re: "distance",
      cb: "equals",
      toString: "toString"
  });
  g.xd = g.aa.extend({
      r: function(a, b, c) {
          if (isNaN(a) || isNaN(b))
              throw "Invalid Object: Size(" + a + ", " + b + ")";
          this.width = c ? Math.round(a) : Number(a);
          this.height = c ? Math.round(b) : Number(b)
      },
      jb: function() {
          return new g.xd(this.width,this.height)
      },
      ij: function() {
          return this.width
      },
      gj: function() {
          return this.height
      },
      cE: function() {
          return new g.H(this.ij(),this.gj())
      },
      contains: function(a) {
          return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height)
      },
      cb: function(a) {
          return a instanceof g.xd && this.width === a.width && this.height === a.height
      },
      toString: function() {
          return this.ij() + "," + this.gj()
      }
  });
  g.xd.Nb({
      ij: "getWidth",
      gj: "getHeight",
      toString: "toString"
  });
  g.Ro = g.aa.extend({
      r: function(a) {
          this.CLASS_NAME = "AMap.ArrayBounds";
          a = g.a.Ha(a);
          this.path = [];
          for (var b = 0; b < a.length; b += 1)
              this.path.push([a[b].Q, a[b].P]);
          this.bounds = this.Ud = a
      },
      contains: function(a, b) {
          if (a instanceof g.Ro)
              return g.Hq.isRingInRing(a.path, this.path);
          a instanceof g.H ? a = [a.x, a.y] : a instanceof g.T && (a = [a.Q, a.P]);
          return g.wd.Nd(a, this.path, b)
      },
      toBounds: function() {
          for (var a = new g.me(180,90,-180,-90), b = this.Ud.length - 1; 0 <= b; b -= 1)
              a.extend(this.Ud[b]);
          return a
      },
      yQ: function(a) {
          for (var b = [], c = 0; c < this.path.length; c += 1)
              b[c] = a.hc(this.path[c], 20);
          return b
      },
      vQ: function(a) {
          return this.toBounds().vQ(a)
      },
      ki: function() {
          return this.toBounds().ki()
      }
  });
  g.Ro.Nb({
      contains: "contains",
      ki: "getCenter"
  });
  g.J9 = g.Ro.extend({
      r: function(a) {
          this.CLASS_NAME = "AMap.CoordsBounds";
          this.path = a;
          if (a[0]instanceof g.H) {
              this.path = [];
              for (var b = 0; b < a.length; b += 1)
                  this.path.push([a[b].x, a[b].y])
          }
          this.bounds = this.Ud = a
      }
  });
  g.Gf = g.aa.extend({
      r: function() {
          if (2 === arguments.length)
              this.Zb = arguments[0],
              this.Fd = arguments[1];
          else if (1 === arguments.length && arguments[0]instanceof Array || 4 === arguments.length) {
              var a = arguments[0]instanceof Array ? arguments[0] : arguments;
              this.Zb = new g.H(a[0],a[1]);
              this.Fd = new g.H(a[2],a[3])
          } else
              throw "Invalid Object: PixelBounds(" + arguments.join(",") + ")";
      },
      ki: function(a) {
          return new g.H((this.Zb.x + this.Fd.x) / 2,(this.Zb.y + this.Fd.y) / 2,a)
      },
      contains: function(a) {
          var b;
          a instanceof g.Gf ? (b = a.Zb,
          a = a.Fd) : b = a;
          return b.x > this.Zb.x && a.x < this.Fd.x && b.y > this.Zb.y && a.y < this.Fd.y
      },
      ij: function() {
          return this.Fd.x - this.Zb.x
      },
      gj: function() {
          return this.Fd.y - this.Zb.y
      },
      Hg: function(a, b) {
          b || 0 === b || (b = 20);
          var c = this.Zb
            , d = this.Fd
            , e = a.Zb
            , f = a.Fd
            , h = f.y >= c.y - b && e.y <= d.y + b;
          return f.x >= c.x - b && e.x <= d.x + b && h
      },
      toString: function() {
          return this.Zb + ";" + this.Fd
      },
      jb: function() {
          return new g.Gf(this.Zb.jb(),this.Fd.jb())
      }
  });
  g.I = {};
  g.I.TO = function(a) {
      for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1)
          g.I.RH(b, a[c]);
      return b
  }
  ;
  g.I.W0 = function(a, b, c) {
      var d = Math.min.apply(null, a);
      a = Math.max.apply(null, a);
      var e = Math.min.apply(null, b);
      b = Math.max.apply(null, b);
      return g.I.Lma(d, a, e, b, c)
  }
  ;
  g.I.buffer = function(a, b) {
      a[0] -= b;
      a[1] -= b;
      a[2] += b;
      a[3] += b
  }
  ;
  g.I.jb = function(a) {
      return a.slice()
  }
  ;
  g.I.Nd = function(a, b) {
      return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
  }
  ;
  g.I.H1 = function(a, b) {
      return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
  }
  ;
  g.I.rBa = function() {
      return [Infinity, Infinity, -Infinity, -Infinity]
  }
  ;
  g.I.Lma = function(a, b, c, d, e) {
      return "undefined" !== typeof e ? (e[0] = a,
      e[2] = b,
      e[1] = c,
      e[3] = d,
      e) : [a, c, b, d]
  }
  ;
  g.I.empty = function(a) {
      a[0] = a[1] = Infinity;
      a[2] = a[3] = -Infinity;
      return a
  }
  ;
  g.I.cb = function(a, b) {
      return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3]
  }
  ;
  g.I.extend = function(a, b) {
      b[0] < a[0] && (a[0] = b[0]);
      b[2] > a[2] && (a[2] = b[2]);
      b[1] < a[1] && (a[1] = b[1]);
      b[3] > a[3] && (a[3] = b[3])
  }
  ;
  g.I.RH = function(a, b) {
      b[0] < a[0] && (a[0] = b[0]);
      b[0] > a[2] && (a[2] = b[0]);
      b[1] < a[1] && (a[1] = b[1]);
      b[1] > a[3] && (a[3] = b[1])
  }
  ;
  g.I.lCa = function(a) {
      return [a[0], a[1]]
  }
  ;
  g.I.mCa = function(a) {
      return [a[2], a[1]]
  }
  ;
  g.I.ki = function(a) {
      return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
  }
  ;
  g.I.yCa = function(a, b, c, d, e) {
      var f = b * d[0] / 2;
      d = b * d[1] / 2;
      b = Math.cos(c);
      c = Math.sin(c);
      f = [-f, -f, f, f];
      d = [-d, d, -d, d];
      var h, k, l;
      for (h = 0; 4 > h; h += 1)
          k = f[h],
          l = d[h],
          f[h] = a[0] + k * b - l * c,
          d[h] = a[1] + k * c + l * b;
      return g.I.W0(f, d, e)
  }
  ;
  g.I.gj = function(a) {
      return a[3] - a[1]
  }
  ;
  g.I.LCa = function(a) {
      return [a[2] - a[0], a[3] - a[1]]
  }
  ;
  g.I.PCa = function(a) {
      return [a[0], a[3]]
  }
  ;
  g.I.QCa = function(a) {
      return [a[2], a[3]]
  }
  ;
  g.I.ij = function(a) {
      return a[2] - a[0]
  }
  ;
  g.I.Hg = function(a, b) {
      return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
  }
  ;
  g.I.Qk = function(a) {
      return a[2] < a[0] || a[3] < a[1]
  }
  ;
  g.I.normalize = function(a, b) {
      return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])]
  }
  ;
  g.I.pFa = function(a, b) {
      var c = (a[2] - a[0]) / 2 * (b - 1)
        , d = (a[3] - a[1]) / 2 * (b - 1);
      a[0] -= c;
      a[2] += c;
      a[1] -= d;
      a[3] += d
  }
  ;
  g.I.touches = function(a, b) {
      return g.I.Hg(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1])
  }
  ;
  g.I.transform = function(a, b, c) {
      a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
      b(a, a, 2);
      return g.I.W0([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
  }
  ;
  g.me.zb({
      r: function() {
          var a = g.me.prototype.r;
          return function() {
              a.apply(this, arguments);
              this.southwest = this.xc;
              this.northeast = this.oc
          }
      }(),
      extend: function() {
          var a = g.me.prototype.extend;
          return function() {
              a.apply(this, arguments);
              this.xc.lng = this.xc.Q;
              this.xc.lat = this.xc.P;
              this.oc.lng = this.oc.Q;
              this.oc.lat = this.oc.P;
              return this
          }
      }()
  });
  g.T.zb({
      r: function() {
          var a = g.T.prototype.r;
          return function() {
              a.apply(this, arguments);
              this.lng = parseFloat(this.Q.toFixed(6));
              this.lat = parseFloat(this.P.toFixed(6))
          }
      }()
  });
  g.ZE = g.aa.extend({
      r: function(a, b, c, d) {
          this.aW = a;
          this.qW = b;
          this.FW = c;
          this.bX = d
      },
      transform: function(a, b) {
          return this.j0(a.jb(), b)
      },
      j0: function(a, b) {
          b = b || 1;
          a.x = b * (this.aW * a.x + this.qW);
          a.y = b * (this.FW * a.y + this.bX);
          return a
      },
      Fxa: function(a, b) {
          b = b || 1;
          return new g.H((a.x / b - this.qW) / this.aW,(a.y / b - this.bX) / this.FW)
      }
  });
  g.Xo = g.aa.extend({
      r: function(a) {
          this.ZK = a.MAX_LATITUDE || 85.0511287798;
          a.project && a.unproject && (this.hc = a.project,
          this.Mh = a.unproject)
      }
  });
  g.Xo.qV = {
      hc: function(a) {
          return new g.H(a.Q,a.P)
      },
      Mh: function(a, b) {
          return new g.T(a.x,a.y,b)
      }
  };
  g.Xo.Q$ = new g.Xo({
      MAX_LATITUDE: 85.0511287798,
      project: function(a) {
          var b = Math.PI / 180
            , c = this.ZK
            , c = Math.max(Math.min(c, a.P), -c);
          a = a.Q * b;
          b = Math.log(Math.tan(Math.PI / 4 + c * b / 2));
          return new g.H(a,b,!1)
      },
      unproject: function(a, b) {
          var c = 180 / Math.PI;
          return new g.T(a.x * c,(2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c,b)
      }
  });
  g.Xo.vV = {
      ZK: 85.0840591556,
      kL: 6356752.3142,
      jL: 6378137,
      hc: function(a) {
          var b = Math.PI / 180
            , c = this.ZK
            , d = Math.max(Math.min(c, a.P), -c)
            , e = this.jL
            , c = this.kL;
          a = a.Q * b * e;
          b *= d;
          e = c / e;
          e = Math.sqrt(1 - e * e);
          d = e * Math.sin(b);
          d = Math.pow((1 - d) / (1 + d), 0.5 * e);
          b = Math.tan(0.5 * (0.5 * Math.PI - b)) / d;
          b = -c * Math.log(b);
          return new g.H(a,b)
      },
      Mh: function(a, b) {
          for (var c = 180 / Math.PI, d = this.jL, e = this.kL, f = a.x * c / d, d = e / d, d = Math.sqrt(1 - d * d), e = Math.exp(-a.y / e), h = Math.PI / 2 - 2 * Math.atan(e), k = 15, l = 0.1; 1E-7 < Math.abs(l) && (k -= 1,
          0 < k); )
              l = d * Math.sin(h),
              l = Math.PI / 2 - 2 * Math.atan(e * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h,
              h += l;
          return new g.T(f,h * c,b)
      }
  };
  g.Ph = {};
  g.Ph.CE = {
      $C: function(a, b) {
          var c = this.yf.hc(a)
            , d = this.scale(b);
          return this.gE.j0(c, d)
      },
      AD: function(a, b, c) {
          b = this.scale(b);
          a = this.gE.Fxa(a, b);
          return this.yf.Mh(a, c)
      },
      hc: function(a) {
          return this.yf.hc(a)
      },
      scale: function(a) {
          return 256 << a
      },
      Jp: function(a) {
          return 12756274 * Math.PI / (256 * Math.pow(2, a))
      }
  };
  g.Ph.PK = g.extend({}, g.Ph.CE, {
      code: "EPSG:3857",
      yf: g.Xo.Q$,
      gE: new g.ZE(0.5 / Math.PI,0.5,-0.5 / Math.PI,0.5),
      hc: function(a) {
          return this.yf.hc(a).Gd(6378137)
      }
  });
  g.Ph.bV = g.extend({}, g.Ph.CE, {
      code: "EPSG:3395",
      yf: g.Xo.vV,
      gE: function() {
          var a = g.Xo.vV;
          return new g.ZE(0.5 / (Math.PI * a.jL),0.5,-0.5 / (Math.PI * a.kL),0.5)
      }()
  });
  g.Ph.cV = g.extend({}, g.Ph.CE, {
      code: "EPSG:4326",
      yf: g.Xo.qV,
      gE: new g.ZE(1 / 360,0.5,-1 / 360,0.25)
  });
  g.Ph.gza = g.extend({}, g.Ph.CE, {
      yf: g.Xo.qV,
      gE: new g.ZE(1,0,1,0)
  });
  g.ZI = {
      hc: function(a, b) {
          a = g.a.Ha(a);
          return this.aj.$C(a, b || this.get("zoom"))
      },
      Mh: function(a, b, c) {
          return this.aj.AD(a, b || this.get("zoom"), c)
      },
      wra: function(a, b) {
          return this.hc(a, b)
      },
      iCa: function(a, b) {
          return this.Mh(a, b)
      },
      wp: function(a, b, c) {
          g.c.add(this, "containerToLngLat");
          var d = this.get("size").cE().dd(2);
          if (a.cb(d) && !c)
              return this.get("center");
          a = this.lg(a, b, c);
          return this.Qd(a)
      },
      ds: function(a, b) {
          g.c.add(this, "lngLatToContainer");
          var c = 0;
          b && (c = "string" === typeof b ? Math.round(parseFloat(b) / 0.14929107086948487) : b);
          var d = this.Ab(a);
          return this.Ae(d, null, c)
      },
      Ab: function(a) {
          a = g.a.Ha(a);
          return this.hc(a, 20)
      },
      Qd: function(a) {
          return a ? this.Mh(a, 20) : a
      },
      VI: function(a) {
          a = g.a.Ha(a);
          return this.hc(a, 20).$a(g.a.ac)
      },
      W4: function(a, b) {
          b || (a = g.a.Ha(a));
          var c = []
            , d = !1;
          void 0 === a[0].length && (d = !0);
          for (var c = [], e = 0, f = a.length; e < f; e += 1)
              if (d) {
                  var h = this.hc(a[e], 20).$a(g.a.ac);
                  c[e] = [h.x, h.y]
              } else
                  c[e] = this.W4(a[e], !0);
          return c
      },
      zoa: function(a) {
          return this.Mh(a.add(g.a.ac), 20)
      },
      jCa: function(a) {
          return this.Ae(a.add(g.a.ac))
      },
      rCa: function(a) {
          return a ? this.hc(this.get("center"), a) : this.get("centerPixel")
      },
      Pza: function(a) {
          return (new g.H(a.x + 2.0037508342789244E7,2.0037508342789244E7 - a.y)).dd(0.14929107086948487)
      },
      X5: function(a) {
          return new g.H(0.14929107086948487 * a.x - 2.0037508342789244E7,2.0037508342789244E7 - 0.14929107086948487 * a.y)
      }
  };
  z.bF = g.aa.extend({
      ja: [g.sa, g.Oe],
      B: {
          center: new g.T(116.397128,39.916527),
          zoom: 13,
          rotation: 0,
          crs: "EPSG3857"
      },
      r: function(a) {
          this.CLASS_NAME = "AMap.View2D";
          g.c.ya(this, a);
          a = a || {};
          a.center && (a.center = g.a.Ha(a.center));
          this.B = a
      }
  });
  z.Kb = g.aa.extend({
      ja: [g.sa, g.Oe, g.ZI],
      B: {
          features: "all",
          showLabel: !0,
          dragEnable: !0,
          showIndoorMap: g.l.Z ? !1 : !0,
          lang: "zh_cn",
          keyboardEnable: !0,
          doubleClickZoom: !0,
          gridMapForeign: !1,
          scrollWheel: !0,
          zoomEnable: !0,
          jogEnable: !0,
          continuousZoomEnable: !0,
          resizeEnable: !1,
          animateEnable: !0,
          rotateEnable: !1,
          labelzIndex: 99,
          showFog: !0,
          touchZoom: !0,
          zooms: [3, g.l.Z ? g.l.Mc ? 19 : 20 : 18],
          defaultCursor: "",
          limitBounds: null,
          logoUrl: g.A.yb + "/theme/v1.3/logo@1x.png",
          logoUrlRetina: g.A.yb + "/theme/v1.3/logo@2x.png",
          copyright: "\x3c!--v1.4.13--\x3e &copy " + (new Date).getFullYear() + " AutoNavi ",
          isHotspot: !g.l.Z,
          baseRender: g.l.O0,
          overlayRender: g.l.qta,
          mapStyle: "normal",
          showBuildingBlock: g.l.xf,
          crs: "EPSG3857",
          rotation: 0,
          pitch: 0,
          yaw: 0,
          scale: 1,
          center: new g.T(116.397128,39.916527),
          zoom: 13,
          detectRetina: !0,
          pitchEnable: !1,
          buildingAnimation: !1,
          maxPitch: 83,
          turboMode: !0,
          preloadMode: !0,
          workerMode: !0
      },
      poiOnAMAP: function(a) {
          g.c.add(this, "poiOnAMAP");
          var b = {}
            , c = g.a.Ha(a.location);
          b.id = a.id;
          c && (b.y = c.P,
          b.x = c.Q);
          b.name = a.name;
          b.address = a.address;
          g.Qh.Ks(g.Qh.g3(b))
      },
      detailOnAMAP: function(a) {
          g.c.add(this, "detailOnAMAP");
          var b = {}
            , c = g.a.Ha(a.location);
          b.id = a.id;
          c && (b.y = c.P,
          b.x = c.Q);
          b.name = a.name;
          g.Qh.Ks(g.Qh.e3(b))
      },
      setLabelzIndex: function(a) {
          g.c.add(this, "setLabelzIndex");
          return this.set("labelzIndex", a)
      },
      getLabelzIndex: function() {
          return this.get("labelzIndex", null, !0)
      },
      setMapStyle: function(a) {
          g.c.add(this, "setMapStyle");
          -1 === a.indexOf("amap://styles/") ? (this.set("styleUrl", "", !0),
          this.set("mapStyle", a)) : this.set("styleUrl", a);
          this.bS()
      },
      getMapStyle: function() {
          return this.get("styleUrl") || this.get("mapStyle", null, !0)
      },
      getFeatures: function() {
          return this.get("features", null, !0)
      },
      setFeatures: function(a) {
          g.c.add(this, "setFeatures");
          this.set("features", a)
      },
      setLang: function(a) {
          g.c.add(this, "setLang", a);
          "en" !== a && "zh_cn" !== a && "zh_en" !== a || a === this.get("lang", null, !0) || (this.set("lang", a),
          this.Sj && this.Sj.b7(this))
      },
      getLang: function() {
          return this.get("lang", null, !0)
      },
      setCity: function(a, b) {
          g.c.add(this, "setCity");
          var c = this;
          (new g.fb.vb(g.A.Rd + "/v3/config/district?subdistrict=0&extensions=all&key=" + g.A.key + "&s=rsv3&output=json&keywords=" + a,{
              callback: "callback"
          })).g("complete", function(d) {
              var e = d.districts;
              if (e && e.length) {
                  d = e[0];
                  /[^\w]+/.test(a) && (e = g.a.find(e, function(b) {
                      return b.name === a
                  })) && e !== d && (d = e);
                  try {
                      var f = d.center.split(","), h;
                      switch (d.level) {
                      case "city":
                          h = 10;
                          break;
                      case "province":
                          h = 7;
                          break;
                      case "district":
                          h = 12;
                          break;
                      case "country":
                          h = 4;
                          break;
                      default:
                          h = 12
                      }
                      -1 !== d.name.indexOf("\u5e02") && (h = 10);
                      c.C = !0;
                      c.setZoomAndCenter(h, new g.T(f[0],f[1]), !0);
                      c.C = !1;
                      b && b.call(c, f, h)
                  } catch (k) {}
              }
          }, this)
      },
      getScreenShot: function(a, b) {
          g.c.add(this, "getScreenShot");
          return this.map && g.l.Ok ? this.map.o3(a, b) : ""
      },
      getCity: function(a, b) {
          g.c.add(this, "getCity");
          var c = g.A.Rd + "/v3/geocode/regeo?&extensions=&&key=" + g.A.key + "&s=rsv3&output=json&location=" + (b || this.get("center", null, !0));
          (new g.fb.vb(c,{
              callback: "callback",
              Cx: !0,
              vd: "REGEO"
          })).g("complete", function(b) {
              b = b.regeocode.addressComponent;
              a({
                  province: b.province,
                  city: b.city instanceof Array ? "" : b.city,
                  citycode: b.citycode instanceof Array ? "" : b.citycode,
                  district: b.district instanceof Array ? "" : b.district
              })
          }, this)
      },
      r: function(a, b) {
          b = g.extend({}, b);
          this.id = g.a.ub(this);
          this.CLASS_NAME = "AMap.Map";
          g.c.ya(this, b);
          this.C = !0;
          b = b || {};
          b.mapStyle && -1 !== b.mapStyle.indexOf("amap://styles/") ? (b.styleUrl = b.mapStyle,
          delete b.mapStyle) : b.styleUrl = "amap://styles/normal";
          b.bgColor && g.extend(g.A.pe, b.bgColor);
          b.maxPitch && (b.maxPitch = Math.min(this.B.maxPitch, Math.max(b.maxPitch, 0)));
          b.pitch && (b.pitch = Math.min(b.maxPitch || this.B.maxPitch, Math.max(b.pitch, 0)));
          "3D" !== b.viewMode && (b.pitch = 0);
          g.A.or = b.buildingColor || null;
          b.mobile && (g.l.Z = !0);
          b.noPoi && (g.A.Asa = !0);
          b.editEnable && (b.nolimg = !0,
          b.showIndoorMap = !1);
          void 0 !== b.nolimg && (b.nolimg_param = b.nolimg);
          "3D" === b.viewMode && g.l.rq && void 0 === b.showBuildingBlock && !0 === b.showBuildingBlock;
          this.Qp = !!b.enableSocket;
          b.server && (g.A.Rd = b.server);
          b.vdataUrl && (g.A.CK = b.vdataUrl);
          if ("string" === typeof a) {
              if (a = this.K = document.getElementById(a),
              !a)
                  return
          } else
              "DIV" === a.tagName && (this.K = a);
          if (this.K.GL) {
              var c = this.K.GL;
              c.C = !0;
              c.destroy();
              c.C = !1
          }
          g.oe.Ze.start({
              id: this.id,
              K: this.K
          });
          this.K.GL = this;
          var c = this.B.zooms[1]
            , d = this.B.zooms[0];
          b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]),
          !0 === b.expandZoomRange && (c = g.l.Z ? g.l.Mc ? 19 : 20 : 20),
          b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c];
          b.forceZooms && (b.zooms = b.forceZooms);
          b = this.Fla(b);
          c = this.getSize(!0);
          b.center && (b.center = g.a.Ha(b.center));
          this.aj = this.Mma(b.crs || this.B.crs, b.center || this.B.center);
          this.Oka(c, b);
          d = b.lang;
          "en" !== d && "zh_cn" !== d && "zh_en" !== d && (b.lang = "zh_cn");
          g.j.eg || (b.rotation = 0,
          b.pitch = 0,
          b.rotateEnable = !1);
          g.l.MR ? !1 !== b.workerMode && (z.Kb.lt ? (b.workerMode = !1,
          z.Kb.lt++) : z.Kb.lt = 1) : (b.workerMode = !1,
          b.preloadMode = !1);
          b.layers && (d = b.layers,
          delete b.layers,
          b.layers = d);
          b.baseRender = b.baseRender || g.l.O0;
          b.forceVector && (b.baseRender = g.l.xf ? "vw" : "v");
          b.disableVector && (b.baseRender = "d");
          "dom" === b.renderer && (b.baseRender = "d",
          b.overlayRender = "d");
          c = Math.max(c.width, c.height);
          g.l.ia && (c *= Math.min(2, window.devicePixelRatio || 1));
          "vw" === b.baseRender && c > g.l.asa && (b.baseRender = "dv");
          "d" == b.baseRender && b.vectorMapForeign && (b.vectorMapForeign = !1,
          b.gridMapForeign = !0);
          g.a.Db(this, b);
          this.We(this.B);
          "rotateEnable"in b || "3D" !== b.viewMode || !g.l.rq || this.set("rotateEnable", !0);
          "pitchEnable"in b || "3D" !== b.viewMode || !g.l.rq || this.set("pitchEnable", !0);
          c = this.get("zoom", null, !0);
          d = this.get("zooms");
          c > d[1] ? c = d[1] : c < d[0] && (c = d[0]);
          this.set("zoom", c);
          this.B.zoom = c;
          this.Oma(this.B);
          this.hP();
          var e = this;
          this.We({
              overlays: [],
              infos: {},
              controls: {}
          });
          var f = [];
          (b.gridMapForeign || b.vectorMapForeign) && f.push("gridmap");
          b.vectorMapForeign && g.l.du && f.push("MVT", "vectorForeign");
          b.forceVector && (f.push("vectorlayer"),
          f.push("overlay"));
          "3D" === b.viewMode && g.l.rq && f.push("Map3D");
          g.l.Ok && (b.vectorMapForeign || b.mapStyle || b.nolimg) && f.push("labelcanvas");
          b.editEnable && f.push("edit");
          g.l.Ok && (f.push("AMap.IndoorMap"),
          -1 !== f.indexOf("Map3D") && f.push("AMap.IndoorMap3D"));
          this.ia = g.l.ia && this.get("detectRetina");
          this.W8(b);
          this.C = !1;
          this.Nra(function() {
              g.qb.Lg(f, function() {
                  if (!e.get("destroy")) {
                      var b = new g.Kb(a,e);
                      if (g.Je) {
                          var c = (g.Je[0] || g.Je).stylemaps["50001:1"].browserStyle[0].split("&");
                          b.kF = [c[0], c[4]]
                      }
                      b.Pe("zoom center centerCoords rotation yaw pitch resolution".split(" "), e.view, !0);
                      b.g("complete", function() {
                          var a = {};
                          b.J && "3D" == b.J.type && (a.canvas = b.J.Qa,
                          a.gl = b.J.ga);
                          this.q("complete", a)
                      }, e, !0);
                      b.aj = e.aj;
                      e.Pe(["zoomSlow", "panTo", "targetLevel", "render"], b);
                      b.Pe(["size", "bounds"], e);
                      e.loaded = !0;
                      e.q("coreMapCreated");
                      g.l.Ok && e.pka();
                      e.C = !0;
                      "3D" === e.view.type && (e.AmbientLight || (e.AmbientLight = new g.nw.SU([1, 1, 1],0.9)),
                      e.DirectionLight || (e.DirectionLight = new g.nw.aV([0, -1, 1],[1, 1, 1],0.1)));
                      e.C = !1
                  }
              })
          })
      },
      Nra: function(a) {
          function b() {
              var a = AMap.anole
                , b = {}
                , c = []
                , d = 0
                , e = void 0;
              if (a) {
                  for (var a = a.replace(/\?/g, ":").replace(/\//g, "&"), e = a.split(""), f = 0, q = e.length; f < q; f++)
                      void 0 === b[e[f]] && (b[e[f]] = d++,
                      c.push(e[f]));
                  c.reverse();
                  a = a.replace(/./g, function(a) {
                      return c[b[a]]
                  });
                  g.Je = eval(a);
                  e = a = c = b = null;
                  delete AMap.anole
              }
          }
          if (g.l.ue || g.Je)
              a();
          else {
              var c = !0;
              try {
                  var d = JSON.parse(localStorage.getItem("_AMap_anole"));
                  d && d.version === g.l.Df && d.script ? eval(d.script) : c = !1
              } catch (e) {
                  c = !1
              }
              if (c)
                  b(),
                  a();
              else {
                  var f = document.createElement("script");
                  f.tBa = "anonymous";
                  f.id = "amap_anole_js";
                  f.src = g.A.Cc + "://vdata.amap.com/style?v=" + g.A.gr + "&key=" + g.A.key + "&mapstyle=normal";
                  c = document;
                  (c.head || c.getElementsByTagName("head")[0] || c.body).appendChild(f);
                  f.onload = function() {
                      if (!g.Je) {
                          if (g.l.es)
                              try {
                                  var c = {
                                      version: g.l.Df,
                                      script: "AMap['anole']=" + JSON.stringify(AMap.anole)
                                  };
                                  localStorage.setItem("_AMap_anole", JSON.stringify(c))
                              } catch (d) {}
                          b()
                      }
                      a();
                      f.parentNode.removeChild(f)
                  }
              }
          }
      },
      getViewMode_: function() {
          return this.view.type
      },
      Foa: function(a, b, c) {
          var d = new g.T(a[4],a[5]);
          if ((a = new g.me(a[0],a[1],a[2],a[3])) && b && d) {
              for (var e = c[1]; e > c[0]; e -= 1) {
                  var f = this.hc(a.xc, e)
                    , h = this.hc(a.oc, e);
                  if (Math.abs(h.x - f.x) < b.width && Math.abs(f.y - h.y) < b.height)
                      break
              }
              return [d, Math.min(e + 1, c[1])]
          }
          return null
      },
      Oka: function(a, b) {
          if (!(b && b.center && b.zoom)) {
              var c = this.Foa(g.A.Ud, a, b.zooms);
              b.center = b.center || c && c[0];
              "number" !== typeof b.zoom && (b.zoom = c && c[1])
          }
      },
      Mma: function(a, b) {
          if (b instanceof g.T) {
              if ("string" === typeof a) {
                  switch (a) {
                  case "EPSG3395":
                      return g.Ph.bV;
                  case "EPSG4326":
                      return g.Ph.cV
                  }
                  return g.Ph.PK
              }
              if (a.pointToLngLat && a.lngLatToPoint)
                  return {
                      AD: a.pointToLngLat,
                      $C: a.lngLatToPoint,
                      Jp: a.getResolution
                  };
              throw "illegal projection";
          }
          var c = this.get("zoom", null, !0);
          return {
              Jp: function(a) {
                  return Math.pow(2, c - a)
              },
              $C: function() {},
              AD: function() {}
          }
      },
      Yva: function(a, b) {
          this.zw && this.zw.stop();
          var c = ["pitch", "rotation", "zoom", "center"], d = {}, e = !1, f;
          for (f in a)
              if (a.hasOwnProperty(f) && -1 !== g.a.indexOf(c, f)) {
                  var h = this.get(f);
                  void 0 === h || h === a[f] || h.cb && h.cb(a[f]) || (d[f] = this.get(f),
                  e = !0)
              }
          e && (this.zw = new g.vj(d,a,null,0),
          this.zw.transition = function(a, c, e) {
              e /= b || 300;
              if (1 <= e)
                  return c;
              var f = {}, h;
              for (h in d)
                  d.hasOwnProperty(h) && (f[h] = "center" === h ? a[h].add(c[h].$a(a[h]).Gd(e)) : a[h] + (c[h] - a[h]) * e);
              return f
          }
          ,
          this.zw.$p = function(b) {
              b === a && (this.zw.stop(),
              this.Ad = null);
              for (var c in b)
                  b.hasOwnProperty(c) && ("center" === c ? (this.C = !0,
                  this.setCenter(b[c], !0),
                  this.C = !1) : this.set(c, b[c]))
          }
          ,
          this.zw.sn(this))
      },
      Oma: function(a) {
          "3D" === this.get("viewMode") && g.l.rq ? (this.set("baseRender", "vw"),
          this.view = new g.uL(this,a)) : this.view = new g.bF(this,a);
          this.Z3()
      },
      Z3: function() {
          this.oi = "d" < this.get("baseRender") || "3D" === this.view.type
      },
      featuresChanged: function() {
          this.hP()
      },
      bS: function() {
          this.hP();
          this.LT()
      },
      LT: function() {
          if (this.Yl) {
              var a = !0;
              this.C = !0;
              var b = this.getMapStyle();
              if (!1 === this.get("showIndoorMap") || "normal" !== b && "amap://styles/normal" !== b)
                  a = !1;
              b = this.getLayers();
              this.C = !1;
              for (var c in b)
                  b.hasOwnProperty(c) && "AMap.IndoorMap" === b[c].CLASS_NAME && b[c] !== this.Yl && (a = !1);
              this.Yl.getMap() !== this && this.Yl.setMap(this);
              this.Yl.set("visible", a)
          }
      },
      hP: function() {
          this.W8();
          if (this.view && "3D" !== this.view.type) {
              var a = this.get("baseRender");
              if (a && !("dv" < a)) {
                  var b = this.get("features", null, !0);
                  this.C = !0;
                  var c = this.getMapStyle();
                  this.C = !1;
                  var d = this.get("editEnable");
                  b && c && (g.l.du && (d || "all" !== b || "normal" !== c && "amap://styles/normal" !== c) ? (this.set("baseRender", "v"),
                  this.yS = a) : this.yS && (this.set("baseRender", this.yS),
                  this.yS = null));
                  this.Z3()
              }
          }
      },
      pka: function() {
          var a = this;
          !a.Yl && a.K && (a.indoorMap = a.Yl = new AMap.IndoorMap({
              innerLayer: !0
          }),
          a.LT(),
          g.a.Qc(function() {
              a.q("indoor_create", {
                  target: a
              });
              a.set("display")
          }))
      },
      layersChanged: function() {
          this.C = !0;
          var a = this.getLayers();
          this.iJ = this.C = !1;
          for (var b = 0; b < a.length; b += 1)
              a[b].C = !0,
              a[b].getMap() !== this && a[b].setMap(this),
              a[b].C = !1,
              a[b].iJ && (this.iJ = !0);
          this.LT()
      },
      getMapNumber: function() {
          if (this.map)
              return this.map.HD()
      },
      getAdcode: function() {
          g.c.add(this, "getAdcode");
          return g.A.nka
      },
      W8: function() {
          function a() {
              var a = !1;
              g.a.Rb(b.B.layers, function(b) {
                  if (b.UF && b.constructor === z.o.ob)
                      return a = !0,
                      !1
              }, b);
              if (g.a.ja(["d", "dv"], b.get("baseRender")) || !g.a.ja(["normal", "amap://styles/normal"], b.get("mapStyle")) || "3D" === b.get("viewMode") && 0 < b.get("pitch") || "all" !== b.get("features") || b.get("editEnable") || !b.get("turboMode"))
                  a = !1;
              return a
          }
          if (!this.G6) {
              var b = this
                , c = a()
                , d = this.get("rasterLayer");
              if (d && !c)
                  this.bk(d),
                  this.set("rasterLayer", void 0);
              else if (!d && c && this.get("layers")) {
                  d = new z.o.ob({
                      innerLayer: !0,
                      map: this,
                      ak: !0,
                      zIndex: 0
                  });
                  d.Rqa = !0;
                  if (this.B.layers) {
                      var e = null;
                      g.a.Rb(this.B.layers, function(a) {
                          a instanceof z.o.ob && a.UF && (null === e || a.get("zIndex") > e.get("zIndex")) && (e = a)
                      });
                      e && d.Pe(["zIndex", "opacity", "zooms", "visible"], e)
                  }
                  this.set("rasterLayer", d, !0)
              }
          }
      },
      Fla: function(a) {
          a || (a = {});
          if (a.hasOwnProperty("defaultLayer")) {
              a.layers = [a.defaultLayer];
              var b = a.defaultLayer;
              b.JO = !0;
              this.set("defaultLayer", b, !0)
          }
          a.layers && 0 !== a.layers.length ? this.set("defaultLayer", a.layers[0], !0) : (b = new z.o.ob({
              innerLayer: !0
          }),
          a.layers = [b],
          b.JO = !0,
          this.set("defaultLayer", b, !0));
          if (b = a.view)
              b.B.rotation && (a.rotation = b.B.rotation),
              b.B.center && (a.center = b.B.center),
              b.B.zoom && (a.zoom = Math.max(a.zooms[0], Math.min(a.zooms[1], b.B.zoom))),
              b.B.crs && (a.crs = b.B.crs);
          a.level && !a.zoom && (a.zoom = a.level);
          return a
      },
      setLimitBounds: function(a) {
          g.c.add(this, "setLimitBounds");
          a instanceof g.Ro && (a.C = !0,
          a = a.toBounds(),
          a.C = !1);
          a instanceof g.me || (a = null);
          this.set("limitBounds", a)
      },
      clearLimitBounds: function() {
          g.c.add(this, "clearLimitBounds");
          this.set("limitBounds", null)
      },
      getLimitBounds: function() {
          g.c.add(this, "getLimitBounds");
          return this.get("limitBounds", null, !0)
      },
      bH: function(a) {
          var b = this.get("layers");
          if (!(0 <= g.a.indexOf(b, a)) && (b.push(a),
          this.set("layers", b),
          a.TF)) {
              a = a.DQ();
              for (var b = -1, c = a.length; ++b < c; ) {
                  var d = a[b];
                  d instanceof z.o.Tb || !d.setMap || d.setMap(this)
              }
          }
      },
      LB: function(a) {
          var b = this.get("overlays");
          0 <= g.a.indexOf(b, a) || (a instanceof z.w.xn ? (this.get("overlays").push(a),
          this.Lx instanceof z.w.xn && (this.Lx.C = !0,
          this.Lx.close(),
          this.Lx.C = !1),
          this.Lx = a,
          this.set("contextmenu", a, !0)) : (a instanceof z.w.Ne && (this.Zl instanceof z.w.Ne && this.Yy(this.Zl),
          this.Zl = a),
          this.get("overlays").push(a)),
          this.q("overlays"))
      },
      bk: function(a) {
          var b = this.get("layers")
            , c = g.a.indexOf(b, a);
          if (-1 !== c) {
              if (a.TF)
                  for (c = b.length; -1 < --c; ) {
                      var d = b[c];
                      d.qA !== a && d !== a || b.splice(c, 1)
                  }
              else
                  a.qA && a.qA.uja(a),
                  b = g.a.fo(b, c);
              this.set("layers", b);
              if (a.TF)
                  for (a = a.DQ(),
                  b = -1,
                  c = a.length; ++b < c; )
                      d = a[b],
                      d instanceof z.o.Tb || !d.setMap || d.setMap()
          }
      },
      getZooms: function() {
          return this.get("zooms", null, !0)
      },
      setZooms: function(a) {
          return this.set("zooms", a, !0)
      },
      Yy: function(a) {
          var b = this.get("overlays");
          this.set("overlays", g.a.fo(b, g.a.indexOf(b, a)))
      },
      getTileCoordByLngLat: function(a, b, c) {
          b = b || 256;
          this.C = !0;
          c = c || Math.round(this.getZoom());
          this.C = !1;
          a = this.hc(a, c);
          c = new g.Gq(c,Math.floor(a.x / b),Math.floor(a.y / b));
          c.tC = a.x % b;
          c.uC = a.y % b;
          return c
      },
      setZoom: function(a, b) {
          g.c.add(this, "setZoom");
          a = this.yC(a);
          var c = this.get("zooms");
          a > c[1] && (a = c[1]);
          a < c[0] && (a = c[0]);
          this.get("zoomEnable") && (b || !this.loaded ? (this.set("zoom", a),
          this.q("zoomstart"),
          this.q("zoomchange"),
          this.q("zoomend")) : this.set("zoomSlow", a))
      },
      getZoom: function() {
          g.c.add(this, "getZoom");
          return this.yC(this.get("targetLevel") || this.get("zoom", null, !0))
      },
      getCenter: function() {
          g.c.add(this, "getCenter");
          return this.get("center", null, !0)
      },
      setCenter: function(a, b) {
          g.c.add(this, "setCenter");
          a = g.a.Ha(a);
          b || !this.loaded ? (this.q("movestart"),
          this.set("center", a),
          this.q("mapmove"),
          this.map ? this.map.q("moveend") : this.q("moveend")) : (this.C = !0,
          this.panTo(a),
          this.C = !1)
      },
      getCoordsBound: function() {
          return this.view.Ql()
      },
      getCoordsBoundByZoom: function(a) {
          return this.view.Coa(a)
      },
      setRotation: function() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
          g.c.add(this, "setRotation");
          !g.l.ue && this.get("rotateEnable") && this.set("rotation", a)
      },
      getRotation: function() {
          g.c.add(this, "getRotation");
          return this.get("rotation")
      },
      setPitch: function(a) {
          g.c.add(this, "setPitch");
          a = Math.min(this.get("maxPitch"), Math.max(a, 0));
          "3D" === this.view.type && this.get("pitchEnable") && this.set("pitch", a)
      },
      getPitch: function() {
          g.c.add(this, "getRotation");
          return "3D" === this.view.type ? this.get("pitch") : 0
      },
      getStatus: function() {
          g.c.add(this, "getStatus");
          for (var a = "isHotspot pitchEnable dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable".split(" "), b = {}, c = 0; c < a.length; c += 1)
              b[a[c]] = this.get(a[c], null, !0);
          return b
      },
      setStatus: function(a) {
          g.c.add(this, "setStatus");
          for (var b in a)
              a.hasOwnProperty(b) && -1 !== "isHotspot,pitchEnable,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom".indexOf(b) && this.set(b, a[b])
      },
      getResolution: function(a, b) {
          g.c.add(this, "getResolution");
          var c = (a = g.a.Ha(a)) ? a.P : this.get("center", null, !0).P;
          return this.aj.Jp(b || this.get("zoom")) * Math.cos(c * Math.PI / 180)
      },
      getScale: function(a) {
          g.c.add(this, "getScale");
          this.C = !0;
          a = this.getResolution() * (a || 96) / 0.0254;
          this.C = !1;
          return a
      },
      getDefaultCursor: function() {
          g.c.add(this, "getDefaultCursor");
          return this.get("defaultCursor", null, !0) || "url(" + g.A.yb + "/theme/v1.3/openhand.cur),default"
      },
      setDefaultCursor: function(a) {
          g.c.add(this, "setDefaultCursor");
          return this.set("defaultCursor", a, !0)
      },
      zoomIn: function(a) {
          g.c.add(this, "zoomIn");
          this.C = !0;
          this.setZoom(this.getZoom() + 1, a);
          this.C = !1
      },
      zoomOut: function(a) {
          g.c.add(this, "zoomOut");
          this.C = !0;
          this.setZoom(this.getZoom() - 1, a);
          this.C = !1
      },
      yC: function(a) {
          return this.view && "3D" === this.view.type ? g.a.nc(a, 4) : Math.round(a)
      },
      setZoomAndCenter: function(a, b, c) {
          g.c.add(this, "setZoomAndCenter");
          b = g.a.Ha(b);
          a = this.yC(a);
          var d = this.get("zooms");
          a > d[1] && (a = d[1]);
          a < d[0] && (a = d[0]);
          this.C = !0;
          this.loaded ? this.set("zoomAndCenter", [a, b, c]) : (this.setZoom(a, !0),
          this.setCenter(b, !0));
          this.C = !1
      },
      clearMap: function() {
          g.c.add(this, "clearMap");
          for (var a = this.get("overlays"), b = 0; b < a.length; b += 1)
              a[b].set("map", null, !0);
          this.set("overlays", []);
          if (this.map && this.map.xa)
              for (a = this.map.xa,
              b = a.length - 1; 0 <= b; b -= 1)
                  if (a[b].U instanceof z.o.SK) {
                      var c = a[b].U;
                      c.C = !0;
                      c.setMap(null);
                      c.C = !1
                  }
      },
      destroy: function() {
          g.c.add(this, "destroy");
          this.Yl && (this.Yl.setMap(),
          this.indoorMap = this.Yl = null);
          this.set("overlays", []);
          this.set("defaultLayer", null);
          this.set("layers", []);
          var a = this.get("controls");
          a.remove = [];
          for (var b in a.Wc)
              a.Wc.hasOwnProperty(b) && a.remove.push(a.Wc[b]);
          a.Wc = [];
          a.add = [];
          this.set("controls", a);
          this.set("destroy", !0);
          this.Ja = !1;
          this.il();
          this.B = this.K = null;
          this.Bc && this.Bc.il();
          this.Bc = null;
          this.view && this.view.il();
          this.view = null;
          this.hi();
          z.Kb.lt--
      },
      addControl: function(a) {
          g.c.add(this, "addControl");
          var b = g.a.ub(a)
            , c = this.get("controls") || {};
          c.Wc = c.Wc || {};
          c.Wc[b] || (c.Wc[b] = a);
          c.add = c.add || [];
          c.add.push(a);
          this.set("controls", c)
      },
      removeControl: function(a) {
          g.c.add(this, "removeControl");
          var b = g.a.ub(a)
            , c = this.get("controls") || {};
          c.Wc = c.Wc || {};
          c.Wc[b] && delete c.Wc[b];
          c.remove = c.remove || [];
          c.remove.push(a);
          this.set("controls", c)
      },
      clearControl: function() {
          g.c.add(this, "clearControl");
          var a = this.get("controls") || {};
          a.remove = a.remove || [];
          a.Wc = a.Wc || {};
          for (var b in a.Wc)
              a.Wc.hasOwnProperty(b) && (a.remove.push(a.Wc[b]),
              delete a.Wc[b]);
          this.set("controls", a)
      },
      plugin: function(a, b) {
          g.c.add(this, "setPitch");
          "string" === typeof a && (a = [a]);
          g.qb.Lg(a, b);
          return this
      },
      clearInfoWindow: function() {
          g.c.add(this, "clearInfoWindow");
          var a = this.get("overlays");
          a && 0 !== a.length && this.Zl && (this.Zl.C = !0,
          this.Zl.close(),
          this.Zl.C = !1)
      },
      remove: function(a) {
          g.c.add(this, "remove");
          a instanceof Array || (a = [a]);
          for (var b = 0; b < a.length; b += 1) {
              var c = a[b];
              c.C = !0;
              c.getMap && c.getMap() === this && (c.close ? c.close() : c.setMap && c.setMap(null));
              c.C = !1
          }
      },
      add: function(a) {
          g.c.add(this, "add");
          a instanceof Array || (a = [a]);
          for (var b = 0; b < a.length; b += 1) {
              var c = a[b];
              c.C = !0;
              if (c.getMap && c.getMap() !== this)
                  if (c.open)
                      continue;
                  else
                      c.setMap && c.setMap(this);
              c.C = !1
          }
      },
      getAllOverlays: function(a, b) {
          g.c.add(this, "getAllOverlays");
          var c = this.get("overlays");
          if (a) {
              for (var d = "amap." + a.toLowerCase(), e = [], f = 0; f < c.length; f += 1)
                  d !== c[f].CLASS_NAME.toLowerCase() || !b && (c[f].za || c[f].isOfficial) || e.push(c[f]);
              return e
          }
          if (!b) {
              e = [];
              for (f = 0; f < c.length; f += 1)
                  c[f].za || c[f].isOfficial || e.push(c[f]);
              c = e
          }
          d = this.get("layers");
          e = [];
          if (d)
              for (var f = 0, h = d.length; f < h; f += 1)
                  d[f]instanceof z.o.SK && e.push(d[f]),
                  d[f].hb && (e = e.concat(d[f].hb));
          return c.concat(e)
      },
      triggerResize: function() {
          this.map && this.map.ZN()
      },
      refreshSize: function() {
          this.uF = this.Koa()
      },
      Koa: function() {
          return g.j.J2(this.K)
      },
      getSize: function() {
          g.c.add(this, "getSize");
          (!this.uF || 10 > this.uF.width * this.uF.height) && this.refreshSize();
          return this.uF
      },
      getContainer: function() {
          g.c.add(this, "getContainer");
          return this.K
      },
      panTo: function(a) {
          g.c.add(this, "panTo");
          a = g.a.Ha(a);
          this.loaded ? this.set("panTo", a) : (this.C = !0,
          this.setCenter(a),
          this.C = !1)
      },
      panBy: function(a, b, c) {
          g.c.add(this, "panBy");
          this.C = !0;
          var d = this.get("rotation") * Math.PI / 180
            , e = a * Math.cos(d) + Math.sin(d) * b;
          a = -Math.sin(d) * a + Math.cos(d) * b;
          b = this.loaded && this.map && this.map.Ad ? this.map.Ad.f8 : this.get("centerCoords");
          d = Math.pow(2, 20 - this.getZoom());
          e = b.add(new g.H(-e * d,-a * d));
          e = this.Qd(e);
          !this.loaded || c ? this.setCenter(e, c) : this.set("panTo", e);
          this.C = !1
      },
      setFitView: function(a, b, c, d) {
          g.c.add(this, "setFitView");
          this.C = !0;
          var e = this.get("size")
            , f = e.height;
          if (!e.width || !f)
              return !0;
          if (a = this.c3(a)) {
              if (c = this.kI(a, 0, new g.H(40,40), c, d))
                  b = b || !this.getBounds().contains(a.ki()) || g.l.Z && 1 < Math.abs(c[0] + this.get("zoom", null, !0)),
                  this.setZoomAndCenter(c[0], c[1], b);
              this.C = !1;
              return a
          }
      },
      c3: function(a) {
          if (a)
              if (a instanceof z.w.sh)
                  a = [a];
              else {
                  if (!(a instanceof Array))
                      return null
              }
          else
              this.C = !0,
              a = this.getAllOverlays(),
              this.C = !1;
          if (a) {
              for (var b, c = 0; c < a.length; c += 1) {
                  var d = a[c];
                  if (d.get("visible") && !(d instanceof z.w.Ne || d instanceof z.w.xn)) {
                      d.C = !0;
                      var e = d.getBounds();
                      d.C = !1;
                      e && (b = b ? b.Dxa(e) : e.jb())
                  }
              }
              return b
          }
      },
      getBounds: function(a) {
          g.c.add(this, "getBounds");
          var b = this.view.pd();
          return a && b.toBounds ? (b.C = !0,
          a = b.toBounds(),
          b.C = !1,
          a) : b
      },
      setBounds: function(a, b, c, d, e, f) {
          g.c.add(this, "setBounds");
          c = this.kI(a, b, c, e, f);
          d = d || g.l.Z && 1 < Math.abs(c[0] + b - this.get("zoom", null, !0));
          this.C = !0;
          this.setZoomAndCenter(c[0], c[1], d);
          this.C = !1;
          return a
      },
      R2: function(a, b, c, d, e) {
          a = this.c3(a);
          return this.kI(a, b, c, d, e)
      },
      getCoordsBoundByZoomIn3D: function(a) {
          this.hH || (this.hH = new g.uL);
          this.C = !0;
          var b = this.getRotation()
            , c = this.getPitch()
            , d = this.getSize(!0).jb();
          this.C = !1;
          a = {
              size: d,
              zoom: a,
              rotation: b,
              pitch: c,
              centerCoords: this.get("centerCoords")
          };
          this.hH.We(a, !0);
          this.hH.zq();
          return this.hH.Ql()
      },
      kI: function(a, b, c, d, e) {
          b = b ? Number(b) : 0;
          this.C = !0;
          var f = this.getRotation()
            , h = this.getPitch()
            , k = this.getSize(!0).jb()
            , l = this.view.type;
          this.C = !1;
          var m = a.vQ(this);
          a = a.yQ(this);
          this.OB || (this.OB = "3D" === l ? new g.uL : new g.bF);
          this.OB.We({
              size: k,
              zoom: 3,
              rotation: f,
              pitch: h,
              centerCoords: m
          }, !0);
          var n = h = 0;
          d ? (n = d[0],
          c = d[1],
          h = d[2],
          d = d[3],
          k.width -= h + d,
          k.height -= n + c,
          h = (h - d) / 2,
          n = (n - c) / 2) : c && (k.width -= 2 * c.x,
          k.height -= 2 * c.y);
          e = e || (g.l.Z ? 17 : 18);
          c = this.get("zooms");
          d = c[0];
          var p = Infinity
            , q = Infinity;
          do {
              this.OB.We({
                  zoom: d
              }, !0);
              "3D" === l && this.OB.zq();
              for (var q = p = Infinity, r = -Infinity, s = -Infinity, u = 0; u < a.length; u += 1)
                  var v = this.OB.Ae(a[u])
                    , p = Math.min(p, v.x)
                    , r = Math.max(r, v.x)
                    , q = Math.min(q, v.y)
                    , s = Math.max(s, v.y);
              p = r - p;
              q = s - q;
              if (p > k.width || q > k.height) {
                  d -= 1;
                  break
              }
              d += 1
          } while (d <= c[1]);d = Math.min(c[1], e, Math.max(c[0], d + b));
          d = Math.floor(d);
          b = Math.pow(2, 20 - d);
          e = f * Math.PI / 180;
          f = h * Math.cos(e) + Math.sin(e) * n;
          e = -Math.sin(e) * h + Math.cos(e) * n;
          m = m.$a(new g.H(f * b,e * b));
          m = this.Mh(m, 20);
          return [d, m]
      },
      setLayers: function(a) {
          g.c.add(this, "setLayers");
          for (var b = 0; b < a.length; b += 1)
              a[b].set("map", this, !0);
          this.set("layers", a)
      },
      getLayers: function() {
          g.c.add(this, "getLayers");
          var a = this.get("layers", null, !0)
            , a = a.slice();
          if (this.C) {
              for (var b = [], c = -1, d = a.length; ++c < d; ) {
                  var e = a[c];
                  if (e.TF)
                      for (var e = e.DQ(), f = -1, h = e.length; ++f < h; ) {
                          var k = e[f];
                          k instanceof z.o.Tb && -1 === g.a.indexOf(a, k) && b.push(k)
                      }
              }
              a = a.concat(b)
          } else
              for (b = a.length; -1 < --b; )
                  a[b].qA && a.splice(b, 1);
          return a
      },
      getDefaultLayer: function() {
          g.c.add(this, "getDefaultLayer");
          return this.get("defaultLayer", null, !0)
      },
      setDefaultLayer: function(a) {
          g.c.add(this, "setDefaultLayer");
          this.C = !0;
          a.JO = !0;
          var b = this.get("defaultLayer")
            , c = this.get("layers");
          if (b) {
              if (a === b)
                  return;
              b.JO = !1;
              c = g.a.fo(c, g.a.indexOf(c, b))
          }
          this.set("defaultLayer", a, !0);
          a.C = !0;
          a.getMap == this && c.push(a);
          a.C = !1;
          this.setLayers(c);
          this.C = !1
      },
      pixelToLngLat: function(a, b) {
          g.c.add(this, "pixelToLngLat");
          return this.Mh(a, b)
      },
      lnglatToPixel: function(a, b) {
          g.c.add(this, "lnglatToPixel");
          return this.hc(a, b)
      },
      drawPolyline: function(a) {
          g.c.add(this, "drawPolyline");
          this.set("draw", "polyline");
          this.set("drawStyle", a || {
              strokeColor: "#006600",
              kb: 0.9
          })
      },
      render: function(a) {
          g.c.add(this, "render");
          this.map && this.map.set("display", a ? 1 : 0)
      },
      setMask: function(a) {
          g.c.add(this, "setMask");
          this.set("mask", a);
          this.map && (this.map.cJ = !0,
          this.map.set("display"))
      },
      drawPolygon: function(a) {
          g.c.add(this, "drawPolygon");
          this.set("draw", "polygon");
          this.set("drawStyle", a || {
              strokeColor: "#006600",
              kb: 0.9,
              fillColor: "#FFAA00",
              $d: 0.9
          })
      },
      drawCircle: function(a) {
          g.c.add(this, "drawCircle");
          this.set("draw", "circle");
          this.set("drawStyle", a || {
              strokeColor: "#006600",
              kb: 0.9,
              fillColor: "#006600",
              $d: 0.9
          })
      },
      tI: function() {
          return this.view.tI()
      },
      getCameraState: function() {
          g.c.add(this, "getCameraState");
          if (this.view && "3D" == this.view.type)
              return this.view.I2()
      },
      endDraw: function() {
          this.set("draw", null)
      },
      isGoogleTileVisible: function() {
          return this.map.isForeignMapVisible()
      },
      isForeignMapVisible: function() {
          if (this.get("gridForeignMap") || this.get("vectorForeignMap"))
              return this.map && this.map.Xea()
      },
      Ae: function(a, b, c) {
          g.c.add(this, "p20ToContainer");
          return this.view.Ae(a, b, c)
      },
      lg: function(a, b, c) {
          g.c.add(this, "containerToP20");
          return this.view.lg(a, b, c)
      },
      getObject3DByContainerPos: function(a, b, c) {
          g.c.add(this, "getObject3DByContainerPos");
          if ("2D" === this.view.type || !this.map || !this.map.J)
              return null;
          this.C = !0;
          this.view.lg(a);
          var d = this.view.M2(a)
            , e = this.map.J.SS
            , f = this.view.Zc
            , h = this.get("zoom", null, !0)
            , h = Math.pow(2, 20 - h);
          b = b || this.getLayers();
          this.C = !1;
          for (var k = [], l = 0; l < b.length; l += 1) {
              var m = b[l];
              m instanceof z.o.Mq && (m = m.Lo(e, d, f, h, a)) && k.push(m)
          }
          return c ? k : k.length ? (k.sort(function(a, b) {
              return a.Od - b.Od
          }),
          {
              index: k[0].index,
              point: k[0].zD,
              distance: k[0].Od,
              object: k[0].object
          }) : null
      }
  });
  z.Kb.Nb({
      VI: "lngLatToGeodeticCoord",
      zoa: "geodeticCoordToLngLat",
      kI: "getFitZoomAndCenterByBounds",
      R2: "getFitZoomAndCenterByOverlays",
      ds: "lnglatTocontainer",
      lnglatTocontainer: "lngLatToContainer",
      wp: "containTolnglat",
      containTolnglat: "containerToLngLat",
      Ab: "lngLatToP20",
      Qd: "p20ToLngLat",
      Ae: "p20ToContainer",
      lg: "containerToP20",
      hc: "project",
      Mh: "unproject"
  });
  z.Kb.zb({
      isHotspotChanged: function() {
          if ("undefined" !== typeof this.JC && (this.ema(),
          this.get("isHotspot"))) {
              var a = this.get("layers", null, !0);
              a && a.length && !this.JC && this.iJ && this.cta()
          }
      },
      cta: function() {
          if (this.Sj)
              this.N3();
          else {
              var a = this;
              this.C = !0;
              this.plugin("AMap.HotSpot", function() {
                  if (!a.JC) {
                      if (!a.Sj) {
                          var b = new g.Sh;
                          new z.w.Ne({
                              innerOverlay: !0
                          });
                          a.Sj = b
                      }
                      a.N3()
                  }
              });
              this.C = !1
          }
      },
      ema: function() {
          this.Sj && this.bqa()
      },
      P5: function(a) {
          a.type = "hotspotover";
          a.isIndoorPOI = !1;
          this.q("hotspotover", a)
      },
      N5: function(a) {
          a.type = "hotspotclick";
          a.isIndoorPOI = !1;
          this.q("hotspotclick", a)
      },
      O5: function(a) {
          a.type = "hotspotout";
          a.isIndoorPOI = !1;
          this.q("hotspotout", a)
      },
      N3: function() {
          var a = this.Sj;
          this.Sj.C = !0;
          this.Sj.setMap(this);
          this.Sj.C = !1;
          a.g("mouseover", this.P5, this);
          a.g("click", this.N5, this);
          a.g("mouseout", this.O5, this)
      },
      bqa: function() {
          var a = this.Sj;
          a.G("mouseover", this.P5, this);
          a.G("click", this.N5, this);
          a.G("mouseout", this.O5, this);
          this.Sj.C = !0;
          this.Sj.setMap(null);
          this.Sj.C = !1;
          this.Sj = null
      }
  });
  z.event = {
      X: function(a, b, c, d) {
          g.F.g(a, b, c, d);
          return new g.FE(0,a,b,c,d)
      },
      qka: function() {},
      addListener: function(a, b, c, d) {
          g.a.Eh(a.addListener) ? a.addListener(b, c, d) : (a.ee || (a.ee = g.sa.ee),
          g.sa.g.call(a, b, c, d));
          return new g.FE(1,a,b,c,d)
      },
      yx: function(a, b, c, d) {
          g.a.Eh(a.yx) ? a.yx(b, c, d) : (a.ee || (a.ee = g.sa.ee),
          g.sa.g.call(a, b, c, d, !0));
          return new g.FE(1,a,b,c,d)
      },
      uH: function(a) {
          g.a.Eh(a.uH) ? a.uH() : g.sa.hi.call(a)
      },
      eu: function(a, b) {
          g.a.Eh(a.eu) ? a.eu(b) : g.sa.hi.call(a, b)
      },
      removeListener: function(a) {
          a instanceof g.FE && (g.a.Eh(a.ni.removeListener) ? a.ni.removeListener(a) : 0 === a.type ? g.F.G(a.ni, a.$P, a.hR, a.Qe) : 1 === a.type && (a.ni.ee || (a.ni.ee = g.sa.ee),
          g.sa.G.call(a.ni, a.$P, a.hR, a.Qe)))
      },
      O: function(a, b) {
          var c = Array.prototype.slice.call(arguments, 1);
          g.a.Eh(a.O) ? a.O.apply(a, c) : (a.ee || (a.ee = g.sa.ee),
          g.sa.q.apply(a, c))
      }
  };
  g.FE = g.aa.extend({
      r: function(a, b, c, d, e) {
          this.type = a;
          this.ni = b;
          this.$P = c;
          this.hR = d;
          this.Qe = e
      }
  });
  var nc = {
      X: "addDomListener",
      qka: "addDomListenerOnce",
      addListener: "addListener",
      yx: "addListenerOnce",
      uH: "clearInstanceListeners",
      eu: "clearListeners",
      removeListener: "removeListener",
      O: "trigger"
  }, oc;
  for (oc in nc)
      nc.hasOwnProperty(oc) && (z.event[nc[oc]] = z.event[oc]);
  g.event = z.event;
  z.o.Tb = g.aa.extend({
      ja: [g.sa, g.Oe],
      r: function(a) {
          (new Date).getTime();
          this.CLASS_NAME = this.CLASS_NAME || "AMap.Layer";
          g.a.Db(this, a);
          this.B.map && (a = this.B.map,
          delete this.B.map,
          this.B.map = a);
          this.We(this.B)
      },
      getContainer: function() {
          g.c.add(this, "getContainer");
          if (this.o && this.o.N)
              return this.o.N.hj()
      },
      getZooms: function() {
          return this.get("zooms", null, !0)
      },
      setOpacity: function(a) {
          g.c.add(this, "setOpacity");
          a !== this.get("opacity", null, !0) && this.set("opacity", a)
      },
      getOpacity: function() {
          return this.get("opacity", null, !0)
      },
      show: function() {
          g.c.add(this, "show");
          this.set("visible", !0);
          if (this.Xp) {
              var a = this.get("map", null, !0);
              a && a.set("layers", a.get("layers", null, !0))
          }
      },
      hide: function() {
          g.c.add(this, "hide");
          this.set("visible", !1);
          if (this.Xp) {
              var a = this.get("map", null, !0);
              a && a.set("layers", a.get("layers", null, !0))
          }
      },
      setMap: function(a) {
          g.c.add(this, "setMap");
          var b = this.get("map");
          if (a)
              b && a !== b && b.bk(this),
              this.set("map", a);
          else if (b && (b.bk(this),
          this.set("map", null, !0),
          this.ei = !1,
          this.Pg && this.Pg(),
          this.onRemove))
              this.onRemove()
      },
      getMap: function() {
          g.c.add(this, "getMap");
          return this.get("map", null, !0)
      },
      mapChanged: function() {
          var a = this.get("map");
          a && a.bH(this)
      },
      setzIndex: function(a) {
          g.c.add(this, "setzIndex");
          this.set("zIndex", a)
      },
      getzIndex: function() {
          return this.get("zIndex", null, !0)
      }
  });
  z.o.ob = z.o.Tb.extend({
      B: {
          tileSize: 256,
          visible: !0,
          opacity: 1,
          zIndex: 0,
          noLimg: 1,
          zooms: [3, 20],
          getTileUrl: g.l.Z ? g.A.fE : g.A.bD,
          errorUrl: g.a.Pna,
          detectRetina: !0,
          className: "amap-layer",
          mapNumber: "",
          merge: !1,
          sort: !1,
          cacheSize: g.l.size
      },
      r: function(a) {
          this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer";
          g.c.ya(this, a);
          (a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl);
          this.Mla(a);
          var b = a.zooms;
          b && b[1] >= this.Wk[0] ? (b[0] < this.Wk[0] && (b[0] = this.Wk[0]),
          b[1] > this.Wk[1] && (b[1] = this.Wk[1])) : a.zooms = [this.Wk[0], this.Wk[1]];
          arguments.callee.ka.call(this, a);
          a.ak && (this.ak = !0);
          this.UF = this.Su()
      },
      setTextIndex: function(a) {
          g.c.add(this, "setTextIndex");
          this.set("textIndex", a)
      },
      Su: function() {
          if (this.get("createTile"))
              return !1;
          var a = this.get("getTileUrl");
          return a && a !== g.A.bD && a !== g.A.fE ? !1 : !0
      },
      q1: function() {
          if (!this.Su())
              return !1;
          var a = this.get("map");
          return a && a.oi && "zh_cn" === a.get("lang") && !this.noVector ? !0 : !1
      },
      i3: function(a) {
          var b = g.A.$I;
          g.l.ia && this.get("detectRetina") && (b = g.A.$I.replace("scl=1", "scl=2"));
          a && (b = b.replace("ltype=3", "ltype=11"));
          return b
      },
      Mf: function(a) {
          var b = this.q1()
            , c = this.get("map");
          this.Su() && this.set("mapNumber", "GS(2018)1709");
          if (this.ak)
              return new g.o.ob(this,a,this.Rq(this.i3(!0)),this.B.maxDataZoom,!0);
          if (b)
              if (this.Xp = !0,
              g.o.Uh) {
                  if ("dv" === c.get("baseRender") && !this.get("watermark")) {
                      var b = c.get("showBuildingBlock")
                        , d = new g.o.ob(this,a,this.Rq(this.i3(!b)),void 0,!0);
                      b && (d.bl = new g.o.md(new z.o.ob({
                          zooms: [16, 20],
                          innerLayer: !0
                      }),a,["building"]),
                      d.bl.type = "\u697c\u5757\u56fe\u5c42",
                      d.bl.Pe(["visible", "opacity", "zIndex"], d, !0),
                      d.bl.UB(c.get("mapStyle") || "normal"));
                      d.type = "\u6805\u683c\u5e95\u56fe";
                      return d
                  }
                  if ("v" <= c.get("baseRender") || this.get("watermark"))
                      return "3D" == a.D.view.type ? (c = new g.o.md(this,a,["region", "road"]),
                      c.type = "\u77e2\u91cf\u5e95\u56fe",
                      b = new z.o.ob({
                          zooms: [17, 20],
                          zIndex: 50,
                          innerLayer: !0
                      }),
                      c.bl = new g.o.md(b,a,["building"]),
                      c.bl.Ve = 17,
                      c.bl.type = "\u697c\u5757\u56fe\u5c42",
                      c.bl.ry = 1,
                      c.bl.Pe(["visible", "merge", "sort", "opacity"], c, !0),
                      b.W("rejectMapMask", this, !0)) : (c = new g.o.md(this,a,["region", "building", "road"]),
                      c.type = "\u77e2\u91cf\u5e95\u56fe"),
                      a.Yka = c
              } else
                  return ["vectorlayer", "overlay"];
          else
              return this.Xp = !1,
              new g.o.ob(this,a,null,this.B.maxDataZoom)
      },
      getTileUrlChanged: function() {
          var a = this.get("getTileUrl");
          if (a === g.A.bD || a === g.A.fE || a === g.A.VJ)
              this.iJ = !0;
          "string" === typeof a && (a = this.Rq(a));
          this.set("tileFun", a)
      },
      Mla: function(a) {
          this.Wk || (this.Wk = [this.B.zooms[0], this.B.zooms[1]]);
          var b;
          a.hasOwnProperty("detectRetina") && !1 === a.detectRetina && (b = !0);
          g.l.Z && g.l.ia && this.B.detectRetina && !b && (this.Wk[1] -= 1)
      },
      getTiles: function() {
          g.c.add(this, "getTiles");
          var a = this.get("tiles", null, !0);
          if (a && a.length)
              a = a[0];
          else
              return [];
          for (var b = [], c, d = 0; d < a.length; d += 1)
              a[d].key && (c = a[d].key.split("/"),
              b.push("" + c[1] + "," + c[2]));
          return b
      },
      reload: function() {
          g.c.add(this, "reload");
          this.set("reload", 1)
      },
      ys: function() {
          this.C = !0;
          var a = this.get("map", null, !0);
          this.setMap(null);
          this.ei = !1;
          this.setMap(a);
          this.C = !1
      },
      setTileUrl: function(a) {
          g.c.add(this, "setTileUrl");
          this.q1() ? (this.set("getTileUrl", a),
          this.ys()) : this.set("getTileUrl", a)
      },
      Rq: function(a) {
          var b = this, c, d, e;
          return function(f, h, k) {
              f = (f + Math.pow(2, k)) % Math.pow(2, k);
              if ("number" !== typeof (f + h + k))
                  return null;
              var l = b.get("map")
                , m = "zh_cn";
              l && (m = l.get("lang") || "zh_cn");
              k = a.replace("[x]", f).replace("[y]", h).replace("[z]", k).replace("[lang]", m);
              if (!c) {
                  if (d = a.match(/\{.*\}/))
                      e = d.toString().replace("{", "").replace("}", ""),
                      e = e.split(",");
                  c = !0
              }
              e && e.length && (k = k.replace(d, e[Math.abs(f + h) % e.length]));
              return k
          }
      },
      getTileUrl: function(a, b, c) {
          g.c.add(this, "getTileUrl");
          return this.get("tileFun", null, !0)(a, b, c)
      },
      getZooms: function(a) {
          a || g.c.add(this, "getZooms");
          return this.get("zooms", null, !0)
      }
  });
  z.o.ob.CV = z.o.ob.extend({
      B: {
          getTileUrl: g.A.zT,
          zooms: [3, 20],
          zIndex: 2,
          maxDataZoom: 18,
          detectRetina: !1,
          mapNumber: "GS(2018)984",
          className: "amap-layer amap-satellite",
          cacheSize: g.l.size
      },
      r: function(a) {
          this.CLASS_NAME = "AMap.TileLayer.Satellite";
          g.c.ya(this, a);
          this.Wk = [3, 20];
          arguments.callee.ka.apply(this, arguments)
      }
  });
  z.o.ob.AV = z.o.ob.extend({
      B: {
          getTileUrl: g.A.VJ,
          zooms: [3, 20],
          zIndex: 3,
          type: "overlayer",
          maxDataZoom: 18,
          className: "amap-layer amap-roadnet",
          cacheSize: g.l.size
      },
      r: function(a) {
          this.CLASS_NAME = "AMap.TileLayer.RoadNet";
          g.c.ya(this, a);
          this.Wk = [3, 20];
          arguments.callee.ka.apply(this, arguments)
      },
      Mf: function(a) {
          if (this.get("map").oi) {
              this.Xp = !0;
              var b = g.A.WJ;
              g.l.ia && this.get("detectRetina") && (b = g.A.WJ.replace("scl=1", "scl=2"));
              a = new g.o.ob(this,a,this.Rq(b),this.B.maxDataZoom)
          } else
              this.Xp = !1,
              a = new g.o.ob(this,a);
          return a
      }
  });
  z.o.ob.KV = z.o.ob.extend({
      B: {
          getTileUrl: function(a, b, c) {
              return g.A.Cc + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (17 - c) + "&x=" + a + "&y=" + b
          },
          zooms: [6, 20],
          zIndex: 4,
          type: "overlayer",
          autoRefresh: !1,
          interval: 180,
          maxDataZoom: 17,
          alwaysRender: !g.l.d2,
          className: "amap-layer amap-traffic",
          cacheSize: g.l.size
      },
      r: function(a) {
          this.CLASS_NAME = "AMap.TileLayer.Traffic";
          g.c.ya(this, a);
          this.Wk = [6, 20];
          arguments.callee.ka.apply(this, arguments);
          this.C = !0;
          this.startRefresh();
          this.C = !1
      },
      stopRefresh: function() {
          g.c.add(this, "stopRefresh");
          this.JJ && (clearInterval(this.JJ),
          this.JJ = null)
      },
      startRefresh: function() {
          g.c.add(this, "startRefresh");
          if (this.get("autoRefresh") && !this.JJ) {
              var a = this;
              this.JJ = setInterval(function() {
                  a.C = !0;
                  a.reload();
                  a.C = !1;
                  a.q("refresh")
              }, Math.max(1E3 * (this.get("interval") || 180), 1E4))
          }
      },
      reload: function() {
          g.c.add(this, "reload");
          g.a.Qc(function() {
              this.set("reload")
          }, this)
      },
      Pg: function() {
          this.C = !0;
          this.stopRefresh();
          this.get("map") && this.get("map").G("zoomstart", this.reload, this);
          this.C = !1
      },
      Mf: function(a) {
          var b = this.get("map")
            , b = a.D;
          b.g("zoomstart", this.reload, this);
          return "d" !== b.get("baseRender") ? g.o.yw ? a = new g.o.yw(this,a) : ["vt"] : a = new g.o.ob(this,a,null,this.B.maxDataZoom)
      }
  });
  z.o.ob.Rz = z.o.ob.extend({
      B: {
          zooms: [3, 20],
          zIndex: 12,
          detectRetina: !1,
          className: "amap-layer amap-flexible",
          cacheSize: g.l.size
      },
      r: function(a) {
          this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer.Flexible";
          g.c.ya(this, a);
          this.Sqa = !0;
          arguments.callee.ka.call(this, a)
      },
      setCreateTile: function(a) {
          g.c.add(this, "setCreateTile");
          "function" === typeof a && a !== this.get("createTile") && this.set("createTile", a)
      },
      getCreateTile: function() {
          return this.get("createTile", null, !0)
      }
  });
  z.o.ob.haa = z.o.ob.Rz.extend({
      B: {
          zooms: [3, 20],
          zIndex: 12,
          tileSize: 512,
          detectRetina: !1,
          className: "amap-layer amap-wms",
          cacheSize: g.l.size,
          url: "",
          params: ""
      },
      r: function(a) {
          this.CLASS_NAME = "AMap.TileLayer.WMS";
          g.c.ya(this, a);
          arguments.callee.ka.call(this, a);
          this.Tv();
          var b = this
            , c = this.get("tileSize");
          this.set("createTile", function(a, e, f, h, k) {
              var l = Math.pow(2, 20 - f) * c;
              f = new g.H(l * a,l * (e + 1));
              a = new g.H(l * (a + 1),l * e);
              e = g.ZI.X5(f);
              a = g.ZI.X5(a);
              var m = document.createElement("img");
              "3D" === b.Bi && (m.crossOrigin = "anonymous");
              g.F.g(m, "load", function() {
                  h(m)
              });
              g.F.g(m, "error", function() {
                  k(m)
              });
              m.src = this.url + "&BBOX=" + e + "," + a
          })
      },
      Tv: function() {
          var a = this.get("url", null, !0)
            , b = this.get("params", null, !0)
            , c = this.get("tileSize");
          b.WIDTH = c;
          b.HEIGHT = c;
          b.CRS = b.CRS || "EPSG:3857";
          b.REQUEST = "GetMap";
          b.SERVICE = "WMS";
          b.FORMAT = b.FORMAT || "image/png";
          b.TRANSPARENT = void 0 === b.TRANSPARENT ? "true" : b.TRANSPARENT;
          delete b.BBOX;
          this.url = a + "?" + g.a.join(b, "&");
          this.C = !0;
          this.reload();
          this.C = !1
      },
      setUrl: function(a) {
          g.c.add(this, "setUrl");
          this.set("url", a, !0);
          this.Tv()
      },
      getUrl: function() {
          g.c.add(this, "getUrl");
          return this.get("url", null, !0)
      },
      setParams: function(a) {
          g.c.add(this, "setParams");
          g.extend(this.get("params", null, !0), a || {});
          this.Tv()
      },
      getParams: function() {
          g.c.add(this, "getParams");
          return this.get("params", null, !0)
      }
  });
  z.o.ob.iaa = z.o.ob.Rz.extend({
      B: {
          zooms: [3, 20],
          tileSize: 256,
          zIndex: 12,
          detectRetina: !1,
          className: "amap-layer amap-wmts",
          cacheSize: g.l.size
      },
      r: function(a) {
          this.CLASS_NAME = "AMap.TileLayer.WMTS";
          g.c.ya(this, a);
          arguments.callee.ka.call(this, a);
          this.Tv();
          var b = this;
          this.get("tileSize");
          this.set("createTile", function(a, d, e, f, h) {
              var k = document.createElement("img");
              "3D" === b.Bi && (k.crossOrigin = "anonymous");
              g.F.g(k, "load", function() {
                  f(k)
              });
              g.F.g(k, "error", function() {
                  h(k)
              });
              k.src = this.url + "&TileMatrix=" + e + "&TileRow=" + d + "&TileCol=" + a
          })
      },
      Tv: function() {
          var a = this.get("url", null, !0)
            , b = this.get("params", null, !0);
          b.TileMatrixSet = b.TileMatrixSet || "EPSG:3857";
          b.Request = "GetTile";
          b.Service = "WMTS";
          b.Format = b.Format || "image/png";
          this.url = a + "?" + g.a.join(b, "&");
          this.C = !0;
          this.reload();
          this.C = !1
      },
      setUrl: function(a) {
          g.c.add(this, "setUrl");
          this.set("url", a, !0);
          this.Tv()
      },
      getUrl: function() {
          g.c.add(this, "getUrl");
          return this.get("url", null, !0)
      },
      setParams: function(a) {
          g.c.add(this, "setParams");
          g.extend(this.get("params", null, !0), a || {});
          this.Tv()
      },
      getParams: function() {
          g.c.add(this, "getParams");
          return this.get("params", null, !0)
      }
  });
  z.o.ob.IE = z.o.ob.Rz.extend({
      B: {
          detectRetina: !0,
          zooms: [10, 18],
          zIndex: 2
      },
      r: function(a) {
          arguments.callee.ka.apply(this, arguments);
          var b = this;
          this.set("createTile", function(a, d, e, f, h) {
              var k = b.Ge.map.map;
              k.th.pz(a, d, e, function(l) {
                  if (l)
                      h();
                  else {
                      var m = document.createElement("img");
                      "3D" === b.Bi && (m.crossOrigin = "anonymous");
                      g.F.g(m, "load", function() {
                          f(m)
                      });
                      g.F.g(m, "error", function() {
                          h(m)
                      });
                      m.src = function(a, c, d) {
                          var e = "zh_cn";
                          b && b.get && k && (e = k.get("lang") || "zh_cn");
                          return g.A.Cc + "://grid.amap.com/grid/" + d + "/" + a + "/" + c + "?src=jsapi&key=" + g.A.key + "&lang=" + e + "&dpiType=" + (g.l.Mc ? "wprd" : "webrd")
                      }(a, d, e)
                  }
              })
          })
      }
  });
  z.o.$c = z.o.Tb.extend({
      B: {
          visible: !0,
          zooms: [3, 25],
          type: "overlay",
          zIndex: 5,
          alwaysRender: !0
      },
      r: function(a) {
          this.h4 = !0;
          arguments.callee.ka.apply(this, arguments)
      },
      Mf: function(a) {
          return new g.o.$c(this,a)
      }
  });
  z.o.B9 = z.o.Tb.extend({
      B: {
          zooms: [14, 20],
          zIndex: 8,
          visible: !0,
          merge: !0,
          sort: !1
      },
      r: function(a) {
          this.CLASS_NAME = "AMap.Buildings";
          g.c.ya(this, a);
          a = a || {};
          a.zooms && (a.zooms[0] = Math.max(14, a.zooms[0]));
          arguments.callee.ka.apply(this, arguments)
      },
      Su: function() {
          return !1
      },
      Mf: function(a) {
          if (g.l.du)
              return a = new g.o.eaa(this,a),
              a.ry = this.get("heightFactor") || 1,
              a
      },
      setStyle: function(a) {
          this.set("customStyle", a);
          g.c.add(this, "setStyle")
      }
  });
  z.o.LK = z.o.Tb.extend({
      B: {
          visible: !0,
          zooms: [3, g.l.Z ? 20 : 18],
          opacity: 1,
          type: "overlay",
          zIndex: 6
      },
      r: function(a) {
          arguments.callee.ka.apply(this, arguments)
      },
      Mf: function(a) {
          return g.o.Uz ? new g.o.Uz(this,a) : ["imagelayer"]
      },
      getMap: function() {
          g.c.add(this, "getMap");
          return this.Ge.map
      },
      show: function() {
          g.c.add(this, "show");
          this.set("visible", !0);
          this.q("options")
      },
      getOpacity: function() {
          g.c.add(this, "getOpacity");
          return this.get("opacity", null, !0)
      },
      setOpacity: function(a) {
          g.c.add(this, "setOpacity");
          this.set("opacity", a)
      },
      getBounds: function() {
          g.c.add(this, "getBounds");
          return this.get("bounds", null, !0).jb()
      },
      setBounds: function(a) {
          g.c.add(this, "setBounds");
          this.q("bounds", a);
          this.C = !0;
          this.setOptions({
              bounds: a
          });
          this.C = !1
      },
      hide: function() {
          g.c.add(this, "hide");
          this.set("visible", !1);
          this.q("options")
      },
      setOptions: function(a) {
          g.c.add(this, "setOptions");
          this.We(a);
          this.q("options")
      },
      getOptions: function() {
          g.c.add(this, "getOptions");
          var a = {}, b;
          for (b in this.B)
              this.B.hasOwnProperty(b) && (a[b] = this.get(b));
          return a
      },
      getElement: function() {
          return this.o.N ? this.o.N.bc : this.o.$f ? this.o.$f.bc : null
      }
  });
  z.o.Uz = z.o.LK.extend({
      r: function(a) {
          this.CLASS_NAME = "AMap.ImageLayer";
          g.c.ya(this, a);
          a && a.url && (a.__source__ = a.url);
          arguments.callee.ka.apply(this, arguments)
      },
      getImageUrl: function() {
          g.c.add(this, "getImageUrl");
          return this.get("__source__")
      },
      setImageUrl: function(a) {
          g.c.add(this, "setImageUrl");
          return this.set("__source__", a)
      }
  });
  z.o.gaa = z.o.LK.extend({
      r: function(a) {
          this.CLASS_NAME = "AMap.VideoLayer";
          g.c.ya(this, a);
          a && a.url && (a.__source__ = a.url);
          arguments.callee.ka.apply(this, arguments)
      },
      getVideoUrl: function() {
          g.c.add(this, "getVideoUrl");
          return this.get("__source__")
      },
      setVideoUrl: function(a) {
          g.c.add(this, "setVideoUrl");
          return this.set("__source__", a)
      }
  });
  z.o.D9 = z.o.LK.extend({
      r: function(a) {
          this.CLASS_NAME = "AMap.CanvasLayer";
          g.c.ya(this, a);
          a && a.canvas && (a.__source__ = a.canvas);
          arguments.callee.ka.apply(this, arguments)
      },
      getCanvas: function() {
          g.c.add(this, "getCanvas");
          return this.get("__source__")
      },
      setCanvas: function(a) {
          g.c.add(this, "setCanvas");
          return this.set("__source__", a)
      },
      reFresh: function() {
          this.o && (this.o.YD = !0,
          this.o.set("display"))
      }
  });
  z.o.v$ = z.o.Tb.extend({
      B: {
          visible: !0,
          zooms: [3, g.l.Z ? 20 : 18],
          type: "overlay",
          zIndex: 5,
          cursor: "pointer",
          alwaysRender: !0,
          stable: !0,
          bubble: !0,
          rejectMapMask: !0,
          className: "amap-mass"
      },
      r: function(a, b) {
          this.CLASS_NAME = "AMap.MassMarks";
          g.c.ya(this, b);
          g.l.Ok && (this.kj = !0,
          b.size && (b.size = g.a.bq(b.size)),
          this.C = !0,
          this.setData(a),
          g.a.Db(this, b),
          b.style ? (this.We(this.B, !0),
          this.setStyle(b.style)) : this.setStyle(this.B),
          this.C = !1)
      },
      clear: function() {
          g.c.add(this, "clear");
          this.set("dataSources", "")
      },
      getStyle: function() {
          g.c.add(this, "getStyle");
          return this.hm
      },
      setStyle: function(a) {
          g.c.add(this, "setStyle");
          if (a instanceof Array) {
              for (var b = 0; b < a.length; b += 1)
                  a[b].rotation_ = Math.PI * (a[b].rotation || 0) / 180,
                  a[b].size = g.a.bq(a[b].size),
                  a.mf = Math.max(a.mf || 0, a[b].size.width + a[b].anchor.x),
                  a.Yf = Math.max(a.mf || 0, a[b].size.height + a[b].anchor.y);
              this.hm = a
          } else
              a.size && (a.size = g.a.bq(a.size)),
              a.rotation_ = Math.PI * (a.rotation || 0) / 180,
              this.We(a, !0),
              this.hm = {
                  anchor: this.get("anchor"),
                  url: this.get("url"),
                  size: this.get("size"),
                  rotation_: this.get("rotation_")
              },
              this.hm.mf = this.hm.size.width + this.hm.anchor.x,
              this.hm.Yf = this.hm.size.height + this.hm.anchor.y;
          this.q("style")
      },
      setData: function(a) {
          g.c.add(this, "setData");
          this.set("dataSources", a)
      },
      getData: function() {
          g.c.add(this, "getData");
          return this.get("datas") || this.get("dataSources")
      },
      setMap: function(a) {
          g.c.add(this, "setMap");
          g.l.Ok && (a ? (this.get("map") && this.get("map").bk(this),
          this.set("map", a)) : this.get("map") && (this.get("map").bk(this),
          this.set("map", null, !0),
          this.ei = !1,
          this.Pg && this.Pg()))
      },
      Mf: function(a) {
          return g.qb.VC(["cvector"]) ? (a = new g.o.$c(this,a),
          this.W("datas", a),
          a) : ["cvector"]
      }
  });
  z.o.H9 = z.o.Tb.extend({
      r: function(a) {
          this.CLASS_NAME = "AMap.CompositeLayer";
          this.TF = !0;
          g.a.Db(this, a);
          this.zm = [];
          this.We(this.B)
      },
      opacityChanged: function() {
          for (var a = this.get("opacity", null, !0), b = -1, c = this.zm.length; ++b < c; )
              this.zm[b].setOpacity(a)
      },
      addLayer: function(a) {
          if (!this.Wc(a)) {
              a.qA = this;
              var b = this.get("map");
              a.setMap(b);
              this.zm.push(a)
          }
          return this
      },
      removeLayer: function(a) {
          this.Wc(a) && a.setMap(null);
          return this
      },
      uja: function(a) {
          if (this.Wc(a)) {
              delete a.qA;
              var b = this.zm;
              a = g.a.indexOf(b, a);
              g.a.fo(b, a)
          }
      },
      Wc: function(a) {
          return -1 !== g.a.indexOf(this.zm, a)
      },
      show: function() {
          for (var a = -1, b = this.zm.length; ++a < b; )
              this.zm[a].show()
      },
      hide: function() {
          for (var a = -1, b = this.zm.length; ++a < b; )
              this.zm[a].hide()
      },
      setzIndex: function(a, b) {
          g.c.add(this, "setzIndex");
          this.set("zIndex", a);
          var c = this.zm;
          if ("undefined" === typeof b)
              for (var d = -1, e = c.length; ++d < e; ) {
                  var f = c[d];
                  f.setzIndex(a)
              }
          else
              (f = c[b]) && f.setzIndex(a)
      },
      Mf: function(a) {
          this.e = a
      },
      DQ: function() {
          return this.zm
      }
  });
  z.o.Iq = z.o.Tb.extend({
      j$: {
          visible: !0,
          zIndex: 20,
          opacity: 1,
          zooms: [3, 20],
          collision: !1,
          alwaysRender: !0
      },
      B: {
          zooms: [3, 20]
      },
      Zx: function() {
          this.h && this.h.ez(this.xk)
      },
      r: function(a) {
          this.CLASS_NAME = this.CLASS_NAME || "AMap.LabelsLayer";
          g.c.ya(this, a);
          arguments.callee.ka.apply(this, arguments);
          this.B = this.j$;
          g.a.Db(this, a);
          this.We(this.B);
          this.xk = [];
          this.hb = [];
          this.ku = [];
          this.bQ = {
              click: 0,
              mouseover: 0,
              mousemove: 0,
              mouseout: 0,
              mousedown: 0,
              mouseup: 0,
              touchstart: 0,
              touchend: 0
          }
      },
      rY: function() {
          var a = this;
          return g.a.ZC(function(b) {
              var c = a.h;
              c ? c.ez(b) : a.HC = b
          }, 100)
      },
      ez: function(a) {
          this.N_(a)
      },
      Lr: function(a, b) {
          for (var c = b._LabelMarkerId || null, d = 0; d < a.length; d++)
              if (a[d].data.id === c)
                  return d;
          return -1
      },
      removeItem: function() {},
      tf: function(a) {
          return "undefined" === typeof a
      },
      KY: function(a) {
          return "string" === typeof a
      },
      $ea: function(a) {
          return "number" === typeof a
      },
      VX: function() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
          return this.tf(a.width) || this.tf(a.height) ? this.KY(a) ? a.split(",") : this.$ea(a) ? [a, a] : a : [a.width, a.height]
      },
      Kda: function() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
          return this.tf(a.Q) || this.tf(a.P) ? this.KY(a) ? a.split(",") : a : [a.Q, a.P]
      },
      add: function(a) {
          if (a) {
              a = "[object Array]" !== Object.prototype.toString.apply(a) ? [a] : a;
              for (var b = 0; b < a.length; b++) {
                  var c = a[b];
                  if (c) {
                      c.h = this;
                      var d = c.B
                        , e = {
                          data: {
                              id: c._LabelMarkerId || void 0,
                              name: d.title || "",
                              position: this.Kda(d.position) || void 0,
                              zooms: d.zooms || void 0,
                              rank: d.rank || void 0
                          },
                          opts: {
                              opacity: "number" === typeof d.opacity ? d.opacity : 1,
                              zIndex: "number" === typeof d.zIndex ? d.zIndex : 1,
                              icon: {},
                              text: {}
                          }
                      };
                      if (d.icon) {
                          var f = d.icon
                            , h = f.size
                            , k = f.clipSize;
                          h && (f.size = this.VX(h));
                          k && (f.clipSize = this.VX(k));
                          e.opts.icon = d.icon
                      }
                      d.text && (e.opts.text = d.text,
                      d.text.content && (e.data.txt = d.text.content));
                      this.xk.push(e);
                      this.hb.push(c)
                  }
              }
              this.Zx();
              b = a.length;
              for (c = 0; c < b; c++)
                  (d = a[c]) && d.r7 && d.r7()
          }
      },
      remove: function(a) {
          this.xk && (a = this.Lr(this.xk, a),
          -1 !== a && (this.xk.splice(a, 1),
          this.hb.splice(a, 1),
          this.Zx()))
      },
      clear: function() {
          this.h && this.h.clear();
          this.xk = [];
          this.hb = []
      },
      Mf: function(a) {
          this.get("map") || this.set("map", a.D, !0);
          if (g.o.Iq) {
              this.h = new g.o.Iq(this,a);
              this.xk && this.Zx();
              a = this.ku;
              if (a.length) {
                  for (var b = 0; b < a.length; b++)
                      this.on.apply(this, a[b]);
                  this.ku = []
              }
              return this.h
          }
          return ["AMap.LabelsLayer"]
      },
      setPosition: function() {},
      positionChanged: function() {},
      on: function(a) {
          this.h ? (this.ph(arguments),
          this.h.S0(a)) : this.ku.push(arguments)
      },
      off: function(a) {
          this.h && this.h.R8(a)
      }
  });
  z.o.SK = z.o.Uz.extend({
      r: function(a, b, c) {
          this.CLASS_NAME = "AMap.GroundImage";
          g.c.ya(this, c);
          c = c || {};
          this.Kg = !0;
          var d = parseFloat(c.opacity);
          isNaN(d) && (d = 1);
          arguments.callee.ka.call(this, {
              url: a,
              bounds: b,
              clickable: c.clickable,
              opacity: d,
              map: c.map,
              zooms: c.zooms || [3, 20]
          });
          this.CLASS_NAME = "AMap.GroundImage"
      },
      Tsa: function(a) {
          this.get("bounds").contains(a.lnglat) && (a.target = this,
          this.q("click", a))
      },
      Usa: function(a) {
          this.get("bounds").contains(a.lnglat) && (a.target = this,
          this.q("dblclick", a))
      },
      setMap: function(a) {
          g.c.add(this, "setMap");
          a ? (this.get("map") && (this.get("map").bk(this),
          this.z1 && z.event.removeListener(this.z1),
          this.S1 && z.event.removeListener(this.S1)),
          this.set("map", a)) : this.get("map") && (this.get("map").bk(this),
          this.Ge.map = null)
      },
      mapChanged: function() {
          this.get("map") && (this.get("map").bH(this),
          this.get("clickable") && (this.z1 = z.event.addListener(this.get("map"), "click", this.Tsa, this),
          this.S1 = z.event.addListener(this.get("map"), "dblclick", this.Usa, this)))
      }
  });
  z.w.sh = g.aa.extend({
      ja: [g.sa, g.Oe, {
          Ha: g.a.Ha
      }],
      B: {
          extData: {},
          bubble: !1,
          clickable: !0,
          draggable: !1
      },
      r: function() {
          this.aG = g.a.ub(this)
      },
      BCa: function() {
          return this.aG
      },
      eBa: function() {
          this.C = !0;
          this.get("map", null, !0) && this.setMap(this.get("map"));
          this.C = !1
      },
      mapChanged: function() {
          this.get("map", null, !0) && this.get("map", null, !0).LB(this)
      },
      kQ: function(a) {
          var b = 0;
          a && (b = "string" === typeof a ? Math.round(parseFloat(a) / 0.14929107086948487) : a);
          return b
      },
      setHeight: function(a) {
          this.height = a = a || 0;
          a = this.kQ(a);
          this.set("altitude", a)
      },
      getHeight: function() {
          return this.height
      },
      show: function() {
          g.c.add(this, "show");
          this.set("visible", !0)
      },
      hide: function() {
          g.c.add(this, "hide");
          this.set("visible", !1)
      },
      setMap: function(a) {
          g.c.add(this, "setMap");
          a !== this.get("map", null, !0) && (a ? (this.get("map", null, !0) && this.get("map", null, !0).Yy(this),
          this.set("map", a)) : this.get("map", null, !0) && (this.get("map", null, !0).Yy(this),
          this.set("map", null, !0)))
      },
      getMap: function() {
          g.c.add(this, "getMap");
          return this.get("map", null, !0)
      },
      setExtData: function(a) {
          g.c.add(this, "setExtData");
          this.set("extData", a)
      },
      positionChanged: function() {},
      getExtData: function() {
          g.c.add(this, "getExtData");
          return this.get("extData", null, !0)
      }
  });
  z.w.$c = z.w.sh.extend({
      r: function(a) {
          z.w.$c.Sc.r.apply(this, arguments)
      },
      show: function() {
          g.c.add(this, "show");
          this.set("visible", !0);
          this.q("show", {
              type: "show",
              target: this
          })
      },
      hide: function() {
          g.c.add(this, "hide");
          this.set("visible", !1);
          this.q("hide", {
              type: "hide",
              target: this
          })
      },
      getVisible: function() {
          g.c.add(this, "getVisible");
          return this.get("visible", null, !0)
      },
      getOptions: function() {
          g.c.add(this, "getOptions");
          var a = {}
            , b = "map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable".split(" ")
            , c = "isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir dirColor dirImg".split(" ")
            , d = ["fillColor", "fillOpacity", "path", "lineJoin", "texture"]
            , e = ["center", "radius", "texture"]
            , f = ["bounds", "texture"]
            , h = [];
          this instanceof z.w.Xb && (h = b.concat(c));
          this instanceof z.w.yc && (h = b.concat(d));
          this instanceof z.w.Ug && (h = b.concat(e).concat(d));
          this instanceof z.w.at && (h = b.concat(e).concat(d));
          this instanceof z.w.ht && (h = b.concat(d).concat(f));
          for (b = 0; b < h.length; b += 1)
              a[h[b]] = this.get(h[b], null, !0);
          return a
      },
      setOptions: function(a) {
          g.c.add(this, "setOptions");
          a.hasOwnProperty("path") && (a.path && a.path.length || (a.path = []),
          a.path = this.Ha(a.path));
          a.center && (a.center = this.Ha(a.center));
          var b;
          a.hasOwnProperty("map") && (b = a.map,
          delete a.map);
          this.We(a);
          void 0 !== b && (this.setMap(b),
          a.map = b);
          this.q("options");
          this.q("change", {
              type: "change",
              target: this
          })
      },
      setzIndex: function(a) {
          g.c.add(this, "setzIndex");
          this.set("zIndex", a)
      },
      getzIndex: function() {
          g.c.add(this, "getzIndex");
          return this.get("zIndex", null, !0)
      },
      setDraggable: function(a) {
          g.c.add(this, "setDraggable");
          this.set("draggable", a)
      }
  });
  z.w.VE = z.w.$c.extend({
      B: {
          visible: !0,
          zIndex: 10,
          strokeColor: "#006600",
          strokeOpacity: 0.9,
          strokeWeight: 3,
          strokeStyle: "solid",
          strokeDasharray: [10, 5],
          lineJoin: "miter",
          lineCap: "butt",
          path: []
      },
      r: function(a) {
          z.w.VE.Sc.r.apply(this, arguments)
      },
      setPath: function(a, b) {
          g.c.add(this, "setPath");
          a && a.length || (a = []);
          a = this.Ha(a);
          this.w && this.w.get("deltaPos") && this.w.set("deltaPos", [0, 0], !0);
          this.set("path", a);
          this.q("change", {
              type: "change",
              target: this
          });
          b || this.q("setPath")
      },
      getPath: function() {
          g.c.add(this, "getPath");
          return this.F1()
      },
      reset: function() {
          var a = this.F1();
          this.w.set("deltaPos", [0, 0], !0);
          this.set("path", a)
      },
      F1: function() {
          var a = this.get("path", null, !0);
          this.w && this.w.get("deltaPos") && (a = this.w.GA(a, this.w.get("deltaPos")));
          return a
      },
      pd: function() {
          var a = this.get("path");
          if (!a || !a.length)
              return null;
          a[0]instanceof g.T && (a = [a]);
          for (var b = new g.me(180,90,-180,-90), c = 0; c < a.length; c += 1)
              for (var d = a[c], e = d.length - 1; 0 <= e; e -= 1)
                  b.extend(d[e]);
          return b
      }
  });
  z.w.VE.Nb({
      pd: "getBounds"
  });
  z.w.Th = g.aa.extend({
      ja: [g.sa, g.Oe],
      B: {
          size: new g.xd(36,36),
          imageOffset: new g.H(0,0),
          image: g.A.yb + "/theme/v1.3/markers/0.png",
          imageSize: null
      },
      r: function(a) {
          this.CLASS_NAME = "AMap.Icon";
          g.c.ya(this, a);
          a = a || {};
          a.size && (a.size = g.a.bq(a.size));
          a.imageSize && (a.imageSize = g.a.bq(a.imageSize));
          g.a.Db(this, a);
          this.We(this.B)
      },
      setImageSize: function(a) {
          g.c.add(this, "setImageSize");
          a = g.a.bq(a);
          this.set("imageSize", a)
      },
      getImageSize: function() {
          g.c.add(this, "getImageSize");
          return this.get("imageSize", null, !0)
      }
  });
  z.w.t$ = g.aa.extend({
      ja: [g.sa, g.Oe],
      B: {
          coords: [],
          type: ""
      },
      r: function(a) {
          this.CLASS_NAME = "AMap.MarkerShape";
          g.c.ya(this, a);
          g.a.Db(this, a);
          this.We(this.B)
      }
  });
  z.w.rb = z.w.sh.extend({
      B: {
          cursor: "pointer",
          visible: !0,
          zIndex: 100,
          angle: 0,
          textAlign: "left",
          verticalAlign: "top",
          autoRotation: !1,
          opacity: 1,
          offset: new g.H(-9,-31),
          size: new g.H(19,33),
          raiseOnDrag: !1,
          topWhenClick: !1,
          topWhenMouseOver: !1,
          animation: "AMAP_ANIMATION_NONE"
      },
      r: function(a) {
          this.CLASS_NAME = this.CLASS_NAME || "AMap.Marker";
          g.c.ya(this, a);
          a = a || {};
          this.Kg = !0;
          this.Hfa = g.a.ub(this);
          this.C = !0;
          a.position && (a.position = this.Ha(a.position));
          a.height && this.setHeight(a.height);
          g.a.Db(this, a);
          g.l.ue && (this.B.angle = 0);
          this.We(this.B, !0);
          this.mapChanged();
          this.C = !1
      },
      getAnchor: function() {
          g.c.add(this, "getAnchor");
          return this.get("anchor", null, !0)
      },
      setAnchor: function(a) {
          g.c.add(this, "setAnchor");
          this.set("anchor", a)
      },
      getId: function() {
          g.c.add(this, "getId");
          return this.Hfa
      },
      setRaiseOnDrag: function(a) {
          g.c.add(this, "setRaiseOnDrag");
          this.set("raiseOnDrag", a)
      },
      setPosition: function(a, b) {
          g.c.add(this, "setPosition");
          a = this.Ha(a);
          void 0 !== b && (this.C = !0,
          this.setHeight(b),
          this.C = !1);
          this.set("position", a)
      },
      getPosition: function() {
          g.c.add(this, "getPosition");
          return this.get("position", null, !0)
      },
      getBounds: function() {
          var a = this.get("position", null, !0).jb();
          return new g.me(a,a.jb())
      },
      mapChanged: function() {
          this.hl("zoom");
          var a = this.get("map", null, !0);
          a && (this.get("position", null, !0) || this.set("position", a.get("center")),
          a.LB(this),
          this.W("zoom", a))
      },
      getZooms: function() {
          g.c.add(this, "getZooms");
          return this.get("zooms", null, !0)
      },
      zoomChanged: function() {
          var a = this.get("zooms", null, !0);
          if (a) {
              var b = this.get("zoom");
              b < a[0] || b > a[1] ? this.set("outOfZooms", !0) : this.set("outOfZooms", !1);
              this.w && this.w.pta()
          }
      },
      setIcon: function(a) {
          g.c.add(this, "setIcon");
          this.set("icon", a)
      },
      getIcon: function() {
          g.c.add(this, "getIcon");
          return this.get("icon", null, !0)
      },
      setContent: function(a) {
          g.c.add(this, "setContent");
          this.set("content", a)
      },
      getContent: function() {
          g.c.add(this, "getContent");
          return this.get("content", null, !0)
      },
      getContentDom: function() {
          return this.get("contentDom", null, !0)
      },
      hide: function() {
          g.c.add(this, "hide");
          this.set("visible", !1)
      },
      show: function() {
          g.c.add(this, "show");
          this.set("visible", !0)
      },
      setCursor: function(a) {
          g.c.add(this, "setCursor");
          this.set("cursor", a)
      },
      setRotation: function(a) {
          g.c.add(this, "setRotation");
          g.l.ue || this.set("angle", a)
      },
      setAngle: function(a) {
          g.c.add(this, "setAngle");
          g.l.ue || "number" !== typeof a || this.set("angle", a)
      },
      getAngle: function() {
          g.c.add(this, "getAngle");
          return this.get("angle", null, !0)
      },
      setOffset: function(a) {
          g.c.add(this, "setOffset");
          this.set("offset", a)
      },
      getOffset: function() {
          g.c.add(this, "getOffset");
          return this.get("offset", null, !0)
      },
      setTextAlign: function(a) {
          g.c.add(this, "setTextAlign");
          this.set("textAlign", a)
      },
      getTextAlign: function() {
          g.c.add(this, "getTextAlign");
          return this.get("textAlign", null, !0)
      },
      setVerticalAlign: function(a) {
          g.c.add(this, "setVerticalAlign");
          this.set("verticalAlign", a)
      },
      getVerticalAlign: function() {
          g.c.add(this, "getVerticalAlign");
          return this.get("verticalAlign", null, !0)
      },
      setzIndex: function(a) {
          g.c.add(this, "setzIndex");
          this.set("zIndex", a)
      },
      getzIndex: function() {
          g.c.add(this, "getzIndex");
          return this.get("zIndex", null, !0)
      },
      setOpacity: function(a) {
          g.c.add(this, "setOpacity");
          this.set("opacity", a)
      },
      setDraggable: function(a) {
          g.c.add(this, "setDraggable");
          this.set("draggable", a)
      },
      getDraggable: function() {
          g.c.add(this, "getDraggable");
          return this.get("draggable", null, !0)
      },
      moveTo: function(a, b, c) {
          g.c.add(this, "moveTo");
          a = this.Ha(a);
          this.set("move", {
              Uf: a,
              speed: b,
              sb: c
          })
      },
      moveAlong: function(a, b, c, d) {
          g.c.add(this, "moveAlong");
          if (!(2 > a.length)) {
              a = this.Ha(a);
              for (var e = [a[0]], f = a[0], h = 1; h < a.length; h += 1)
                  f.cb(a[h]) || e.push(a[h]);
              this.set("move", {
                  Uf: e,
                  speed: b,
                  sb: c,
                  Tla: d
              })
          }
      },
      stopMove: function() {
          g.c.add(this, "stopMove");
          this.set("move", !1)
      },
      pauseMove: function() {
          g.c.add(this, "pauseMove");
          var a = this.get("move");
          if (!a)
              return !1;
          a.action = "pause";
          this.set("move", a);
          return !0
      },
      resumeMove: function() {
          g.c.add(this, "resumeMove");
          var a = this.get("move");
          if (!a)
              return !1;
          a.action = "resume";
          this.set("move", a);
          return !0
      },
      setShadow: function(a) {
          g.c.add(this, "setShadow");
          this.set("shadow", a)
      },
      getShadow: function() {
          g.c.add(this, "getShadow");
          return this.get("shadow", null, !0)
      },
      setClickable: function(a) {
          g.c.add(this, "setClickable");
          a !== this.get("clickable", null, !0) && this.set("clickable", a)
      },
      getClickable: function() {
          g.c.add(this, "getClickable");
          return this.get("clickable", null, !0)
      },
      setTitle: function(a, b) {
          g.c.add(this, "setTitle");
          "string" === typeof a && this.set("title", a, b)
      },
      getTitle: function() {
          g.c.add(this, "getTitle");
          return this.get("title", null, !0)
      },
      setLabel: function(a) {
          g.c.add(this, "setLabel");
          a && !g.a.Qk(a) && (a = g.extend({}, this.get("label"), a));
          this.set("label", a)
      },
      getLabel: function() {
          g.c.add(this, "getLabel");
          return this.get("label", null, !0)
      },
      setTop: function(a, b) {
          g.c.add(this, "setTop");
          this.set("isTop", a, b)
      },
      getTop: function() {
          g.c.add(this, "getTop");
          return this.get("isTop", null, !0)
      },
      setShape: function(a, b) {
          g.c.add(this, "setShape");
          this.set("shape", a, b)
      },
      getShape: function() {
          g.c.add(this, "getShape");
          return this.get("shape", null, !0)
      },
      setAnimation: function(a, b) {
          g.c.add(this, "setAnimation");
          this.set("animation", a, b)
      },
      getAnimation: function() {
          g.c.add(this, "getAnimation");
          return this.get("animation", null, !0)
      },
      getMap: function() {
          g.c.add(this, "getMap");
          return this.get("map", null, !0)
      },
      markOnAMAP: function(a) {
          g.c.add(this, "markOnAMAP");
          a = a || {};
          var b = {};
          b.name = a.name || this.get("name", null, !0) || "";
          a = this.Ha(a.position) || this.get("position", null, !0);
          b.y = a.P;
          b.x = a.Q;
          g.Qh.Ks(g.Qh.tpa(b))
      }
  });
  z.w.m$ = z.w.sh.extend({
      B: {
          position: null,
          zooms: [3, 20],
          opacity: 1,
          visible: !0
      },
      r: function(a) {
          a = a || {};
          this.CLASS_NAME = this.CLASS_NAME || "AMap.LabelMarker";
          arguments.callee.ka.apply(this, arguments);
          this._LabelMarkerId = g.a.ub(this);
          g.a.Db(this, a);
          this.We(this.B, !0);
          this.cQ = [];
          this.QB = {}
      },
      Lr: function(a, b) {
          for (var c = b._LabelMarkerId || null, d = 0; d < a.length; d++)
              if (a[d].data.id === c)
                  return d;
          return -1
      },
      r7: function() {
          var a = this.cQ || [];
          if (a.length) {
              for (var b = 0; b < a.length; b++)
                  this.on.apply(this, a[b]);
              this.cQ = []
          }
      },
      getBounds: function() {
          var a = this.get("position", null, !0);
          try {
              return "string" === typeof a ? a = new g.T(a.split(",")) : "[object Array]" == Object.prototype.toString.apply(a) && (a = new g.T(a[0],a[1])),
              new g.me(a,a.jb())
          } catch (b) {
              return null
          }
      },
      getPosition: function() {
          var a = this.h.xk
            , b = this.Lr(a, this);
          return -1 !== b ? a[b].data.position : null
      },
      setPosition: function(a) {
          var b = this.h.xk
            , c = this.Lr(b, this);
          -1 !== c && (b[c].data.position = a);
          this.h.Zx()
      },
      getZooms: function() {
          var a = this.h.xk
            , b = this.Lr(a, this);
          return -1 !== b ? a[b].data.zooms : null
      },
      setZooms: function(a) {
          var b = this.h.xk
            , c = this.Lr(b, this);
          -1 !== c && (b[c].data.zooms = a);
          this.h.Zx()
      },
      getOpacity: function() {
          var a = this.h.xk
            , b = this.Lr(a, this);
          return -1 !== b ? a[b].opts.opacity : null
      },
      setOpacity: function(a) {
          var b = this.h.xk
            , c = this.Lr(b, this);
          -1 !== c && (b[c].opts.opacity = a);
          this.h.Zx()
      },
      on: function(a, b) {
          if (this.h) {
              this.QB[a] = b;
              var c = this
                , d = this.h;
              d._markerBindArray || (d._markerBindArray = {});
              var e = this._LabelMarkerId;
              d._markerBindArray[e] || (d._markerBindArray[e] = this);
              d.bQ[a] ? d.bQ[a]++ : (d.bQ[a] = 1,
              this.h.on(a, function(a) {
                  var b = a.type;
                  if (a && a.data && a.data.data && a.data.data.id && a.data.data.id) {
                      var d = a.data.data.id
                        , b = (d = c.h && c.h._markerBindArray && c.h._markerBindArray[d]) && d.QB[b];
                      d && b && (a.target = d,
                      "function" === typeof b && b(a))
                  }
              }))
          } else
              this.cQ.push(arguments)
      },
      off: function(a) {
          this.QB[a] && delete this.QB[a];
          Object.keys(this.QB).length || delete this.h._markerBindArray[this._LabelMarkerId]
      }
  });
  z.w.xn = z.w.sh.extend({
      B: {
          visible: !1,
          items: []
      },
      r: function(a) {
          this.CLASS_NAME = "AMap.ContextMenu";
          g.c.ya(this, a);
          this.Kg = !0;
          g.a.Db(this, a);
          this.B.items = [];
          this.We(this.B)
      },
      addItem: function(a, b, c) {
          g.c.add(this, "addItem");
          this.get("items").push({
              Ps: a,
              sb: b,
              sJ: c
          });
          this.q("items")
      },
      removeItem: function(a, b) {
          g.c.add(this, "removeItem");
          var c = this.get("items"), d, e;
          for (e = 0; e < c.length; e += 1)
              if (d = c[e],
              d.Ps === a && d.sb === b) {
                  c.splice(e, 1);
                  break
              }
          this.q("items")
      },
      open: function(a, b) {
          g.c.add(this, "open");
          this.C = !0;
          b = g.a.Ha(b);
          this.set("position", b);
          this.map ? this.map && this.map !== a && (this.map.Yy(this),
          this.map = a,
          this.setMap(a)) : (this.map = a,
          this.setMap(a));
          this.q("open", {
              type: "open",
              target: this
          });
          this.C = !1
      },
      close: function() {
          g.c.add(this, "close");
          this.C = !0;
          this.setMap(null);
          this.map && (this.map = this.map.Lx = null,
          this.q("close", {
              type: "close",
              target: this
          }));
          this.C = !1
      }
  });
  z.w.Ne = z.w.sh.extend({
      B: {
          visible: !0,
          offset: new g.H(0,0),
          showShadow: !1,
          closeWhenClickMap: !1,
          retainWhenClose: !0,
          autoMove: !0,
          altitude: 0,
          anchor: "bottom-center"
      },
      r: function(a) {
          this.CLASS_NAME = this.CLASS_NAME || "AMap.InfoWindow";
          g.c.ya(this, a);
          a = a || {};
          this.Kg = !0;
          a && a.size && (a.size = g.a.bq(a.size));
          g.a.Db(this, a);
          this.We(this.B);
          a.position && this.set("position", g.a.Ha(a.position), !0);
          a.height && this.set("altitude", this.kQ(a.height), !0)
      },
      open: function(a, b, c) {
          g.c.add(this, "open");
          b = g.a.Ha(b);
          if (a && !this.oK && (b = b || this.get("position", null, !0))) {
              this.q("change", {
                  type: "change",
                  target: this
              });
              c = this.kQ(c) || this.get("altitude");
              var d = this.get("map", null, !0);
              d && d === a ? (this.set("altitude", c, !0),
              this.set("position", b)) : (this.map = a,
              a.Zl && a.Zl.close(),
              this.set("position", b, !0),
              this.set("altitude", c, !0),
              this.C = !0,
              this.setMap(a),
              this.C = !1);
              this.q("open", {
                  type: "open",
                  target: this
              })
          }
      },
      close: function() {
          g.c.add(this, "close");
          this.w && this.w.map && (this.C = !0,
          this.setMap(null),
          this.map = null,
          this.q("change", {
              type: "change",
              target: this
          }),
          this.C = !1)
      },
      getAnchor: function() {
          g.c.add(this, "getAnchor");
          return this.get("anchor", null, !0)
      },
      setAnchor: function(a) {
          g.c.add(this, "setAnchor");
          this.set("anchor", a);
          this.q("change", {
              type: "change",
              target: this
          })
      },
      setContent: function(a) {
          g.c.add(this, "setContent");
          this.set("content", a);
          this.q("change", {
              type: "change",
              target: this
          })
      },
      getContentU: function() {
          g.c.add(this, "getContentU");
          return this.get("content", null, !0)
      },
      getContentDom: function() {
          return this.get("contentDom", null, !0)
      },
      getContent: function() {
          g.c.add(this, "getContent");
          return this.get("content", null, !0)
      },
      setPosition: function(a) {
          g.c.add(this, "setPosition");
          a = g.a.Ha(a);
          this.set("position", a);
          this.q("change", {
              type: "change",
              target: this
          })
      },
      setOffset: function(a) {
          g.c.add(this, "setOffset");
          this.set("offset", a);
          this.q("change", {
              type: "change",
              target: this
          })
      },
      getPosition: function() {
          g.c.add(this, "getPosition");
          return this.get("position", null, !0)
      },
      setSize: function(a) {
          g.c.add(this, "setSize");
          a = g.a.bq(a);
          this.set("size", a);
          this.q("change", {
              type: "change",
              target: this
          })
      },
      getSize: function(a) {
          g.c.add(this, "getSize");
          var b = this.get("size", null, !0);
          if (b)
              return b;
          if (this.w && !a)
              return new g.xd(this.w.fh.offsetWidth,this.w.fh.offsetHeight)
      },
      getIsOpen: function() {
          g.c.add(this, "getIsOpen");
          return !!this.get("map")
      }
  });
  z.w.Xb = z.w.VE.extend({
      B: {
          isOutline: !1,
          outlineColor: "#000000",
          geodesic: !1,
          dirColor: "white",
          borderWeight: 1
      },
      r: function(a) {
          this.CLASS_NAME = this.CLASS_NAME || "AMap.Polyline";
          g.c.ya(this, a);
          this.C = !0;
          z.w.Xb.Sc.r.apply(this, arguments);
          this.Kg = !0;
          a = a || {};
          a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 50;
          a.path && (a.path = this.Ha(a.path));
          g.a.Db(this, a);
          this.setOptions(this.B);
          this.C = !1
      },
      getLength: function() {
          g.c.add(this, "getLength");
          for (var a = this.get("path"), b = 0, c = 0; c < a.length - 1; c += 1)
              b += a[c].re(a[c + 1]);
          return parseFloat(b.toFixed(2))
      }
  });
  (function(a) {
      function b(a, b, c, d) {
          if (1 <= a)
              return d;
          var e = 1 - a;
          return e * e * b + 2 * e * a * c + a * a * d
      }
      function c(a, b, c, d, e) {
          if (1 <= a)
              return e;
          var f = 3 * (c[0] - b[0])
            , h = 3 * (d[0] - c[0]) - f
            , s = 3 * (c[1] - b[1]);
          c = 3 * (d[1] - c[1]) - s;
          return [(e[0] - b[0] - f - h) * Math.pow(a, 3) + h * Math.pow(a, 2) + f * a + b[0], (e[1] - b[1] - s - c) * Math.pow(a, 3) + c * Math.pow(a, 2) + s * a + b[1]]
      }
      function d(a, c, d, e) {
          return [b(a, c[0], d[0], e[0]), b(a, c[1], d[1], e[1])]
      }
      function e(b, c) {
          c = a.a.Ha(c);
          return b.$C(c, 20).fl()
      }
      function f(b, c) {
          a.a.isArray(c) && (c = new a.H(c[0],c[1]));
          return b.AD(c, 20)
      }
      function h(b, f, h, n, p, q) {
          var r = null;
          if (b && h && h.length) {
              b = [b];
              b.push.apply(b, h);
              b.push(f);
              h = 0;
              for (r = b.length; h < r; h++)
                  b[h] = e(n, b[h]);
              h = a.extend({
                  tolerance: 4,
                  interpolateNumLimit: [3, 300]
              }, q);
              q = h.tolerance;
              h = h.interpolateNumLimit;
              q = Math.max(2, q);
              for (var s = r = 0, u = 0, v = b.length; u < v - 1; u++)
                  var x = b[u]
                    , t = b[u + 1]
                    , r = r + Math.abs(t[0] - x[0])
                    , s = s + Math.abs(t[1] - x[1]);
              a: {
                  p = Math.min(h[1], Math.max(h[0], Math.round(Math.max(r, s) / p / q)));
                  q = null;
                  switch (b.length) {
                  case 3:
                      q = d;
                      break;
                  case 4:
                      q = c;
                      break;
                  default:
                      r = null;
                      break a
                  }
                  h = [];
                  r = [0].concat(b);
                  for (s = 1; s < p - 2; s++)
                      r[0] = s / p,
                      h.push(q.apply(null, r));
                  h.push(b[b.length - 1]);
                  r = h
              }
          }
          return r || [e(n, f)]
      }
      a.ew = {
          LEa: d,
          uBa: c,
          MH: function() {
              function a(b, c, d) {
                  return (((1 - 3 * d + 3 * c) * b + (3 * d - 6 * c)) * b + 3 * c) * b
              }
              function b(a) {
                  return a
              }
              var c = {}
                , d = "function" === typeof Float32Array;
              return function(e, f, h, s) {
                  function u(b) {
                      if (0 === b)
                          b = 0;
                      else if (1 === b)
                          b = 1;
                      else {
                          for (var c = 0, d = 1; 10 !== d && x[d] <= b; ++d)
                              c += 0.1;
                          --d;
                          var d = c + (b - x[d]) / (x[d + 1] - x[d]) * 0.1
                            , l = 3 * (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e;
                          if (0.001 <= l) {
                              for (c = 0; 4 > c; ++c) {
                                  l = 3 * (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e;
                                  if (0 === l)
                                      break;
                                  d -= (a(d, e, h) - b) / l
                              }
                              b = d
                          } else if (0 === l)
                              b = d;
                          else {
                              var d = c, c = c + 0.1, m, n = 0;
                              do
                                  m = d + (c - d) / 2,
                                  l = a(m, e, h) - b,
                                  0 < l ? c = m : d = m;
                              while (1E-7 < Math.abs(l) && 10 > ++n);b = m
                          }
                          b = a(b, f, s)
                      }
                      return b
                  }
                  if (!(0 <= e && 1 >= e && 0 <= h && 1 >= h))
                      throw Error("bezier x values must be in [0, 1] range");
                  var v = arguments.toString();
                  if (c[v])
                      return c[v];
                  if (e === f && h === s)
                      return b;
                  for (var x = d ? new Float32Array(11) : Array(11), t = 0; 11 > t; ++t)
                      x[t] = a(0.1 * t, e, h);
                  return c[v] = u
              }
          }(),
          W2: function(a, b, c, d) {
              var e, f, r = [];
              e = 0;
              for (f = a.length; e < f; e += 1)
                  r.push.apply(r, h(a[e - 1], a[e], a[e].controlPoints, b, c, d));
              return r
          },
          gpa: function(a, b, c, d) {
              a = this.W2(a, b, c, d);
              c = [];
              d = 0;
              for (var e = a.length; d < e; d++)
                  c.push(f(b, a[d]));
              return c
          }
      }
  }
  )(g);
  z.w.Lz = z.w.Xb.extend({
      B: {
          tolerance: 4,
          interpolateNumLimit: [3, 300]
      },
      r: function(a) {
          this.CLASS_NAME = "AMap.BezierCurve";
          g.c.ya(this, a);
          z.w.Lz.Sc.r.apply(this, arguments)
      },
      getLength: function() {
          g.c.add(this, "getLength");
          this.get("map");
          this.C = !0;
          var a = this.getInterpolateLngLats();
          this.C = !1;
          return g.Hq.distanceOfLine(a)
      },
      getInterpolateLngLats: function() {
          g.c.add(this, "getInterpolateLngLats");
          var a = this.get("map");
          return g.ew.gpa(this.get("path"), a && a.aj || g.Ph.PK, Math.pow(2, 2), this.B)
      },
      getSerializedPath: function() {
          g.c.add(this, "getSerializedPath");
          for (var a = this.get("path", null, !0), b = [], c = 0, d = a.length; c < d; c++) {
              var e = a[c];
              if (e instanceof g.T) {
                  var f = [];
                  if (e.controlPoints)
                      for (var h = 0, k = e.controlPoints.length; h < k; h++)
                          f.push(e.controlPoints[h].HQ()),
                          f.push(e.controlPoints[h].CQ());
                  f.push(e.HQ());
                  f.push(e.CQ());
                  b.push(f)
              } else
                  b.push(e)
          }
          return b
      },
      Ha: function(a) {
          var b = typeof a[0];
          if (g.a.isArray(a) && "object" === b) {
              for (b = 0; b < a.length; b += 1)
                  a[b] = this.aia(a[b]);
              return a
          }
          return [this.pEa(a)]
      },
      aia: function(a) {
          var b;
          if (a instanceof g.T)
              b = a;
          else {
              b = typeof a[0];
              var c, d, e = [];
              if ("string" === b || "number" === b) {
                  d = a.length;
                  if (d % 2)
                      throw Error("LngLat number should be even, now it's " + d);
                  b = new g.T(a[d - 2],a[d - 1]);
                  c = 0;
                  for (d -= 2; c < d; c += 2)
                      e.push(new g.T(a[c],a[c + 1]))
              } else if (g.a.isArray(a[0]))
                  for (d = a.length,
                  b = new g.T(a[d - 1][0],a[d - 1][1]),
                  c = 0,
                  d -= 1; c < d; c++)
                      e.push(new g.T(a[c][0],a[c][1]));
              else
                  throw Error("AMap.LngLat expected, now it's " + a);
              b && e.length && (b.controlPoints = g.a.Ha(e))
          }
          if (b.controlPoints && 2 < b.controlPoints.length)
              throw Error("Control Points Number should be 1 or 2 !");
          return b
      }
  });
  z.w.yc = z.w.VE.extend({
      r: function(a) {
          this.CLASS_NAME = this.CLASS_NAME || "AMap.Polygon";
          g.c.ya(this, a);
          this.C = !0;
          z.w.yc.Sc.r.apply(this, arguments);
          this.Kg = !0;
          a = a || {};
          a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
          a.path && (a.path = this.Ha(a.path));
          g.a.Db(this, g.extend({
              fillColor: "#FFAA00",
              fillOpacity: 0.9
          }, a));
          this.setOptions(this.B);
          this.C = !1
      },
      OQ: function(a) {
          var b = 6378137 * Math.PI / 180
            , c = 0
            , d = a.length;
          if (3 > d)
              return 0;
          for (var e = 0; e < d - 1; e += 1)
              var f = a[e]
                , h = a[e + 1]
                , k = f.Q * b * Math.cos(f.P * Math.PI / 180)
                , f = f.P * b
                , l = h.Q * b * Math.cos(h.P * Math.PI / 180)
                , c = c + (k * h.P * b - l * f);
          e = a[e];
          a = a[0];
          d = e.Q * b * Math.cos(e.P * Math.PI / 180);
          e = e.P * b;
          h = a.Q * b * Math.cos(a.P * Math.PI / 180);
          c += d * a.P * b - h * e;
          return 0.5 * Math.abs(c)
      },
      getArea: function() {
          g.c.add(this, "getArea");
          var a = this.get("path", null, !0), b;
          if (!a.length || a[0]instanceof g.T)
              b = this.OQ(a);
          else {
              b = this.OQ(a[0]);
              for (var c = 1; c < a.length; c += 1)
                  b -= this.OQ(a[c])
          }
          return Number(b.toFixed(2))
      },
      toString: function() {
          g.c.add(this, "toString");
          return this.get("path").join(";")
      },
      contains: function(a) {
          g.c.add(this, "contains");
          a = g.a.Ha(a);
          var b = this.get("path");
          b.length && b[0]instanceof g.T && (b = [b]);
          a = [a.Q, a.P];
          for (var c, d = 0, e = b.length; d < e && (c = this.Bla(b[d]),
          g.wd.Pp(c) || c.reverse(),
          c = g.wd.Nd(a, c, 0 === d ? !0 : !1),
          0 < d && (c = !c),
          c); d += 1)
              ;
          return c
      },
      Bla: function(a) {
          for (var b = [], c = 0; c < a.length; c += 1)
              b.push([a[c].Q, a[c].P]);
          return b
      }
  });
  z.w.Ug = z.w.$c.extend({
      B: {
          visible: !0,
          zIndex: 10,
          strokeColor: "#006600",
          strokeOpacity: 0.9,
          strokeWeight: 3,
          strokeStyle: "solid",
          strokeDasharray: [10, 5],
          radius: 1E3,
          fillColor: "#006600",
          fillOpacity: 0.9,
          unit: "miter"
      },
      r: function(a) {
          this.CLASS_NAME = this.CLASS_NAME || "AMap.Circle";
          g.c.ya(this, a);
          this.C = !0;
          z.w.Ug.Sc.r.apply(this, arguments);
          a = a || {};
          a.center && (a.center = g.a.Ha(a.center));
          a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
          g.a.Uj(a.radius, "string") && (a.radius = parseFloat(a.radius),
          isNaN(a.radius) && delete a.radius);
          g.a.Db(this, a);
          this.Kg = this.B.center ? !0 : !1;
          this.setOptions(this.B);
          this.C = !1
      },
      setCenter: function(a, b) {
          g.c.add(this, "setCenter");
          (a = g.a.Ha(a)) && a instanceof g.T && (this.w && this.w.get("deltaPos") && this.w.set("deltaPos", [0, 0], !0),
          this.set("center", a),
          this.q("change", {
              type: "change",
              target: this
          }),
          this.Kg || (this.Kg = !0,
          this.get("map") && this.get("map").q("overlays")),
          b || this.q("setCenter"))
      },
      getCenter: function() {
          g.c.add(this, "getCenter");
          var a = this.get("center", null, !0);
          this.w && this.w.get("deltaPos") && (a = this.w.GA([a], this.w.get("deltaPos"))[0]);
          return a
      },
      reset: function() {
          var a = this.get("center", null, !0);
          this.w && this.w.get("deltaPos") && (a = this.w.GA([a], this.w.get("deltaPos"))[0],
          this.w.set("deltaPos", [0, 0], !0));
          this.set("center", a)
      },
      setRadius: function(a, b) {
          g.c.add(this, "setRadius");
          this.set("radius", a);
          this.q("change", {
              type: "change",
              target: this
          });
          b || this.q("setRadius")
      },
      getPath: function(a) {
          g.c.add(this, "getPath");
          a = a || 36;
          for (var b = this.get("center", null, !0), c = this.get("radius", null, !0), d = [], e = 0; e < a; e += 1) {
              var f = Math.PI * e / a * 2
                , h = Math.cos(f) * c
                , f = Math.sin(f) * c;
              d.push(b.offset(h, f))
          }
          return d
      },
      getRadius: function() {
          g.c.add(this, "getRadius");
          return this.get("radius", null, !0)
      },
      getBounds: function() {
          var a = this.get("center")
            , b = this.get("radius");
          if (!a)
              return null;
          var c = a.offset(-b, -b)
            , a = a.offset(b, b);
          return new g.me(c,a)
      },
      contains: function(a) {
          g.c.add(this, "contains");
          return this.get("center").re(a) <= this.get("radius") ? !0 : !1
      }
  });
  z.w.XU = z.w.Ug.extend({
      r: function(a) {
          this.CLASS_NAME = "AMap.CircleMarker";
          g.c.ya(this, a);
          a = a || {};
          a.unit = "px";
          void 0 === a.radius ? a.radius = 20 : g.a.Uj(a.radius, "string") && (a.radius = parseFloat(a.radius),
          isNaN(a.radius) && (a.radius = 20));
          z.w.XU.Sc.r.apply(this, arguments)
      },
      getBounds: function() {
          this.C = !0;
          var a = this.getCenter();
          this.C = !1;
          return new g.me(a,a.jb())
      },
      contains: function(a) {
          g.c.add(this, "contains");
          this.C = !0;
          var b = this.getMap();
          this.C = !1;
          if (!b)
              return !1;
          var c = this.get("center");
          b.C = !0;
          var d = !1;
          c.re(a) <= this.get("radius") * b.getResolution(c) && (d = !0);
          b.C = !1;
          return d
      }
  });
  var pc = g.aa.extend({
      r: function(a) {
          var b = Array(3), c;
          c = a instanceof Array ? a : a instanceof g.nl || a instanceof g.Oa ? a.elements : arguments;
          b[0] = c[0] || 0;
          b[1] = c[1] || 0;
          b[2] = c[2] || 0;
          this.elements = b
      },
      length: function() {
          return Math.sqrt(this.T4())
      },
      T4: function() {
          var a = this.elements;
          return a[0] * a[0] + a[1] * a[1] + a[2] * a[2]
      },
      normalize: function() {
          var a = this.elements
            , b = a[0]
            , c = a[1]
            , d = a[2]
            , e = Math.sqrt(b * b + c * c + d * d);
          if (e) {
              if (1 === e)
                  return this
          } else
              return a[0] = 0,
              a[1] = 0,
              a[2] = 0,
              this;
          e = 1 / e;
          a[0] = b * e;
          a[1] = c * e;
          a[2] = d * e;
          return this
      },
      jb: function() {
          return new g.Oa(this)
      },
      copy: function(a) {
          var b = this.elements;
          a = a.elements;
          b[0] = a[0];
          b[1] = a[1];
          b[2] = a[2];
          return this
      },
      set: function(a, b, c) {
          var d = this.elements;
          d[0] = a;
          d[1] = b;
          d[2] = c
      },
      cb: function(a) {
          var b = this.elements;
          a = a.elements;
          return b[0] === a[0] && b[1] === a[1] && b[2] === a[2]
      },
      pn: function(a) {
          var b = this.elements;
          b[0] *= a;
          b[1] *= a;
          b[2] *= a;
          return this
      },
      add: function(a) {
          var b = this.elements;
          a = a.elements;
          b[0] += a[0];
          b[1] += a[1];
          b[2] += a[2];
          return this
      },
      Aka: function(a, b) {
          var c = a.elements
            , d = b.elements
            , e = this.elements;
          e[0] = c[0] + d[0];
          e[1] = c[1] + d[1];
          e[2] = c[2] + d[2];
          return this
      },
      sub: function(a) {
          a = a.elements;
          var b = this.elements;
          b[0] -= a[0];
          b[1] -= a[1];
          b[2] -= a[2];
          return this
      },
      kz: function(a, b) {
          var c = a.elements
            , d = b.elements
            , e = this.elements;
          e[0] = c[0] - d[0];
          e[1] = c[1] - d[1];
          e[2] = c[2] - d[2];
          return this
      },
      zr: function(a) {
          a = a.elements;
          var b = this.elements;
          b[0] = b[1] * a[2] - b[2] * a[1];
          b[1] = b[2] * a[0] - b[0] * a[2];
          b[2] = b[0] * a[1] - b[1] * a[0];
          return this
      },
      Px: function(a, b) {
          var c = a.elements
            , d = b.elements
            , e = this.elements;
          e[0] = c[1] * d[2] - c[2] * d[1];
          e[1] = c[2] * d[0] - c[0] * d[2];
          e[2] = c[0] * d[1] - c[1] * d[0];
          return this
      },
      vf: function(a) {
          a = a.elements;
          var b = this.elements;
          return b[0] * a[0] + b[1] * a[1] + b[2] * a[2]
      },
      re: function(a) {
          return Math.sqrt(this.Y1(a))
      },
      Y1: function(a) {
          var b = a.elements
            , c = this.elements;
          a = c[0] - b[0];
          var d = c[1] - b[1]
            , b = c[2] - b[2];
          return a * a + d * d + b * b
      },
      Lf: function(a) {
          var b = this.elements[0]
            , c = this.elements[1]
            , d = this.elements[2];
          a = a.elements;
          var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
          this.elements[0] = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
          this.elements[1] = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
          this.elements[2] = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
          return this
      }
  });
  g.Oa = pc;
  g.Oa.Nb({
      vf: "dot",
      jb: "clone",
      add: "add",
      sub: "sub",
      Aka: "addVectors",
      kz: "subVectors",
      Px: "crossVectors",
      normalize: "normalize",
      length: "length"
  });
  var qc = g.aa.extend({
      r: function(a) {
          var b = Array(4), c;
          c = a instanceof Array ? a : arguments;
          b[0] = c[0];
          b[1] = c[1];
          b[2] = c[2];
          b[3] = c[3] || 1;
          this.elements = b
      },
      copy: function(a) {
          var b = this.elements;
          a = a.elements;
          b[0] = a[0];
          b[1] = a[1];
          b[2] = a[2];
          b[3] = void 0 !== a[3] ? a[3] : 1;
          return this
      },
      multiply: function(a) {
          var b = this.elements;
          b[0] *= a;
          b[1] *= a;
          b[2] *= a;
          b[3] *= a
      },
      Lf: function(a) {
          var b = this.elements[0]
            , c = this.elements[1]
            , d = this.elements[2]
            , e = this.elements[3];
          a = a.elements;
          this.elements[0] = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
          this.elements[1] = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
          this.elements[2] = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
          this.elements[3] = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
          return this
      }
  });
  g.nl = qc;
  function rc(a, b) {
      this.Oy = void 0 !== a ? a : new g.Oa(1,0,0);
      this.dC = void 0 !== b ? b : 0
  }
  g.sw = rc;
  rc.prototype = {
      set: function(a, b) {
          this.Oy.copy(a);
          this.dC = b;
          return this
      },
      normalize: function() {
          var a = 1 / this.Oy.length();
          this.Oy.pn(a);
          this.dC *= a;
          return this
      },
      FH: function(a) {
          return this.Oy.vf(a) + this.dC
      }
  };
  function uc(a, b, c, d, e) {
      a.Oy.set(b, c, d);
      a.dC = e;
      return a
  }
  ;function vc(a, b, c, d, e, f) {
      this.xD = [void 0 !== a ? a : new g.sw, void 0 !== b ? b : new g.sw, void 0 !== c ? c : new g.sw, void 0 !== d ? d : new g.sw, void 0 !== e ? e : new g.sw, void 0 !== f ? f : new g.sw]
  }
  g.fV = vc;
  vc.prototype = {
      set: function(a, b, c, d, e, f) {
          var h = this.xD;
          h[0].copy(a);
          h[1].copy(b);
          h[2].copy(c);
          h[3].copy(d);
          h[4].copy(e);
          h[5].copy(f);
          return this
      },
      jb: function() {
          return (new g.fV).copy(this)
      },
      copy: function(a) {
          for (var b = this.xD, c = 0; 6 > c; c++)
              b[c].copy(a.xD[c]);
          return this
      },
      II: function() {
          var a = new g.Oa
            , b = new g.Oa
            , c = a.elements
            , d = b.elements;
          return function(e) {
              var f = this.xD
                , h = e.max.elements;
              e = e.min.elements;
              for (var k = 0; 6 > k; k++) {
                  var l = f[k]
                    , m = l.Oy.elements;
                  c[0] = 0 < m[0] ? e[0] : h[0];
                  d[0] = 0 < m[0] ? h[0] : e[0];
                  c[1] = 0 < m[1] ? e[1] : h[1];
                  d[1] = 0 < m[1] ? h[1] : e[1];
                  c[2] = 0 < m[2] ? e[2] : h[2];
                  d[2] = 0 < m[2] ? h[2] : e[2];
                  m = l.FH(a);
                  l = l.FH(b);
                  if (0 > m && 0 > l)
                      return !1
              }
              return !0
          }
      }()
  };
  (function(a) {
      function b(a) {
          this.elements = a || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      }
      a.uV = function(a) {
          this.elements = [a.elements[0], a.elements[1], a.elements[2], a.elements[4], a.elements[5], a.elements[6], a.elements[8], a.elements[9], a.elements[10]]
      }
      ;
      b.prototype.ET = function() {
          var a = this.elements;
          a[0] = 1;
          a[4] = 0;
          a[8] = 0;
          a[12] = 0;
          a[1] = 0;
          a[5] = 1;
          a[9] = 0;
          a[13] = 0;
          a[2] = 0;
          a[6] = 0;
          a[10] = 1;
          a[14] = 0;
          a[3] = 0;
          a[7] = 0;
          a[11] = 0;
          a[15] = 1
      }
      ;
      b.prototype.set = function(a) {
          if (a.elements !== this.elements)
              return this.elements = a.elements.slice(0),
              this
      }
      ;
      b.prototype.toFixed = function(b) {
          for (var d = this.elements, e = 0; 16 > e; ++e)
              0 !== d[e] && (d[e] = a.a.nc(d[e], b));
          return this
      }
      ;
      b.prototype.concat = function(a) {
          var b, e, f, h, k, l, m;
          e = b = this.elements;
          f = a.elements;
          if (b === f)
              for (f = Array(16),
              a = 0; 16 > a; ++a)
                  f[a] = b[a];
          for (a = 0; 4 > a; a++)
              h = e[a],
              k = e[a + 4],
              l = e[a + 8],
              m = e[a + 12],
              b[a] = h * f[0] + k * f[1] + l * f[2] + m * f[3],
              b[a + 4] = h * f[4] + k * f[5] + l * f[6] + m * f[7],
              b[a + 8] = h * f[8] + k * f[9] + l * f[10] + m * f[11],
              b[a + 12] = h * f[12] + k * f[13] + l * f[14] + m * f[15];
          return this
      }
      ;
      b.multiply = function(b, d) {
          var e = Array(16), f, h, k, l, m, n, p;
          k = h = b.elements;
          l = d.elements;
          if (h === l)
              for (f = 0; 16 > f; ++f)
                  e[f] = h[f];
          for (f = 0; 4 > f; f++)
              h = k[f],
              m = k[f + 4],
              n = k[f + 8],
              p = k[f + 12],
              e[f] = h * l[0] + m * l[1] + n * l[2] + p * l[3],
              e[f + 4] = h * l[4] + m * l[5] + n * l[6] + p * l[7],
              e[f + 8] = h * l[8] + m * l[9] + n * l[10] + p * l[11],
              e[f + 12] = h * l[12] + m * l[13] + n * l[14] + p * l[15];
          return new a.Ec(e)
      }
      ;
      b.prototype.multiply = b.prototype.concat;
      b.prototype.mh = function(b) {
          var d = this.elements;
          b = b.elements;
          var e = new a.nl
            , f = e.elements;
          f[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8] + b[3] * d[12];
          f[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9] + b[3] * d[13];
          f[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10] + b[3] * d[14];
          f[3] = b[0] * d[3] + b[1] * d[7] + b[2] * d[11] + b[3] * d[15];
          return e
      }
      ;
      b.prototype.hE = function() {
          var a, b;
          a = this.elements;
          b = a[1];
          a[1] = a[4];
          a[4] = b;
          b = a[2];
          a[2] = a[8];
          a[8] = b;
          b = a[3];
          a[3] = a[12];
          a[12] = b;
          b = a[6];
          a[6] = a[9];
          a[9] = b;
          b = a[7];
          a[7] = a[13];
          a[13] = b;
          b = a[11];
          a[11] = a[14];
          a[14] = b;
          return this
      }
      ;
      b.prototype.Mva = function(a) {
          var b, e, f;
          b = a.elements;
          a = this.elements;
          e = [];
          e[0] = b[5] * (b[10] * b[15] - b[11] * b[14]) - b[9] * (b[6] * b[15] + b[7] * b[14]) + b[13] * (b[6] * b[11] - b[7] * b[10]);
          e[4] = -b[4] * (b[10] * b[15] - b[11] * b[14]) + b[8] * (b[6] * b[15] - b[7] * b[14]) - b[12] * (b[6] * b[11] - b[7] * b[10]);
          e[8] = b[4] * (b[9] * b[15] - b[11] * b[13]) - b[8] * (b[5] * b[15] - b[7] * b[13]) + b[12] * (b[5] * b[11] - b[7] * b[9]);
          e[12] = -b[4] * (b[9] * b[14] - b[10] * b[13]) + b[8] * (b[5] * b[14] - b[6] * b[13]) - b[12] * (b[5] * b[10] - b[6] * b[9]);
          e[1] = -b[1] * (b[10] * b[15] - b[11] * b[14]) + b[9] * (b[2] * b[15] - b[3] * b[14]) - b[13] * (b[2] * b[11] - b[3] * b[10]);
          e[5] = b[0] * (b[10] * b[15] - b[11] * b[14]) - b[8] * (b[2] * b[15] - b[3] * b[14]) + b[12] * (b[2] * b[11] - b[3] * b[10]);
          e[9] = -b[0] * (b[9] * b[15] - b[11] * b[13]) + b[8] * (b[1] * b[15] - b[3] * b[13]) - b[12] * (b[1] * b[11] - b[3] * b[9]);
          e[13] = b[0] * (b[9] * b[14] - b[10] * b[13]) - b[8] * (b[1] * b[14] - b[2] * b[13]) + b[12] * (b[1] * b[10] - b[2] * b[9]);
          e[2] = b[1] * (b[6] * b[15] - b[7] * b[14]) - b[5] * (b[2] * b[15] - b[3] * b[14]) + b[13] * (b[2] * b[7] - b[3] * b[6]);
          e[6] = -b[0] * (b[6] * b[15] - b[7] * b[14]) + b[4] * (b[2] * b[15] - b[3] * b[14]) - b[12] * (b[2] * b[7] - b[3] * b[6]);
          e[10] = b[0] * (b[5] * b[15] - b[7] * b[13]) - b[4] * (b[1] * b[15] - b[3] * b[13]) + b[12] * (b[1] * b[7] - b[3] * b[5]);
          e[14] = -b[0] * (b[5] * b[14] - b[6] * b[13]) + b[4] * (b[1] * b[14] - b[2] * b[13]) - b[12] * (b[1] * b[6] - b[2] * b[5]);
          e[3] = -b[1] * (b[6] * b[11] - b[7] * b[10]) + b[5] * (b[2] * b[11] - b[3] * b[10]) - b[9] * (b[2] * b[7] - b[3] * b[6]);
          e[7] = b[0] * (b[6] * b[11] - b[7] * b[10]) - b[4] * (b[2] * b[11] + b[3] * b[10]) + b[8] * (b[2] * b[7] - b[3] * b[6]);
          e[11] = -b[0] * (b[5] * b[11] + b[7] * b[9]) + b[4] * (b[1] * b[11] - b[3] * b[9]) - b[8] * (b[1] * b[7] + b[3] * b[5]);
          e[15] = b[0] * (b[5] * b[10] - b[6] * b[9]) - b[4] * (b[1] * b[10] + b[2] * b[9]) + b[8] * (b[1] * b[6] - b[2] * b[5]);
          f = b[0] * e[0] + b[1] * e[4] + b[2] * e[8] + b[3] * e[12];
          if (0 === f)
              return this;
          f = 1 / f;
          for (b = 0; 16 > b; b++)
              a[b] = e[b] * f;
          return this
      }
      ;
      b.prototype.Ig = function() {
          return (new b).Mva(this)
      }
      ;
      b.prototype.HT = function(a, b, e, f, h, k) {
          var l, m, n, p;
          if (a === b || e === f || h === k)
              throw "null frustum";
          m = 1 / (b - a);
          n = 1 / (f - e);
          p = 1 / (k - h);
          l = this.elements;
          l[0] = 2 * m;
          l[1] = 0;
          l[2] = 0;
          l[3] = 0;
          l[4] = 0;
          l[5] = 2 * n;
          l[6] = 0;
          l[7] = 0;
          l[8] = 0;
          l[9] = 0;
          l[10] = -2 * p;
          l[11] = 0;
          l[12] = -(b + a) * m;
          l[13] = -(f + e) * n;
          l[14] = -(k + h) * p;
          l[15] = 1;
          return this
      }
      ;
      b.prototype.nta = function(a, d, e, f, h, k) {
          return this.concat((new b).HT(a, d, e, f, h, k))
      }
      ;
      b.prototype.Kva = function(a, b, e, f, h, k) {
          var l, m, n, p;
          if (a === b || f === e || h === k)
              throw "null frustum";
          if (0 >= h)
              throw "near <= 0";
          if (0 >= k)
              throw "far <= 0";
          m = 1 / (b - a);
          n = 1 / (f - e);
          p = 1 / (k - h);
          l = this.elements;
          l[0] = 2 * h * m;
          l[1] = 0;
          l[2] = 0;
          l[3] = 0;
          l[4] = 0;
          l[5] = 2 * h * n;
          l[6] = 0;
          l[7] = 0;
          l[8] = (b + a) * m;
          l[9] = (f + e) * n;
          l[10] = -(k + h) * p;
          l[11] = -1;
          l[12] = 0;
          l[13] = 0;
          l[14] = -2 * h * k * p;
          l[15] = 0;
          return this
      }
      ;
      b.prototype.tQ = function(a, d, e, f, h, k) {
          return this.concat((new b).Kva(a, d, e, f, h, k))
      }
      ;
      b.prototype.z7 = function(a, b, e, f) {
          var h, k;
          if (e === f || 0 === b)
              throw "null frustum";
          if (0 >= e)
              throw "near <= 0";
          if (0 >= f)
              throw "far <= 0";
          a /= 2;
          k = Math.sin(a);
          if (0 === k)
              throw "null frustum";
          h = 1 / (f - e);
          k = Math.cos(a) / k;
          a = this.elements;
          a[0] = k / b;
          a[1] = 0;
          a[2] = 0;
          a[3] = 0;
          a[4] = 0;
          a[5] = k;
          a[6] = 0;
          a[7] = 0;
          a[8] = 0;
          a[9] = 0;
          a[10] = -(f + e) * h;
          a[11] = -1;
          a[12] = 0;
          a[13] = 0;
          a[14] = -2 * e * f * h;
          a[15] = 0;
          return this
      }
      ;
      b.prototype.perspective = function(a, d, e, f) {
          return this.concat((new b).z7(a, d, e, f))
      }
      ;
      b.prototype.yv = function(a, b, e) {
          var f = this.elements;
          f[0] = a;
          f[4] = 0;
          f[8] = 0;
          f[12] = 0;
          f[1] = 0;
          f[5] = b;
          f[9] = 0;
          f[13] = 0;
          f[2] = 0;
          f[6] = 0;
          f[10] = e;
          f[14] = 0;
          f[3] = 0;
          f[7] = 0;
          f[11] = 0;
          f[15] = 1;
          return this
      }
      ;
      b.prototype.scale = function(a, b, e) {
          var f = this.elements;
          f[0] *= a;
          f[4] *= b;
          f[8] *= e;
          f[1] *= a;
          f[5] *= b;
          f[9] *= e;
          f[2] *= a;
          f[6] *= b;
          f[10] *= e;
          f[3] *= a;
          f[7] *= b;
          f[11] *= e;
          return this
      }
      ;
      b.prototype.C7 = function(a, b, e) {
          var f = this.elements;
          f[12] = a;
          f[13] = b;
          f[14] = e;
          return this
      }
      ;
      b.prototype.translate = function(a, b, e) {
          var f = this.elements;
          f[12] += f[0] * a + f[4] * b + f[8] * e;
          f[13] += f[1] * a + f[5] * b + f[9] * e;
          f[14] += f[2] * a + f[6] * b + f[10] * e;
          f[15] += f[3] * a + f[7] * b + f[11] * e;
          return this
      }
      ;
      b.prototype.fz = function(a, b, e, f) {
          var h, k, l, m, n, p, q, r;
          a = Math.PI * a / 180;
          h = this.elements;
          k = Math.sin(a);
          a = Math.cos(a);
          0 !== b && 0 === e && 0 === f ? (0 > b && (k = -k),
          h[0] = 1,
          h[4] = 0,
          h[8] = 0,
          h[12] = 0,
          h[1] = 0,
          h[5] = a,
          h[9] = -k,
          h[13] = 0,
          h[2] = 0,
          h[6] = k,
          h[10] = a,
          h[14] = 0,
          h[3] = 0,
          h[7] = 0,
          h[11] = 0) : 0 === b && 0 !== e && 0 === f ? (0 > e && (k = -k),
          h[0] = a,
          h[4] = 0,
          h[8] = k,
          h[12] = 0,
          h[1] = 0,
          h[5] = 1,
          h[9] = 0,
          h[13] = 0,
          h[2] = -k,
          h[6] = 0,
          h[10] = a,
          h[14] = 0,
          h[3] = 0,
          h[7] = 0,
          h[11] = 0) : 0 === b && 0 === e && 0 !== f ? (0 > f && (k = -k),
          h[0] = a,
          h[4] = -k,
          h[8] = 0,
          h[12] = 0,
          h[1] = k,
          h[5] = a,
          h[9] = 0,
          h[13] = 0,
          h[2] = 0,
          h[6] = 0,
          h[10] = 1,
          h[14] = 0,
          h[3] = 0,
          h[7] = 0,
          h[11] = 0) : (l = Math.sqrt(b * b + e * e + f * f),
          1 !== l && (l = 1 / l,
          b *= l,
          e *= l,
          f *= l),
          l = 1 - a,
          m = b * e,
          n = e * f,
          p = f * b,
          q = b * k,
          r = e * k,
          k *= f,
          h[0] = b * b * l + a,
          h[1] = m * l + k,
          h[2] = p * l - r,
          h[3] = 0,
          h[4] = m * l - k,
          h[5] = e * e * l + a,
          h[6] = n * l + q,
          h[7] = 0,
          h[8] = p * l + r,
          h[9] = n * l - q,
          h[10] = f * f * l + a,
          h[11] = 0,
          h[12] = 0,
          h[13] = 0,
          h[14] = 0);
          h[15] = 1;
          return this
      }
      ;
      b.prototype.rotate = function(a, d, e, f) {
          return this.concat((new b).fz(a, d, e, f))
      }
      ;
      b.prototype.Cs = function(a) {
          return this.rotate(a, 1, 0, 0)
      }
      ;
      b.prototype.Ds = function(a) {
          return this.rotate(a, 0, 1, 0)
      }
      ;
      b.prototype.Es = function(a) {
          return this.rotate(a, 0, 0, 1)
      }
      ;
      a.Ec = b
  }
  )(g);
  z.w.at = z.w.yc.extend({
      B: {
          visible: !0,
          zIndex: 10,
          strokeColor: "#006600",
          strokeOpacity: 0.9,
          strokeWeight: 3,
          strokeStyle: "solid",
          strokeDasharray: [10, 5],
          radius: [1E3, 1E3],
          fillColor: "#006600",
          fillOpacity: 0.9
      },
      r: function() {
          var a = this
            , b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          this.CLASS_NAME = "AMap.Ellipse";
          g.c.ya(this, b);
          var b = g.extend({}, this.B, b)
            , c = this.nr(b);
          b.path = c;
          z.w.at.Sc.r.call(this, b);
          this.set("path", c);
          this.get("center") && this.get("map") || (this.Kg = !1);
          this.on("movepoly", function(b) {
              var c = a.get("map");
              b = c.Qd(c.Ab(a.get("center")).add(b.zJ));
              "3D" === c.view.type && a.set("deltaPos", [0, 0], !0);
              a.set("center", b)
          })
      },
      nr: function() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
            , b = []
            , c = a.center || this.get("center")
            , d = a.map || this.get("map");
          if (c && d)
              for (var c = g.a.Ha(c), e = a.radius || this.get("radius"), f = d.Ab(c), a = f.x, f = f.y, h = g.a.map(e, function(a) {
                  return a / d.getResolution(c, 20)
              }), e = h[0], h = h[1], k = g.l.Z, l = (k ? 4 : 1) * Math.PI / 180, m = 0, k = k ? 89 : 359; m <= k; m++) {
                  var n = m * l
                    , n = {
                      x: a + e * Math.cos(n),
                      y: f + h * Math.sin(n)
                  };
                  b.push(d.Qd(n))
              }
          return b
      },
      mapChanged: function() {
          g.a.Eh(z.w.at.Sc.mapChanged) && z.w.at.Sc.mapChanged.apply(this);
          this.C = !0;
          this.setPath(this.nr());
          this.C = !1;
          !this.Kg && this.get("map") && (this.Kg = !0,
          this.get("map").q("overlays"))
      },
      setCenter: function(a, b) {
          g.c.add(this, "setCenter");
          (a = g.a.Ha(a)) && a instanceof g.T && (this.w && this.w.get("deltaPos") && this.w.set("deltaPos", [0, 0], !0),
          this.set("center", a),
          this.set("path", this.nr()),
          this.Kg || (this.Kg = !0,
          this.get("map") && this.get("map").q("overlays")),
          b || (this.q("setCenter"),
          this.q("change", {
              type: "change",
              target: this
          })))
      },
      setRadius: function(a) {
          var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
          g.c.add(this, "setRadius");
          a && 2 === a.length && (this.set("radius", a),
          this.set("path", this.nr()),
          b || (this.q("change", {
              type: "change",
              target: this
          }),
          this.q("setPath")))
      },
      setOptions: function(a) {
          z.w.at.Sc.setOptions.call(this, a);
          this.C = !0;
          a.radius && this.setRadius(a.radius, !0);
          a.center && this.setCenter(a.center, !0);
          this.C = !1
      },
      getRadius: function() {
          g.c.add(this, "getRadius");
          return this.get("radius", null, !0)
      },
      getCenter: function() {
          g.c.add(this, "getCenter");
          var a = this.get("center", null, !0);
          this.w && this.w.get("deltaPos") && this.w.GA([a], this.w.get("deltaPos"))[0];
          return a
      }
  });
  z.w.ht = z.w.yc.extend({
      B: {
          visible: !0,
          zIndex: 10,
          strokeColor: "#006600",
          strokeOpacity: 0.9,
          strokeWeight: 3,
          strokeStyle: "solid",
          strokeDasharray: [10, 5],
          fillColor: "#006600",
          fillOpacity: 0.9
      },
      r: function() {
          var a = this
            , b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          this.CLASS_NAME = "AMap.Rectangle";
          g.c.ya(this, b);
          b = g.extend({}, this.B, b);
          this.C = !0;
          var c = this.nr(b);
          b.path = c;
          z.w.ht.Sc.r.call(this, b);
          this.setPath(c);
          this.B.bounds && this.get("map") || (this.Kg = !1);
          this.on("movepoly", function(b) {
              var c = a.get("map")
                , f = a.get("bounds")
                , h = c.Qd(c.Ab(f.xc).add(b.zJ));
              b = c.Qd(c.Ab(f.oc).add(b.zJ));
              "3D" === c.view.type && a.set("deltaPos", [0, 0]);
              a.set("bounds", new g.me(h,b))
          });
          this.C = !1
      },
      nr: function() {
          var a = []
            , b = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).bounds || this.get("bounds");
          if (b) {
              b.C = !0;
              var c = b.getSouthWest()
                , d = b.getNorthEast();
              b.C = !1;
              g.a.Rb([new g.T(c.Q,c.P,!0), new g.T(d.Q,c.P,!0), new g.T(d.Q,d.P,!0), new g.T(c.Q,d.P,!0)], function(b) {
                  return a.push(b)
              })
          }
          return a
      },
      mapChanged: function() {
          g.a.Eh(z.w.ht.Sc.mapChanged) && z.w.ht.Sc.mapChanged.apply(this);
          this.C = !0;
          this.setPath(this.nr());
          this.C = !1;
          !this.Kg && this.get("map") && (this.Kg = !0,
          this.get("map").q("overlays"))
      },
      setOptions: function(a) {
          this.C = !0;
          z.w.ht.Sc.setOptions.call(this, a);
          a.bounds && this.setBounds(a.bounds, !0);
          this.C = !1
      },
      setBounds: function(a) {
          var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
          g.c.add(this, "setBounds");
          a && a instanceof g.me && (this.set("bounds", a),
          this.set("path", this.nr()),
          this.Kg || (this.Kg = !0,
          this.get("map") && this.get("map").q("overlays")),
          b || (this.q("change", {
              type: "change",
              target: this
          }),
          this.q("setBounds")))
      },
      getBounds: function() {
          g.c.add(this, "getBounds");
          return this.get("bounds", null, !0)
      }
  });
  z.w.IV = z.w.rb.extend({
      B: {
          text: "",
          textAlign: "center",
          verticalAlign: "middle",
          offset: new g.H(0,0)
      },
      r: function(a) {
          this.CLASS_NAME = "AMap.Text";
          g.c.ya(this, a);
          z.w.IV.Sc.r.apply(this, arguments);
          this.Kea();
          this.C = !0;
          this.setText(this.get("text"));
          this.setStyle(this.get("style"));
          this.C = !1
      },
      Kea: function() {
          if (!this.DB) {
              var a = document.createElement("div");
              a.className = "amap-overlay-text-container";
              this.DB = a
          }
      },
      getText: function() {
          g.c.add(this, "getText");
          return this.get("text", null, !0)
      },
      setText: function(a) {
          g.c.add(this, "setText");
          a || 0 === a || (a = "");
          g.j.Rwa(this.DB, "amap-overlay-text-empty", !a);
          g.c.add(this, "setText");
          this.set("text", a);
          this.DB.innerHTML = a;
          this.K6()
      },
      setStyle: function(a) {
          g.c.add(this, "setStyle");
          a = a || {};
          for (var b in a)
              a.hasOwnProperty(b) && (this.DB.style[b] = a[b]);
          this.K6()
      },
      K6: function() {
          this.C = !0;
          this.setContent(this.DB);
          this.setShadow(this.getShadow());
          this.C = !1
      }
  });
  g.iV = {
      find: function(a) {
          return g.a.find(this.Cw || [], a)
      },
      fI: function() {
          return this.Cw || []
      },
      Wc: function(a) {
          return null !== this.find(a)
      },
      add: function(a) {
          var b = this
            , c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.ns
            , d = this.Cw || (this.Cw = []);
          g.a.isArray(a) ? g.a.Rb(a, function(a) {
              b.add(a, c)
          }) : null === this.find(a) && (d.push(a),
          c(a));
          return this
      },
      remove: function(a) {
          var b = this
            , c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.ns
            , d = this.Cw;
          if (d)
              if (g.a.isArray(a))
                  g.a.Rb(a, function(a) {
                      b.remove(a, c)
                  });
              else {
                  var e = g.a.indexOf(d, a);
                  -1 !== e && (c(d[e]),
                  d.splice(e, 1))
              }
          return this
      },
      clear: function() {
          this.Rb(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.ns);
          this.Cw = [];
          return this
      },
      Rb: function() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.ns
            , b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
          g.a.Rb(this.Cw || [], function() {
              for (var c = arguments.length, d = Array(c), e = 0; e < c; e++)
                  d[e] = arguments[e];
              c = d[0];
              g.a.Eh(c.Rb) ? c.Rb(a, b) : a.apply(b || c, d)
          });
          return this
      },
      uo: function(a) {
          for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++)
              c[d - 1] = arguments[d];
          this.Rb(function(b) {
              b && g.a.Eh(b[a]) && b[a].apply(b, c)
          });
          return this
      },
      g: function(a) {
          var b = arguments;
          this.Rb(function(a) {
              a.on.apply(a, b)
          });
          return this
      },
      G: function(a) {
          var b = arguments;
          this.Rb(function(a) {
              a.off.apply(a, b)
          });
          return this
      },
      addListener: function() {
          this.g.apply(this, arguments)
      },
      yx: function(a) {
          var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.ns
            , c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          this.Rb(function(d) {
              d.on.call(d, event, function() {
                  b();
                  d.off(a)
              }, c)
          })
      },
      removeListener: function(a) {
          this.G(a.$P, a.hR, a.Qe)
      },
      O: function(a, b) {
          this.Rb(function(c) {
              c.emit(a, b)
          })
      }
  };
  z.w.zn = z.w.sh.extend({
      ja: [g.iV],
      r: function() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
          this.CLASS_NAME = "AMap.OverlayGroup";
          g.c.ya(this);
          z.w.zn.Sc.r.apply(this);
          this.map = null;
          this.add(a)
      },
      pc: function(a) {
          g.c.add(this, "setMap");
          this.uo("setMap", a);
          this.uo("setMap", a);
          this.set("map", a);
          this.map = a;
          return this
      },
      mapChanged: function() {},
      LB: function(a) {
          var b = this;
          g.c.add(this, "addOverlay");
          this.add(a, function(a) {
              b.map && (a.C = !0,
              a.setMap(b.map),
              a.C = !1)
          });
          return this
      },
      Yy: function(a) {
          var b = this;
          g.c.add(this, "removeOverlay");
          this.remove(a, function(a) {
              a.C = !0;
              a.getMap() === b.map && a.setMap(null);
              a.C = !1
          });
          return this
      },
      cd: function() {
          var a = this;
          g.c.add(this, "clearOverlays");
          this.clear(function(b) {
              b.C = !0;
              b.getMap() === a.map && b.setMap(null);
              b.C = !1
          });
          return this
      },
      ty: function() {
          g.c.add(this, "hide");
          this.uo("hide");
          return this
      },
      show: function() {
          g.c.add(this, "show");
          this.uo("show");
          return this
      },
      Db: function() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          g.c.add(this, "setOptions");
          this.uo("setOptions", a);
          return this
      }
  });
  z.w.zn.Nb({
      find: "getOverlay",
      fI: "getOverlays",
      LB: ["addOverlay", "addOverlays"],
      Wc: "hasOverlay",
      Yy: ["removeOverlay", "removeOverlays"],
      cd: "clearOverlays",
      Rb: "eachOverlay",
      pc: "setMap",
      Db: "setOptions",
      show: "show",
      ty: "hide",
      g: "on",
      G: "off"
  });
  (function(a, b) {
      function c(a, b) {
          if (!a.length)
              return !1;
          for (var c = 0, d = a.length; c < d; c++) {
              var e = a[c];
              if (!("*" === b || e && e.geometry && e.geometry.type === b) || e && e.properties && !e.properties._isAmap)
                  return !1
          }
          return !0
      }
      function d(a) {
          for (var b = [], c = 0, d = a.length; c < d; c++)
              b.push(a[c].geometry.coordinates);
          return b
      }
      function e(a) {
          if (!a || !a.length)
              return [];
          a = b.a.Ha(a);
          for (var c = [], d = 0, e = a.length; d < e; d++)
              c[d] = a[d].fl();
          a[a.length - 1].cb(a[0]) || c.push(a[0].fl());
          return c
      }
      a.w.gV = a.w.zn.extend({
          r: function(c) {
              this.CLASS_NAME = "AMap.GeoJSON";
              b.c.ya(this, c);
              a.w.gV.Sc.r.call(this, []);
              this.C = !0;
              this.B = b.extend({
                  getMarker: function(b, c) {
                      return new a.w.rb({
                          innerOverlay: !0,
                          position: c
                      })
                  },
                  getPolyline: function(b, c) {
                      return new a.w.Xb({
                          path: c,
                          innerOverlay: !0
                      })
                  },
                  getPolygon: function(b, c) {
                      return new a.w.yc({
                          path: c,
                          innerOverlay: !0
                      })
                  },
                  coordsToLatLng: function(a) {
                      return a
                  }
              }, c);
              if (!this.B.coordsToLatLngs) {
                  var d = this.B.coordsToLatLng;
                  this.B.coordsToLatLngs = function(a) {
                      for (var b = [], c = 0, e = a.length; c < e; c++)
                          b.push(d.call(null, a[c]));
                      return b
                  }
              }
              this.importData(this.B.geoJSON);
              this.C = !1
          },
          importData: function(a) {
              b.c.add(this, "importData");
              if (a && (a = this.Fea(a),
              a.length)) {
                  this.clearOverlays();
                  this.LB(a);
                  var c = this.B.map;
                  if (c)
                      for (var d = 0, e = a.length; d < e; d++)
                          a[d].C = !0,
                          a[d].setMap(c),
                          a[d].C = !1
              }
          },
          toGeoJSON: function() {
              b.c.add(this, "toGeoJSON");
              for (var a = this.fI(), c = [], d = 0, e = a.length; d < e; d++)
                  a[d].C = !0,
                  c[d] = a[d].toGeoJSON(),
                  a[d].C = !1;
              return c
          },
          Fea: function(a) {
              if (a) {
                  b.a.isArray(a) || (a = [a]);
                  for (var c = [], d = 0, e = a.length; d < e; d++) {
                      var m = this.Gea(a[d]);
                      m && c.push(m)
                  }
                  return c
              }
          },
          zW: function(a) {
              var b = "Feature" === a.type ? a.geometry : a
                , b = this.B.coordsToLatLng(b ? b.coordinates : null)
                , b = this.B.getMarker(a, b);
              this.er(a, b);
              return b
          },
          vba: function(c) {
              for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++)
                  e.push(this.zW(b.extend({}, c, {
                      type: "Feature",
                      properties: {
                          _isAmap: !0,
                          _pointIndex: l,
                          _parentProperities: c.properties
                      },
                      geometry: {
                          type: "Point",
                          coordinates: d[l]
                      }
                  })));
              d = new a.w.zn(e);
              this.er(c, d);
              return d
          },
          yW: function(a) {
              var b = "Feature" === a.type ? a.geometry : a
                , b = this.B.coordsToLatLngs(b ? b.coordinates : null)
                , b = this.B.getPolyline(a, b);
              this.er(a, b);
              return b
          },
          uba: function(c) {
              for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++)
                  e.push(this.yW(b.extend({}, c, {
                      type: "Feature",
                      properties: {
                          _isAmap: !0,
                          _lineStringIndex: l,
                          _parentProperities: c.properties
                      },
                      geometry: {
                          type: "LineString",
                          coordinates: d[l]
                      }
                  })));
              d = new a.w.zn(e);
              this.er(c, d);
              return d
          },
          AW: function(a) {
              for (var b = "Feature" === a.type ? a.geometry : a, b = b ? b.coordinates : null, c = [], d = 0, e = b.length; d < e; d++)
                  c.push(this.B.coordsToLatLngs(b[d]));
              b = this.B.getPolygon(a, c);
              this.er(a, b);
              return b
          },
          wba: function(c) {
              for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++)
                  e.push(this.AW(b.extend({}, c, {
                      type: "Feature",
                      properties: {
                          _isAmap: !0,
                          _polygonIndex: l,
                          _parentProperities: c.properties
                      },
                      geometry: {
                          type: "Polygon",
                          coordinates: d[l]
                      }
                  })));
              d = new a.w.zn(e);
              this.er(c, d);
              return d
          },
          oba: function(c) {
              for (var d = ("Feature" === c.type ? c.geometry : c).geometries, e = [], l = 0, m = d.length; l < m; l++)
                  e.push(this.RM(b.extend({}, c, {
                      type: "Feature",
                      properties: {
                          _isAmap: !0,
                          _geometryIndex: l,
                          _parentProperities: c.properties
                      },
                      geometry: d[l]
                  })));
              d = new a.w.zn(e);
              this.er(c, d);
              return d
          },
          Gea: function(b) {
              if (b)
                  switch (b.type) {
                  case "Feature":
                      return this.RM(b);
                  case "FeatureCollection":
                      for (var c = b.features, d = [], e = 0, m = c.length; e < m; e++) {
                          var n = this.RM(c[e]);
                          n && d.push(n)
                      }
                      c = new a.w.zn(d);
                      this.er(b, c);
                      return c;
                  default:
                      throw Error("Invalid GeoJSON object." + b.type);
                  }
          },
          er: function(a, c) {
              c && a.properties && c.setExtData && (c.C = !0,
              c.setExtData(b.extend({}, c.getExtData() || {}, {
                  _geoJsonProperties: a.properties
              })),
              c.C = !1)
          },
          RM: function(a) {
              var b = "Feature" === a.type ? a.geometry : a;
              if (!(b && b.coordinates || b))
                  return null;
              switch (b.type) {
              case "Point":
                  return this.zW(a);
              case "MultiPoint":
                  return this.vba(a);
              case "LineString":
                  return this.yW(a);
              case "MultiLineString":
                  return this.uba(a);
              case "Polygon":
                  return this.AW(a);
              case "MultiPolygon":
                  return this.wba(a);
              case "GeometryCollection":
                  return this.oba(a);
              default:
                  throw Error("Invalid GeoJSON geometry." + b.type);
              }
          }
      });
      a.w.zn.zb({
          toGeoJSON: function(a) {
              b.c.add(this, "toGeoJSON");
              a = a || this.fI();
              for (var e = [], k = 0, l = a.length; k < l; k++)
                  a[k].toGeoJSON && (a[k].C = !0,
                  e[k] = a[k].toGeoJSON(),
                  a[k].C = !1);
              this.C = !0;
              a = this.getExtData() || {};
              this.C = !1;
              if (c(e, "Point"))
                  e = {
                      type: "Feature",
                      properties: a._geoJsonProperties || {},
                      geometry: {
                          type: "MultiPoint",
                          coordinates: d(e)
                      }
                  };
              else if (c(e, "LineString"))
                  e = {
                      type: "Feature",
                      properties: a._geoJsonProperties || {},
                      geometry: {
                          type: "MultiLineString",
                          coordinates: d(e)
                      }
                  };
              else if (c(e, "Polygon"))
                  e = {
                      type: "Feature",
                      properties: a._geoJsonProperties || {},
                      geometry: {
                          type: "MultiPolygon",
                          coordinates: d(e)
                      }
                  };
              else if (c(e, "*")) {
                  a = a._geoJsonProperties || {};
                  for (var k = [], l = 0, m = e.length; l < m; l++)
                      k.push(e[l].geometry);
                  e = {
                      type: "Feature",
                      properties: a,
                      geometry: {
                          type: "GeometryCollection",
                          geometries: k
                      }
                  }
              } else
                  e = {
                      type: "FeatureCollection",
                      properties: a._geoJsonProperties || {},
                      features: e
                  };
              return e
          }
      });
      a.w.rb.zb({
          toGeoJSON: function() {
              b.c.add(this, "toGeoJSON");
              this.C = !0;
              var a = this.getExtData() || {}
                , c = this.getPosition().fl();
              this.C = !1;
              return {
                  type: "Feature",
                  properties: a._geoJsonProperties || {},
                  geometry: {
                      type: "Point",
                      coordinates: c
                  }
              }
          }
      });
      a.w.Xb.zb({
          toGeoJSON: function() {
              b.c.add(this, "toGeoJSON");
              this.C = !0;
              var a = this.getExtData() || {}
                , c = this.getPath();
              this.C = !1;
              return {
                  type: "Feature",
                  properties: a._geoJsonProperties || {},
                  geometry: {
                      type: "LineString",
                      coordinates: e(c)
                  }
              }
          }
      });
      a.w.yc.zb({
          toGeoJSON: function() {
              b.c.add(this, "toGeoJSON");
              this.C = !0;
              var a = this.getExtData() || {}
                , c = this.getPath();
              this.C = !1;
              a = a._geoJsonProperties || {};
              if (c) {
                  c = b.a.Ha(c);
                  b.a.isArray(c[0]) || (c = [c]);
                  for (var d = [], l = 0, m = c.length; l < m; l++)
                      d[l] = e(c[l]);
                  c = d
              } else
                  c = [];
              return {
                  type: "Feature",
                  properties: a,
                  geometry: {
                      type: "Polygon",
                      coordinates: c
                  }
              }
          }
      })
  }
  )(z, g);
  z.o.XK = z.o.Tb.extend({
      ja: [g.iV],
      r: function(a) {
          var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          this.CLASS_NAME = "AMap.LayerGroup";
          g.c.ya(this, b);
          z.o.XK.Sc.r.call(this, b);
          this.map = null;
          this.add(a)
      },
      pc: function(a) {
          g.c.add(this, "setMap");
          this.uo("setMap", a);
          this.set("map", a);
          this.map = a;
          return this
      },
      mapChanged: function() {},
      bH: function(a) {
          var b = this;
          g.c.add(this, "addLayer");
          this.add(a, function(a) {
              b.map && (a.C = !0,
              a.setMap(b.map),
              a.C = !1)
          });
          return this
      },
      bk: function(a) {
          var b = this;
          g.c.add(this, "removeLayer");
          this.remove(a, function(a) {
              a.C = !0;
              a.getMap() === b.map && a.setMap(null);
              a.C = !1
          });
          return this
      },
      Yla: function() {
          var a = this;
          g.c.add(this, "clearLayers");
          this.clear(function(b) {
              b.C = !0;
              b.getMap() === a.map && b.setMap(null);
              b.C = !1
          });
          return this
      },
      ty: function() {
          g.c.add(this, "hide");
          this.uo("hide");
          return this
      },
      show: function() {
          g.c.add(this, "show");
          this.uo("show");
          return this
      },
      reload: function() {
          this.uo("reload");
          return this
      },
      Db: function() {
          var a = this
            , b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          g.c.add(this, "setOptions");
          var c = g.a.keys(b);
          g.a.Rb(c, function(c) {
              a.uo("set", c, b[c])
          });
          return this
      }
  });
  z.o.XK.Nb({
      find: "getLayer",
      fI: "getLayers",
      bH: ["addLayer", "addLayers"],
      Wc: "hasLayer",
      bk: ["removeLayer", "removeLayers"],
      Yla: "clearLayers",
      Rb: "eachLayer",
      pc: "setMap",
      Db: "setOptions",
      show: "show",
      ty: "hide",
      reload: "reload",
      g: "on",
      G: "off"
  });
  g.B$ = z.Kb.extend({
      r: function(a, b) {
          b && (b.center = b.position,
          b.zoom = 11);
          arguments.callee.ka.apply(this, arguments);
          window.console && window.console.log && window.console.log("\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002")
      }
  });
  g.C$ = z.w.rb.extend({
      r: function(a) {
          arguments.callee.ka.apply(this, arguments)
      }
  });
  g.wd = {
      Dr: function(a, b) {
          for (var c = Infinity, d = 0, e = 1, f = b.length; e < f; d = e,
          e += 1)
              c = Math.min(c, g.wd.hwa(a, [b[d], b[e]]));
          return Math.sqrt(c)
      },
      hwa: function(a, b) {
          return this.iK(a, this.A1(a, b))
      },
      iK: function(a, b) {
          var c = a[0] - b[0]
            , d = a[1] - b[1];
          return c * c + d * d
      },
      GEa: function(a, b, c, d) {
          d = d || 1E-6;
          if (c[0] === b[0]) {
              var e = Math.min(b[1], c[1]);
              b = Math.max(b[1], c[1]);
              return Math.abs(a[0] - c[0]) < d && a[1] >= e && a[1] <= b
          }
          var e = Math.min(b[0], c[0])
            , f = Math.max(b[0], c[0]);
          return Math.abs((c[1] - b[1]) / (c[0] - b[0]) * (a[0] - b[0]) + b[1] - a[1]) < d && a[0] >= e && a[0] <= f
      },
      A1: function(a, b) {
          var c = a[0]
            , d = a[1]
            , e = b[0]
            , f = b[1]
            , h = e[0]
            , e = e[1]
            , k = f[0]
            , f = f[1]
            , l = k - h
            , m = f - e
            , c = 0 === l && 0 === m ? 0 : (l * (c - h) + m * (d - e)) / (l * l + m * m || 0);
          0 >= c || (1 <= c ? (h = k,
          e = f) : (h += c * l,
          e += c * m));
          return [h, e]
      },
      Pp: function(a) {
          for (var b = a.length, c = 0, d = a[b - 1], e = d[0], d = d[1], f, h, k = 0; k < b; k += 1)
              h = a[k],
              f = h[0],
              h = h[1],
              c += (f - e) * (h + d),
              e = f,
              d = h;
          return 0 < c
      },
      Nd: function(a, b, c) {
          var d = a[0];
          a = a[1];
          var e = !1, f, h, k, l, m = b.length, n = 0;
          for (l = m - 1; n < m; l = n,
          n += 1) {
              var p = !1;
              f = b[n][0];
              h = b[n][1];
              k = b[l][0];
              l = b[l][1];
              if (f === d && h === a || k === d && l === a)
                  return c ? !0 : !1;
              if (h < a === l >= a) {
                  f = (k - f) * (a - h) / (l - h) + f;
                  if (d === f)
                      return c ? !0 : !1;
                  p = d < f
              }
              p && (e = !e)
          }
          return e
      },
      t6: function(a, b) {
          function c(a, b, c, d) {
              var e = [a[0] - b[0], a[1] - b[1]]
                , f = [c[0] - d[0], c[1] - d[1]];
              a = a[0] * b[1] - a[1] * b[0];
              c = c[0] * d[1] - c[1] * d[0];
              d = 1 / (e[0] * f[1] - e[1] * f[0]);
              return [(a * f[0] - c * e[0]) * d, (a * f[1] - c * e[1]) * d]
          }
          function d(a, b, c) {
              return (c[0] - b[0]) * (a[1] - b[1]) > (c[1] - b[1]) * (a[0] - b[0])
          }
          var e, f, h, k, l = a;
          e = b[b.length - 2];
          for (var m = 0, n = b.length - 1; m < n; m++) {
              f = b[m];
              var p = l
                , l = [];
              h = p[p.length - 1];
              for (var q = 0, r = p.length; q < r; q++)
                  k = p[q],
                  d(k, e, f) ? (d(h, e, f) || l.push(c(e, f, h, k)),
                  l.push(k)) : d(h, e, f) && l.push(c(e, f, h, k)),
                  h = k;
              e = f
          }
          if (3 > l.length)
              return [];
          l.push(l[0]);
          return l
      }
  };
  (function(a) {
      function b(b, c) {
          var d;
          a: {
              switch (b) {
              case "EPSG3395":
                  d = a.Ph.bV;
                  break a;
              case "EPSG4326":
                  d = a.Ph.cV;
                  break a
              }
              d = a.Ph.PK
          }
          return {
              project: function(b) {
                  a.a.isArray(b) && (b = new a.T(b[0],b[1]));
                  return d.$C(b, c).fl()
              },
              unproject: function(b) {
                  a.a.isArray(b) && (b = new a.H(b[0],b[1]));
                  return d.AD(b, c).fl()
              },
              normalizePoint: function(b) {
                  return a.a.Ha(b)
              },
              distance: function(b, c) {
                  c = this.normalizePoint(c);
                  if (a.a.isArray(c))
                      return this.distanceToLine(b, c);
                  b = this.normalizePoint(b);
                  var d = a.qm.lu
                    , e = Math.cos
                    , f = b.P * d
                    , h = c.P * d
                    , k = 2 * a.qm.VP
                    , d = c.Q * d - b.Q * d
                    , e = (1 - e(h - f) + (1 - e(d)) * e(f) * e(h)) / 2;
                  return k * Math.asin(Math.sqrt(e))
              },
              ringArea: function(b) {
                  b = this.normalizeLine(b);
                  var c = a.qm.VP * a.qm.lu
                    , d = 0
                    , e = b.length;
                  if (3 > e)
                      return 0;
                  for (var f = 0; f < e - 1; f += 1)
                      var h = b[f]
                        , k = b[f + 1]
                        , u = h.Q * c * Math.cos(h.P * a.qm.lu)
                        , h = h.P * c
                        , v = k.Q * c * Math.cos(k.P * a.qm.lu)
                        , d = d + (u * k.P * c - v * h);
                  f = b[f];
                  b = b[0];
                  e = f.Q * c * Math.cos(f.P * a.qm.lu);
                  f = f.P * c;
                  k = b.Q * c * Math.cos(b.P * a.qm.lu);
                  d += e * b.P * c - k * f;
                  return 0.5 * Math.abs(d)
              },
              sphericalCalotteArea: function(b) {
                  var c = a.qm.VP;
                  b = c - c * Math.cos(b / c);
                  return 2 * Math.PI * c * b
              }
          }
      }
      function c() {
          return {
              normalizePoint: function(a) {
                  return a && a.x && a.y ? [a.x, a.y] : a
              },
              distance: function(a, b) {
                  var c = a[0] - b[0]
                    , d = a[1] - b[1];
                  return Math.sqrt(c * c + d * d)
              },
              project: function(a) {
                  return a
              },
              unproject: function(a) {
                  return a
              },
              ringArea: function(a) {
                  for (var b = [0, 0], c = [0, 0], d = 0, e = a[0], n = a.length, p = 2; p < n; p++) {
                      var q = a[p - 1]
                        , r = a[p];
                      b[0] = e[0] - r[0];
                      b[1] = e[1] - r[1];
                      c[0] = e[0] - q[0];
                      c[1] = e[1] - q[1];
                      d += b[0] * c[1] - b[1] * c[0]
                  }
                  return d / 2
              }
          }
      }
      function d(a) {
          for (var b = 0, c = a.length, d = 0; d < c - 1; d++)
              var e = a[d]
                , n = a[d + 1]
                , b = b + (n[0] - e[0]) * (n[1] + e[1]);
          if (a[c - 1][0] !== a[0][0] || a[c - 1][1] !== a[0][1])
              e = a[c - 1],
              n = a[0],
              b += (n[0] - e[0]) * (n[1] + e[1]);
          return 0 >= b
      }
      function e(b) {
          this.CLASS_NAME = "AMap.GeometryUtil";
          this.Pb = a.extend({
              onSegmentTolerance: 5,
              crs: "EPSG3857",
              maxZoom: 20
          }, b);
          this.setCrs(this.Pb.crs)
      }
      a.extend(e.prototype, {
          clone: function(b) {
              return new e(a.extend({}, this.Pb, b))
          },
          isPoint: function(b) {
              return b && (b instanceof a.T || a.a.isArray(b) && !isNaN(b[0]))
          },
          normalizePoint: function(a) {
              return a
          },
          normalizeLine: function(a) {
              for (var b = [], c = 0, d = a.length; c < d; c++)
                  b.push(this.normalizePoint(a[c]));
              return b
          },
          normalizeMultiLines: function(b) {
              a.a.isArray(b) && this.isPoint(b[0]) && (b = [b]);
              for (var c = [], d = 0, e = b.length; d < e; d++)
                  c.push(this.normalizeLine(b[d]));
              return c
          },
          setCrs: function(d) {
              a.extend(this, d && d.project && d.unproject ? d : "plane" === d ? c() : b(d, this.Pb.maxZoom))
          },
          distance: function() {
              throw Error("distance Not implemented!");
          },
          $w: function(a, b) {
              a = this.normalizeLine(a);
              this.isPoint(a[0]) || (a = a[0]);
              for (var c = [], d = 0, e = a.length; d < e; d++)
                  c.push(this.project(a[d]));
              !0 === b ? c = this.makesureClockwise(c) : !1 === b && (c = this.makesureClockwise(c),
              c.reverse());
              return c
          },
          Fia: function(a) {
              for (var b = [], c = 0, d = a.length; c < d; c++)
                  b.push(this.unproject(a[c]));
              return b
          },
          closestOnSegment: function(b, c, d) {
              b = a.wd.A1(this.project(b), this.$w([c, d]));
              return this.unproject(b)
          },
          closestOnLine: function(a, b) {
              b = this.normalizeLine(b);
              for (var c = Infinity, d, e = 0, n = b.length; e < n - 1; e++) {
                  var p = this.closestOnSegment(a, b[e], b[e + 1])
                    , q = this.distance(a, p);
                  q < c && (c = q,
                  d = p)
              }
              return d
          },
          distanceToSegment: function(a, b, c) {
              return this.distanceToLine(a, [b, c])
          },
          distanceToLine: function(a, b) {
              b = this.normalizeLine(b);
              this.isPoint(b[0]) || (b = b[0]);
              for (var c = Infinity, d = 0, e = b.length; d < e - 1; d++)
                  var n = this.closestOnSegment(a, b[d], b[d + 1])
                    , c = Math.min(c, this.distance(a, n));
              return c
          },
          distanceToPolygon: function(a, b) {
              return this.isPointInRing(a, b) ? 0 : this.distanceToLine(a, b)
          },
          isPointOnSegment: function(a, b, c, d) {
              if (!d && 0 !== d || 0 > d)
                  d = this.Pb.onSegmentTolerance;
              return this.distanceToSegment(a, b, c) <= d
          },
          isPointOnLine: function(a, b, c) {
              b = this.normalizeLine(b);
              for (var d = 0, e = b.length; d < e - 1; d++)
                  if (this.isPointOnSegment(a, b[d], b[d + 1], c))
                      return !0;
              return !1
          },
          isPointOnRing: function(a, b, c) {
              b = this.normalizeLine(b);
              for (var d = 0, e = b.length; d < e; d++)
                  if (this.isPointOnSegment(a, b[d], b[d === e - 1 ? 0 : d + 1], c))
                      return !0;
              return !1
          },
          isPointOnPolygon: function(a, b, c) {
              b = this.normalizeMultiLines(b);
              for (var d = 0, e = b.length; d < e; d++)
                  if (this.isPointOnRing(a, b[d], c))
                      return !0;
              return !1
          },
          makesureClockwise: function(a) {
              d(a) || (a = [].concat(a),
              a.reverse());
              return a
          },
          makesureAntiClockwise: function(a) {
              d(a) && (a = [].concat(a),
              a.reverse());
              return a
          },
          isPointInRing: function(b, c) {
              c = this.normalizeLine(c);
              var d = this.$w(c, !0);
              return a.wd.Nd(this.project(b), d, !1)
          },
          isRingInRing: function(a, b) {
              for (var c = 0, d = a.length; c < d; c++)
                  if (!this.isPointInRing(a[c], b))
                      return !1;
              return !0
          },
          isPointInPolygon: function(a, b) {
              b = this.normalizeMultiLines(b);
              for (var c, d = 0, e = b.length; d < e && (c = this.isPointInRing(a, b[d]),
              0 < d && (c = !c),
              c); d += 1)
                  ;
              return c
          },
          doesSegmentsIntersect: function(a, b, c, d) {
              var e = this.$w([a, b, c, d]);
              a = e[0];
              b = e[1];
              c = e[2];
              d = e[3];
              var e = !1
                , n = (d[0] - c[0]) * (a[1] - c[1]) - (d[1] - c[1]) * (a[0] - c[0])
                , p = (b[0] - a[0]) * (a[1] - c[1]) - (b[1] - a[1]) * (a[0] - c[0]);
              a = (d[1] - c[1]) * (b[0] - a[0]) - (d[0] - c[0]) * (b[1] - a[1]);
              0 !== a && (b = n / a,
              p /= a,
              0 <= b && 1 >= b && 0 <= p && 1 >= p && (e = !0));
              return e
          },
          doesSegmentLineIntersect: function(a, b, c) {
              c = this.normalizeLine(c);
              for (var d = 0, e = c.length; d < e - 1; d++)
                  if (this.doesSegmentsIntersect(a, b, c[d], c[d + 1]))
                      return !0;
              return !1
          },
          doesSegmentRingIntersect: function(a, b, c) {
              c = this.normalizeLine(c);
              for (var d = 0, e = c.length; d < e; d++)
                  if (this.doesSegmentsIntersect(a, b, c[d], c[d === e - 1 ? 0 : d + 1]))
                      return !0;
              return !1
          },
          doesSegmentPolygonIntersect: function(a, b, c) {
              c = this.normalizeMultiLines(c);
              for (var d = 0, e = c.length; d < e; d++)
                  if (this.doesSegmentRingIntersect(a, b, c[d]))
                      return !0;
              return !1
          },
          doesLineLineIntersect: function(a, b) {
              a = this.normalizeLine(a);
              for (var c = 0, d = a.length; c < d - 1; c++)
                  if (this.doesSegmentLineIntersect(a[c], a[c + 1], b))
                      return !0;
              return !1
          },
          doesLineRingIntersect: function(a, b) {
              a = this.normalizeLine(a);
              for (var c = 0, d = a.length; c < d - 1; c++)
                  if (this.doesSegmentRingIntersect(a[c], a[c + 1], b))
                      return !0;
              return !1
          },
          doesPolygonPolygonIntersect: function(a, b) {
              return this.doesRingRingIntersect(b, a) || this.isRingInRing(a, b) || this.isRingInRing(b, a) ? !0 : !1
          },
          doesRingRingIntersect: function(a, b) {
              a = this.normalizeLine(a);
              for (var c = 0, d = a.length; c < d; c++)
                  if (this.doesSegmentRingIntersect(a[c], a[c === d - 1 ? 0 : c + 1], b))
                      return !0;
              return !1
          },
          HO: function(a, b) {
              for (var c = 0, d = 0; d < a.length - 1; d += 1) {
                  var e = this.distance(a[d], a[d + 1]);
                  if (e + c < b)
                      c += e;
                  else
                      return c = (b - c) / e,
                      [a[d][0] + c * (a[d + 1][0] - a[d][0]), a[d][1] + c * (a[d + 1][1] - a[d][1]), d]
              }
              return null
          },
          RW: function(a, b) {
              function c() {
                  var a = [e[0] - n[0], e[1] - n[1]]
                    , b = [p[0] - q[0], p[1] - q[1]]
                    , d = e[0] * n[1] - e[1] * n[0]
                    , f = p[0] * q[1] - p[1] * q[0]
                    , h = 1 / (a[0] * b[1] - a[1] * b[0]);
                  return [(d * b[0] - f * a[0]) * h, (d * b[1] - f * a[1]) * h]
              }
              function d(a) {
                  return (n[0] - e[0]) * (a[1] - e[1]) > (n[1] - e[1]) * (a[0] - e[0])
              }
              a = this.makesureAntiClockwise(a);
              b = this.makesureClockwise(b);
              var e, n, p, q, r = a;
              e = b[b.length - 1];
              for (var s = 0, u = b.length; s < u; s++) {
                  n = b[s];
                  var v = r
                    , r = [];
                  p = v[v.length - 1];
                  for (var x = 0, t = v.length; x < t; x++)
                      q = v[x],
                      d(q) ? (d(p) || r.push(c()),
                      r.push(q)) : d(p) && r.push(c()),
                      p = q;
                  e = n
              }
              return r
          },
          ringRingClip: function(a, b) {
              a = this.$w(a);
              b = this.$w(b);
              var c = this.RW(a, b);
              0 == c.length && (c = this.RW(b, a));
              return this.Fia(c)
          },
          ringArea: function() {
              throw Error("distance Not implemented!");
          },
          distanceOfLine: function(a) {
              a = this.normalizeLine(a);
              for (var b = 0, c = 0, d = a.length; c < d - 1; c++)
                  b += this.distance(a[c], a[c + 1]);
              return b
          },
          isClockwise: function(a) {
              a = this.$w(a);
              return d(a)
          }
      });
      a.Hq = new e;
      a.zj = new e;
      a.zj.setCrs("plane")
  }
  )(g);
  g.RK = function() {
      var a = {};
      (function() {
          function b(a) {
              for (var b = 0, e = a.length, f = 0; f < e - 1; f++)
                  var h = a[f]
                    , k = a[f + 1]
                    , b = b + (k[0] - h[0]) * (k[1] + h[1]);
              if (a[e - 1][0] !== a[0][0] || a[e - 1][1] !== a[0][1])
                  h = a[e - 1],
                  k = a[0],
                  b += (k[0] - h[0]) * (k[1] + h[1]);
              return 0 >= b
          }
          a.Ura = function(a) {
              b(a) && (a = [].concat(a),
              a.reverse());
              return a
          }
          ;
          a.n4 = b
      }
      )();
      (function() {
          function b(a) {
              var b = a.length;
              2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
          }
          function c(a, b) {
              for (var c = 0; c < b.length; c++)
                  a.push(b[c][0]),
                  a.push(b[c][1])
          }
          a.Lh = function(a, e) {
              var f = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0
                , h = arguments[3];
              e = e || [];
              var k = []
                , l = [];
              b(a);
              c(k, a);
              var m = a.length;
              e.forEach(b);
              for (var n = 0; n < e.length; n++)
                  l.push(m),
                  m += e[n].length,
                  c(k, e[n]);
              l = (this.sK ? this.sK : g.zc.sK)(k, l);
              if (h) {
                  f = [];
                  for (n = 0; n < l.length; n += 1)
                      h = 2 * l[n],
                      f.push([k[h], k[h + 1]]);
                  return f
              }
              if (f)
                  for (n = 0; n < l.length; n += 1)
                      l[n] += f;
              return l
          }
      }
      )();
      return a
  }
  ;
  (function(a) {
      a.EE = function() {
          function a(b, c, d, e, f) {
              for (var h, k = 0, l = c, n = d - e; l < d; l += e)
                  k += (b[n] - b[l]) * (b[l + 1] + b[n + 1]),
                  n = l;
              if (f === 0 < k)
                  for (f = c; f < d; f += e)
                      h = r(f, b[f], b[f + 1], h);
              else
                  for (f = d - e; f >= c; f -= e)
                      h = r(f, b[f], b[f + 1], h);
              h && m(h, h.next) && (s(h),
              h = h.next);
              return h
          }
          function c(a, b) {
              if (!a)
                  return a;
              b || (b = a);
              var c = a, d;
              do
                  if (d = !1,
                  c.U7 || !m(c, c.next) && 0 !== l(c.Fa, c, c.next))
                      c = c.next;
                  else {
                      s(c);
                      c = b = c.Fa;
                      if (c === c.next)
                          break;
                      d = !0
                  }
              while (d || c !== b);return b
          }
          function d(a, b, e, f, r, u, C) {
              if (a) {
                  if (!C && u) {
                      var F = a
                        , A = F;
                      do
                          null === A.z && (A.z = h(A.x, A.y, f, r, u)),
                          A.Jo = A.Fa,
                          A = A.Vk = A.next;
                      while (A !== F);A.Jo.Vk = null;
                      A.Jo = null;
                      var F = A, B, G, H, I, M, L, O = 1;
                      do {
                          A = F;
                          H = F = null;
                          for (I = 0; A; ) {
                              I++;
                              G = A;
                              for (B = M = 0; B < O && (M++,
                              G = G.Vk,
                              G); B++)
                                  ;
                              for (L = O; 0 < M || 0 < L && G; )
                                  0 !== M && (0 === L || !G || A.z <= G.z) ? (B = A,
                                  A = A.Vk,
                                  M--) : (B = G,
                                  G = G.Vk,
                                  L--),
                                  H ? H.Vk = B : F = B,
                                  B.Jo = H,
                                  H = B;
                              A = G
                          }
                          H.Vk = null;
                          O *= 2
                      } while (1 < I)
                  }
                  for (F = a; a.Fa !== a.next; ) {
                      A = a.Fa;
                      G = a.next;
                      if (u)
                          a: if (H = a.Fa,
                          I = a.next,
                          0 <= l(H, a, I))
                              H = !1;
                          else {
                              M = h(H.x < a.x ? H.x < I.x ? H.x : I.x : a.x < I.x ? a.x : I.x, H.y < a.y ? H.y < I.y ? H.y : I.y : a.y < I.y ? a.y : I.y, f, r, u);
                              O = h(H.x > a.x ? H.x > I.x ? H.x : I.x : a.x > I.x ? a.x : I.x, H.y > a.y ? H.y > I.y ? H.y : I.y : a.y > I.y ? a.y : I.y, f, r, u);
                              for (B = a.Vk; B && B.z <= O; ) {
                                  if (B !== a.Fa && B !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, B.x, B.y) && 0 <= l(B.Fa, B, B.next)) {
                                      H = !1;
                                      break a
                                  }
                                  B = B.Vk
                              }
                              for (B = a.Jo; B && B.z >= M; ) {
                                  if (B !== a.Fa && B !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, B.x, B.y) && 0 <= l(B.Fa, B, B.next)) {
                                      H = !1;
                                      break a
                                  }
                                  B = B.Jo
                              }
                              H = !0
                          }
                      else
                          a: if (H = a.Fa,
                          I = a.next,
                          0 <= l(H, a, I))
                              H = !1;
                          else {
                              for (M = a.next.next; M !== a.Fa; ) {
                                  if (k(H.x, H.y, a.x, a.y, I.x, I.y, M.x, M.y) && 0 <= l(M.Fa, M, M.next)) {
                                      H = !1;
                                      break a
                                  }
                                  M = M.next
                              }
                              H = !0
                          }
                      if (H)
                          b.push(A.fe / e),
                          b.push(a.fe / e),
                          b.push(G.fe / e),
                          s(a),
                          F = a = G.next;
                      else if (a = G,
                      a === F) {
                          if (C)
                              if (1 === C) {
                                  C = b;
                                  F = e;
                                  A = a;
                                  do
                                      G = A.Fa,
                                      H = A.next.next,
                                      !m(G, H) && n(G, A, A.next, H) && p(G, H) && p(H, G) && (C.push(G.fe / F),
                                      C.push(A.fe / F),
                                      C.push(H.fe / F),
                                      s(A),
                                      s(A.next),
                                      A = a = H),
                                      A = A.next;
                                  while (A !== a);a = A;
                                  d(a, b, e, f, r, u, 2)
                              } else {
                                  if (2 === C)
                                      a: {
                                          C = a;
                                          do {
                                              for (F = C.next.next; F !== C.Fa; ) {
                                                  if (A = C.fe !== F.fe)
                                                      if (A = void 0,
                                                      A = C.next.fe !== F.fe)
                                                          if (A = void 0,
                                                          A = C.Fa.fe !== F.fe) {
                                                              A = A = void 0;
                                                              b: {
                                                                  A = C;
                                                                  do {
                                                                      if (A.fe !== C.fe && A.next.fe !== C.fe && A.fe !== F.fe && A.next.fe !== F.fe && n(A, A.next, C, F)) {
                                                                          A = !0;
                                                                          break b
                                                                      }
                                                                      A = A.next
                                                                  } while (A !== C);A = !1
                                                              }
                                                              if (A = !A)
                                                                  if (A = void 0,
                                                                  A = p(C, F))
                                                                      if (A = void 0,
                                                                      A = p(F, C)) {
                                                                          A = C;
                                                                          G = !1;
                                                                          H = (C.x + F.x) / 2;
                                                                          I = (C.y + F.y) / 2;
                                                                          do
                                                                              A.y > I !== A.next.y > I && A.next.y !== A.y && H < (A.next.x - A.x) * (I - A.y) / (A.next.y - A.y) + A.x && (G = !G),
                                                                              A = A.next;
                                                                          while (A !== C);A = G
                                                                      }
                                                          }
                                                  if (A) {
                                                      a = q(C, F);
                                                      C = c(C, C.next);
                                                      a = c(a, a.next);
                                                      d(C, b, e, f, r, u);
                                                      d(a, b, e, f, r, u);
                                                      break a
                                                  }
                                                  F = F.next
                                              }
                                              C = C.next
                                          } while (C !== a)
                                      }
                              }
                          else
                              d(c(a), b, e, f, r, u, 1);
                          break
                      }
                  }
              }
          }
          function e(a, b) {
              return a.x - b.x
          }
          function f(a, b) {
              var c = b, d = a.x, e = a.y, f = -Infinity, h;
              do {
                  if (e <= c.y && e >= c.next.y && c.next.y !== c.y) {
                      var l = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y);
                      if (l <= d && l > f) {
                          f = l;
                          if (l === d) {
                              if (e === c.y)
                                  return c;
                              if (e === c.next.y)
                                  return c.next
                          }
                          h = c.x < c.next.x ? c : c.next
                      }
                  }
                  c = c.next
              } while (c !== b);if (!h)
                  return null;
              if (d === f)
                  return h.Fa;
              for (var l = h, m = h.x, n = h.y, s = Infinity, r, c = h.next; c !== l; )
                  d >= c.x && c.x >= m && d !== c.x && k(e < n ? d : f, e, m, n, e < n ? f : d, e, c.x, c.y) && (r = Math.abs(e - c.y) / (d - c.x),
                  (r < s || r === s && c.x > h.x) && p(c, a) && (h = c,
                  s = r)),
                  c = c.next;
              return h
          }
          function h(a, b, c, d, e) {
              a = 32767 * (a - c) * e;
              b = 32767 * (b - d) * e;
              a = (a | a << 8) & 16711935;
              a = (a | a << 4) & 252645135;
              a = (a | a << 2) & 858993459;
              b = (b | b << 8) & 16711935;
              b = (b | b << 4) & 252645135;
              b = (b | b << 2) & 858993459;
              return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1
          }
          function k(a, b, c, d, e, f, h, k) {
              return 0 <= (e - h) * (b - k) - (a - h) * (f - k) && 0 <= (a - h) * (d - k) - (c - h) * (b - k) && 0 <= (c - h) * (f - k) - (e - h) * (d - k)
          }
          function l(a, b, c) {
              return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
          }
          function m(a, b) {
              return a.x === b.x && a.y === b.y
          }
          function n(a, b, c, d) {
              return m(a, b) && m(c, d) || m(a, d) && m(c, b) ? !0 : 0 < l(a, b, c) !== 0 < l(a, b, d) && 0 < l(c, d, a) !== 0 < l(c, d, b)
          }
          function p(a, b) {
              return 0 > l(a.Fa, a, a.next) ? 0 <= l(a, b, a.next) && 0 <= l(a, a.Fa, b) : 0 > l(a, b, a.Fa) || 0 > l(a, a.next, b)
          }
          function q(a, b) {
              var c = new u(a.fe,a.x,a.y)
                , d = new u(b.fe,b.x,b.y)
                , e = a.next
                , f = b.Fa;
              a.next = b;
              b.Fa = a;
              c.next = e;
              e.Fa = c;
              d.next = c;
              c.Fa = d;
              f.next = d;
              d.Fa = f;
              return d
          }
          function r(a, b, c, d) {
              a = new u(a,b,c);
              d ? (a.next = d.next,
              a.Fa = d,
              d.next.Fa = a,
              d.next = a) : (a.Fa = a,
              a.next = a);
              return a
          }
          function s(a) {
              a.next.Fa = a.Fa;
              a.Fa.next = a.next;
              a.Jo && (a.Jo.Vk = a.Vk);
              a.Vk && (a.Vk.Jo = a.Jo)
          }
          function u(a, b, c) {
              this.fe = a;
              this.x = b;
              this.y = c;
              this.Vk = this.Jo = this.z = this.next = this.Fa = null;
              this.U7 = !1
          }
          return {
              sK: function(h, k, l) {
                  l = l || 2;
                  var m = k && k.length
                    , n = m ? k[0] * l : h.length
                    , p = a(h, 0, n, l, !0)
                    , s = [];
                  if (!p)
                      return s;
                  var r, u, B, G;
                  if (m) {
                      var H = l, m = [], I, M, L;
                      G = 0;
                      for (I = k.length; G < I; G++) {
                          M = k[G] * H;
                          L = G < I - 1 ? k[G + 1] * H : h.length;
                          M = a(h, M, L, H, !1);
                          M === M.next && (M.U7 = !0);
                          var O = L = M;
                          do
                              L.x < O.x && (O = L),
                              L = L.next;
                          while (L !== M);m.push(O)
                      }
                      m.sort(e);
                      for (G = 0; G < m.length; G++) {
                          k = m[G];
                          H = p;
                          if (H = f(k, H))
                              k = q(H, k),
                              c(k, k.next);
                          p = c(p, p.next)
                      }
                  }
                  if (h.length > 80 * l) {
                      r = B = h[0];
                      u = m = h[1];
                      for (H = l; H < n; H += l)
                          G = h[H],
                          k = h[H + 1],
                          G < r && (r = G),
                          k < u && (u = k),
                          G > B && (B = G),
                          k > m && (m = k);
                      B = Math.max(B - r, m - u);
                      B = 0 !== B ? 1 / B : 0
                  }
                  d(p, s, l, r, u, B);
                  return s
              }
          }
      }
      ;
      a.L9 = a.EE()
  }
  )(g);
  (function(a) {
      function b(a) {
          var b = a.length;
          2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
      }
      function c(a, b) {
          for (var c = 0; c < b.length; c++)
              a.push(b[c][0]),
              a.push(b[c][1])
      }
      a.Bn = {
          ci: function(a) {
              for (var b = a.length, c = 0, h = b - 1, k = 0; k < b; h = k++)
                  c += a[h][0] * a[k][1] - a[k][0] * a[h][1];
              return 0.5 * c
          },
          n4: function(b) {
              return 0 > a.Bn.ci(b)
          },
          normalize: function(b) {
              var c;
              if (b) {
                  c = [];
                  for (var f = 0, h = b.length; f < h; f += 1)
                      c[f] = b[f]instanceof Array ? this.normalize(b[f]) : b[f]instanceof a.T ? [b[f].Q, b[f].P] : b[f]instanceof a.H ? [b[f].x, b[f].y] : b[f]
              }
              return c
          },
          Lh: function(d, e) {
              e = e || [];
              var f = []
                , h = [];
              b(d);
              c(f, d);
              var k = d.length;
              e.forEach(b);
              for (var l = 0; l < e.length; l++)
                  h.push(k),
                  k += e[l].length,
                  c(f, e[l]);
              return a.L9.sK(f, h)
          }
      }
  }
  )(g);
  g.AH = function(a, b, c) {
      g.c.add({
          CLASS_NAME: "convertFrom"
      }, b);
      var d = g.A.Rd + "/v3/assistant/coordinate/convert";
      a = g.a.Ha(a);
      var e = [];
      if (a instanceof Array) {
          for (var f = 0, h = a.length; f < h; f += 1)
              e.push(a[f] + "");
          e = e.join(";")
      } else
          e = a + "";
      b = ["key=" + g.A.key, "s=rsv3", "locations=" + e, "coordsys=" + (b || "gps")];
      d += 0 < b.length ? "?" + b.join("&") : "";
      d = new g.fb.vb(d,{
          callback: "callback"
      });
      d.g("complete", function(a) {
          if ("1" === a.status) {
              a = a.locations.split(";");
              for (var b = 0; b < a.length; b += 1) {
                  var d = a[b].split(",");
                  a[b] = new AMap.LngLat(d[0],d[1])
              }
              c && "function" === typeof c && c("complete", {
                  info: "ok",
                  locations: a
              })
          } else
              c && "function" === typeof c && c("error", a.info)
      }, this);
      d.g("error", function(a) {
          c && "function" === typeof c && c("error", a.info)
      }, this)
  }
  ;
  g.fb = g.fb || {};
  g.fb.mL = g.aa.extend({
      ja: [g.sa],
      r: function(a, b) {
          this.B = {
              callback: "cbk",
              type: "json",
              charset: "utf-8"
          };
          b = b || {};
          g.a.Db(this, b);
          this.url = a;
          this.send(a, b.vd, b.I1, b.rT, b.responseType)
      },
      send: function(a) {
          var b = g.j.create("script");
          b.type = "text/javascript";
          b.charset = this.B.charset;
          var c = this;
          g.l.ue ? b.onreadystatechange = function() {
              "loaded" !== this.readyState && "complete" !== this.readyState || c.q("complete")
          }
          : (b.onload = function() {
              c.q("complete")
          }
          ,
          b.onerror = function() {
              c.q("error", {
                  status: 0,
                  info: "service error",
                  url: a
              })
          }
          );
          b.src = a;
          document.getElementsByTagName("head")[0].appendChild(b)
      }
  });
  g.fb.vb = g.fb.mL.extend({
      Gla: function() {
          if (g.a.q7)
              return g.a.kK.push(this),
              !0
      },
      hva: function() {
          this.q("error", {
              info: "TIME_OUT_A"
          })
      },
      send: function(a, b, c, d) {
          function e() {
              window[f] = null;
              try {
                  window[f] = null
              } catch (a) {}
              h.onerror = null;
              h.parentNode && h.parentNode.removeChild(h)
          }
          if (!this.B.Cx || !this.Gla()) {
              a = encodeURI(a);
              var f = this.B.fun;
              if (!f || window[f])
                  f = g.a.U2("jsonp_", 6) + "_";
              var h = document.createElement("script");
              h.type = "text/javascript";
              h.charset = "utf-8";
              h.async = !0;
              var k = this;
              g.l.ue || (h.onerror = function() {
                  e();
                  k.q("error", {
                      info: "REQUEST_FAILED",
                      url: a
                  })
              }
              );
              window[f] = function(a) {
                  e();
                  if (k.B.callbackFunction)
                      k.B.callbackFunction.call(k.B.context, a);
                  else if (3E4 === a.errcode && a.data)
                      g.a.q7 = !0,
                      g.qb.load("AMap.AntiCrabFrame", function() {
                          g.a.Cx || (g.a.Cx = new g.w9);
                          g.a.kK.push(k);
                          g.a.Cx.open(k.B.vd, a.data.host, k.uD || "", k.url)
                      });
                  else {
                      if (a instanceof Array || "string" === typeof a)
                          a = {
                              data: a
                          };
                      a.hCa = f;
                      k.q("complete", a)
                  }
              }
              ;
              b = "?";
              -1 !== a.indexOf("?") && (b = "&");
              b = a + b + this.B.callback + "=" + f;
              if (-1 !== a.indexOf(g.A.Rd + "/v") || -1 !== a.indexOf("yuntuapi.amap.com/datasearch") || -1 !== a.indexOf("webapi.amap.com/"))
                  b = b + "&platform=JS&logversion=2.0" + ("&appname=" + g.A.Wt),
                  b += "&csid=" + g.a.Z8(),
                  b += "&sdkversion=" + g.A.gr;
              if (c = this.B.OH) {
                  var l = [], m;
                  for (m in c)
                      c.hasOwnProperty(m) && (l.push(m + "=" + c[m]),
                      b += "&" + m + "=" + encodeURIComponent(c[m]));
                  k.uD = l.join("&")
              }
              h.src = d ? b + "&rereq=true" : b;
              g.fb.vb.Fca = document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0];
              g.fb.vb.Fca.appendChild(h)
          }
      }
  });
  g.fb.XMLHttpRequest = g.fb.mL.extend({
      send: function(a, b, c, d, e) {
          var f = this;
          if ((g.l.ue || g.l.U3) && window.XDomainRequest) {
              var h = this.p9 = new XDomainRequest;
              h.onerror = function(b) {
                  f.q("error", {
                      url: a,
                      data: b
                  })
              }
              ;
              h.onload = function() {
                  f.q("complete", {
                      url: a,
                      data: h.responseText
                  })
              }
              ;
              h.open(b || "GET", a);
              setTimeout(function() {
                  h.send(c || void 0)
              }, 0)
          } else {
              var k = this.p9 = new XMLHttpRequest;
              k.onreadystatechange = function() {
                  4 === k.readyState && 200 === k.status ? f.q("complete", {
                      url: a,
                      data: "arraybuffer" === k.responseType ? k.response : k.responseText
                  }) : 404 === k.status && (k.abort(),
                  f.q("error", {
                      url: a,
                      data: "404"
                  }))
              }
              ;
              k.onerror = function(b) {
                  k.abort();
                  f.q("error", {
                      url: a,
                      data: b
                  })
              }
              ;
              k.open(b || "GET", a);
              "POST" === b && k.setRequestHeader("Content-Type", d || "application/x-www-form-urlencoded");
              e && (k.responseType = e);
              k.send(c || void 0)
          }
      },
      abort: function() {
          this.p9.abort()
      }
  });
  for (var $ = {
      v: "1.4.14",
      Pixel: g.H,
      LngLat: g.T,
      Size: g.xd,
      Bounds: g.me,
      ArrayBounds: g.Ro,
      PixelBounds: g.Gf,
      Panorama: g.B$,
      PanoramaMarker: g.C$,
      Map: z.Kb,
      View2D: z.bF,
      GroundImage: z.o.SK,
      Marker: z.w.rb,
      ImageMarker: z.w.Qya,
      Text: z.w.IV,
      Icon: z.w.Th,
      MarkerShape: z.w.t$,
      Polyline: z.w.Xb,
      BezierCurve: z.w.Lz,
      Polygon: z.w.yc,
      Circle: z.w.Ug,
      CircleMarker: z.w.XU,
      Ellipse: z.w.at,
      Rectangle: z.w.ht,
      ContextMenu: z.w.xn,
      InfoWindow: z.w.Ne,
      Buildings: z.o.B9,
      TileLayer: z.o.ob,
      ImageLayer: z.o.Uz,
      CanvasLayer: z.o.D9,
      VideoLayer: z.o.gaa,
      VectorLayer: z.o.$c,
      MassMarks: z.o.v$,
      CompositeLayer: z.o.H9,
      LabelsLayer: z.o.Iq,
      LabelMarker: z.w.m$,
      LayerGroup: z.o.XK,
      OverlayGroup: z.w.zn,
      GeoJSON: z.w.gV,
      CANVAS: "canvas",
      DOM: "dom",
      convertFrom: g.AH,
      Http: {
          JSONP: g.fb.vb
      },
      event: {
          CLASS_NAME: "AMap.event"
      }
  }, wc = "addDomListener addDomListenerOnce addListener addListenerOnce clearInstanceListeners clearListeners removeListener trigger".split(" "), xc = 0; xc < wc.length; xc += 1)
      $.event[wc[xc]] = function() {
          var a = g.event[wc[xc]]
            , b = wc[xc];
          return function() {
              g.c.ya($.event);
              g.c.add($.event, b);
              return a.apply(g.event, Array.prototype.slice.call(arguments))
          }
      }();
  $.GeometryUtil = {
      CLASS_NAME: "AMap.GeometryUtil"
  };
  for (var Hc = "distance ringArea isClockwise makesureClockwise makesureAntiClockwise distanceOfLine ringRingClip doesSegmentsIntersect doesSegmentLineIntersect doesSegmentRingIntersect doesSegmentPolygonIntersect doesLineLineIntersect doesLineRingIntersect doesPolygonPolygonIntersect doesRingRingIntersect isPointInRing isRingInRing isPointInPolygon isPointOnSegment isPointOnLine isPointOnRing isPointOnPolygon closestOnSegment closestOnLine distanceToSegment distanceToLine distanceToPolygon".split(" "), xc = 0; xc < Hc.length; xc += 1)
      $.GeometryUtil[Hc[xc]] = function() {
          var a = g.Hq[Hc[xc]]
            , b = Hc[xc];
          return function() {
              g.c.ya($.GeometryUtil);
              g.c.add($.GeometryUtil, b);
              return a.apply(g.Hq, Array.prototype.slice.call(arguments))
          }
      }();
  $.GeometryUtil.triangulateShape = function(a, b) {
      g.c.ya($.GeometryUtil);
      g.c.add($.GeometryUtil, "triangulateShape");
      a = g.Bn.normalize(a);
      b = g.Bn.normalize(b);
      return g.Bn.Lh(a, b)
  }
  ;
  $.PlaneGeometryUtil = {
      CLASS_NAME: "AMap.PlaneGeometryUtil"
  };
  for (xc = 0; xc < Hc.length; xc += 1)
      $.PlaneGeometryUtil[Hc[xc]] = function() {
          var a = g.zj[Hc[xc]]
            , b = Hc[xc];
          return function() {
              g.c.ya($.PlaneGeometryUtil);
              g.c.add($.PlaneGeometryUtil, b);
              return a.apply(g.zj, Array.prototype.slice.call(arguments))
          }
      }();
  $.PlaneGeometryUtil.triangulateShape = function(a, b) {
      g.c.ya($.PlaneGeometryUtil);
      g.c.add($.PlaneGeometryUtil, "triangulateShape");
      a = g.Bn.normalize(a);
      b = g.Bn.normalize(b);
      return g.Bn.Lh(a, b)
  }
  ;
  $.plugin = $.service = z.Kb.prototype.plugin;
  $.TileLayer.Satellite = z.o.ob.CV;
  $.TileLayer.RoadNet = z.o.ob.AV;
  $.TileLayer.google = z.o.ob.IE;
  $.TileLayer.Flexible = z.o.ob.Rz;
  $.TileLayer.WMS = z.o.ob.haa;
  $.TileLayer.WMTS = z.o.ob.iaa;
  $.TileLayer.Traffic = z.o.ob.KV;
  $.Panorama.Events = z.event;
  $.TileLayer.PanoramaLayer = z.o.ob.Yya;
  $.UA = {
      ie: g.l.Vr,
      ielt9: g.l.ue,
      ielt11: g.l.jqa,
      mobile: g.l.Z,
      android: g.l.El,
      ios: g.l.JI
  };
  $.Browser = {
      ua: navigator.userAgent,
      mobile: g.l.Z,
      plat: g.l.Uy,
      mac: g.l.Iy,
      windows: g.l.jya,
      ios: g.l.JI,
      iPad: g.l.cqa,
      iPhone: g.l.dqa,
      android: g.l.El,
      android23: g.l.Dka,
      chrome: g.l.chrome,
      firefox: g.l.iQ,
      safari: g.l.PD,
      wechat: g.l.h9,
      uc: g.l.Axa,
      qq: g.l.mua,
      ie: g.l.Vr,
      ie6: g.l.mi,
      ie7: g.l.Nu,
      ie8: g.l.ue && !g.l.Nu && !g.l.mi,
      ie9: g.l.U3,
      ie10: g.l.T3,
      ie11: g.l.gqa,
      edge: g.l.Lna,
      ielt9: g.l.ue,
      baidu: g.l.iH,
      isLocalStorage: g.l.es,
      isGeolocation: !!navigator.geolocation,
      mobileWebkit: g.l.osa,
      mobileWebkit3d: g.l.r5,
      mobileOpera: !!g.l.nsa,
      retina: g.l.Mc,
      touch: !!g.l.Cf,
      msPointer: !!g.l.t5,
      pointer: !!g.l.IS,
      webkit: g.l.f9,
      ie3d: g.l.hqa,
      webkit3d: g.l.g9,
      gecko3d: g.l.yoa,
      opera3d: g.l.hta,
      any3d: g.l.dH,
      isCanvas: g.l.Ok,
      isSvg: g.l.xo,
      isVML: g.l.Vr,
      isWorker: !!window.Worker,
      isWebsocket: !!window.WebSocket,
      isWebGL: function() {
          for (var a = document.createElement("canvas"), b = ["webgl", "experimental-webgl", "moz-webgl"], c = null, d = 0; d < b.length; d += 1) {
              try {
                  c = a.getContext(b[d])
              } catch (e) {}
              if (c)
                  if (c.drawingBufferWidth !== a.width || c.drawingBufferHeight !== a.height)
                      break;
                  else
                      return !0
          }
          return !1
      }
  };
  $.Util = {
      CLASS_NAME: "AMap.Util"
  };
  var Ic = {
      colorNameToHex: g.a.vH,
      rgbHex2Rgba: g.a.d7,
      argbHex2Rgba: g.a.kr,
      isEmpty: g.a.Qk,
      deleteItemFromArray: g.a.Tx,
      deleteItemFromArrayByIndex: g.a.fo,
      indexOf: g.a.indexOf,
      format: g.a.nc,
      isArray: g.a.isArray,
      isDOM: g.a.NI,
      includes: g.a.ja,
      requestIdleCallback: g.a.sT,
      cancelIdleCallback: g.a.eP,
      requestAnimFrame: g.a.Qc,
      cancelAnimFrame: g.a.fi,
      color2RgbaArray: g.a.Tm,
      color2Rgba: g.a.kma
  };
  for (xc in Ic)
      Ic.hasOwnProperty(xc) && "function" == typeof Ic[xc] && ($.Util[xc] = function() {
          var a = xc;
          return function() {
              g.c.ya($.Util);
              g.c.add($.Util, a);
              return Ic[a].apply(g.a, Array.prototype.slice.call(arguments))
          }
      }());
  $.DomUtil = {
      CLASS_NAME: "AMap.DomUtil"
  };
  var Jc = {
      getViewport: g.j.uI,
      getViewportOffset: g.j.XQ,
      create: g.j.create,
      setClass: g.j.Eva,
      hasClass: g.j.bn,
      addClass: g.j.Ra,
      removeClass: g.j.ab,
      setOpacity: g.j.lq,
      rotate: g.j.rotate,
      setCss: g.j.Va,
      empty: g.j.ID,
      remove: g.j.remove,
      TRANSFORM: g.j.eg,
      TRANSITION: g.j.YE
  };
  for (xc in Jc)
      Jc.hasOwnProperty(xc) && "function" == typeof Jc[xc] && ($.DomUtil[xc] = function() {
          var a = xc;
          return function() {
              g.c.ya($.DomUtil);
              g.c.add($.DomUtil, a);
              return Jc[a].apply(g.j, Array.prototype.slice.call(arguments))
          }
      }());
  var Kc = g.A;
  $.User = {
      key: Kc.key
  };
  window.AMap = $;
  window.AMap.BuryPoint = g.BuryPoint;
  window.AMap.Class = g.aa;
  if (!Kc.aD && "undefined" !== typeof arguments && arguments.callee)
      try {
          if (g.l.es && window.localStorage) {
              var Lc = window.localStorage["_AMap_" + g.gJ];
              Lc && JSON.parse(Lc).version === Kc.uj || window.localStorage.setItem("_AMap_" + g.gJ, JSON.stringify({
                  version: Kc.uj,
                  script: "(" + arguments.callee + ")(config)"
              }));
              new g.fb.XMLHttpRequest(Kc.yb + "/maps/cookie?key=amap_ver&value=" + Kc.uj,{
                  vd: "GET",
                  rT: "text/plain"
              })
          }
      } catch (Mc) {}
  ;g.vj = g.aa.extend({
      r: function(a, b, c, d) {
          this.start = a;
          this.end = b;
          this.transition = c;
          this.precision = d || 0;
          this.vv = !1;
          this.update = g.a.bind(this.update, this);
          return this
      },
      sn: function(a) {
          this.Yg = this.startTime = +new Date;
          this.frames = 0;
          this.vv = !0;
          this.J0 = g.a.Qc(this.update);
          this.rha = g.a.bind(this.$p, a || this)
      },
      update: function() {
          this.frames += 1;
          var a = +new Date
            , b = a - this.startTime
            , b = this.transition ? this.transition(this.start, this.end, b, this.frames, a - this.Yg) : null;
          "number" === typeof b && Math.abs(b - this.end) < this.precision ? (this.stop(),
          b = this.end) : this.J0 = g.a.Qc(this.update);
          this.Yg = a;
          this.rha(b)
      },
      stop: function(a) {
          g.a.fi(this.J0);
          a && this.update();
          this.vv = !1
      }
  });
  g.vj.Easing = {
      Linear: {
          None: function(a) {
              return a
          }
      },
      Bounce: {
          In: function(a) {
              return 1 - (a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
          },
          Out: function(a) {
              return g.vj.Easing.Bounce.In(1 - a)
          }
      },
      Cubic: {
          In: function(a) {
              return 1 - a * a * a
          },
          Out: function(a) {
              a = 1 - a;
              return 1 - a * a * a
          }
      }
  };
  g.Kb = g.aa.extend({
      ja: [g.sa, g.Oe, g.ZI],
      r: function(a, b) {
          this.kc = g.a.bind(this.kc, this);
          this.D = b;
          this.aj = b.aj;
          this.gm = "";
          this.Xg = this.zg = this.Dk = !1;
          this.Fn = {};
          this.K = a;
          this.ufa();
          this.Dqa();
          this.W("zooms", b, !0);
          this.W("size", b, !0);
          this.W("limitBounds", b);
          this.W("view", b);
          this.W("nolimg", b, !0);
          this.W("mapNumber", b, !0);
          this.W("lang", b, !0);
          this.W("features", b, !0);
          this.W("styleID", b, !0);
          this.W("forceBig", b, !0);
          this.W("mode", b, !0);
          this.W("showBuildingBlock", b, !0);
          this.W("mapStyle", b);
          var c = this.get("mapStyle");
          this.pe = g.A.pe[c] || g.A.pe["default"];
          this.XG = "#a3ccff";
          this.wB = b.get("skyColor") || "#cce0ff";
          this.W("editEnable", b);
          this.od ? this.W("style", b, !0) : this.W("styleUrl", b);
          this.W("hightlight", b, !0);
          this.W("labelzIndex", b, !0);
          if (g.l.jK) {
              c = new z.o.ob({
                  innerLayer: !0,
                  zIndex: b.get("labelzIndex"),
                  visible: !1
              });
              this.Bc = new g.o.Bj(c,this,["point", "road"]);
              this.Bc.type = "\u77e2\u91cf\u6807\u6ce8";
              var d = this.D.get("defaultLayer");
              d && c.W("rejectMapMask", d, !0);
              b.labelsLayer = this.Bc.U;
              this.Bc.U.g("complete", this.Uq, this, !0);
              this.Bc.U.g("renderComplete", this.Uq, this);
              this.Bc.QA = this.Bc.Jg = !0
          }
          this.W("isHotspot", b, !0);
          this.W("layers", b);
          this.W("overlays", b);
          this.W("infos", b, !0);
          this.W("contextmenus", b, !0);
          this.W("controls", b);
          this.W("bounds", b);
          this.W("draw", b);
          this.Pe("zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender gridMapForeign vectorMapForeign".split(" "), b);
          this.Pe("rotateEnable pitchEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom".split(" "), b, !0);
          this.get("jogEnable") ? this.Pu = !0 : this.Pu = !1;
          this.Jea();
          this.Qea();
          this.qY && this.qY();
          this.W("resizeEnable", b);
          this.D.map = this;
          c = this.get("size");
          c = c.width * c.height / 65536;
          g.l.Mc && 3 < c && (this.R0 = !0);
          this.V = {
              Pd: !1
          };
          this.SJ()
      },
      editEnableChanged: function() {
          this.od = this.get("editEnable")
      },
      labelzIndexChanged: function() {
          this.Bc && this.Bc.set("zIndex", this.get("labelzIndex"))
      },
      styleChanged: function() {
          this.Tk = !0
      },
      mapStyleChanged: function() {
          if (this.D.oi) {
              this.gm && (this.set("style", ""),
              this.ju = this.gm = "");
              var a = this.get("mapStyle");
              this.Tk = !0;
              this.pe = g.A.pe[a] || g.A.pe["default"];
              this.HD()
          }
      },
      styleUrlChanged: function() {
          if (this.D.oi) {
              var a = this.get("styleUrl") || "";
              if (a !== this.gm) {
                  var b = -1 !== a.indexOf("?isPublic=true")
                    , a = a.substr(0, 46)
                    , c = a.split("amap://styles/")[1];
                  "normal" === c ? (this.gm = "",
                  this.set("nolimg", !!this.D.get("nolimg_param")),
                  this.set("style", ""),
                  this.ju = "") : (this.wz = !0,
                  this.set("nolimg", !0),
                  b = new g.fb.vb(32 > c.length ? g.A.Cc + "://webapi.amap.com/style?name=" + c + "&key=" + g.A.key : g.A.Cc + "://webapi.amap.com/v4/map/styles?styleid=" + c + "&s=rsv3&key=" + g.A.key + (b ? "&ispublic=1" : ""),{
                      callback: "callback"
                  }),
                  b.g("complete", function(a) {
                      a.data && a.data.content ? this.set("style", JSON.parse(a.data.content)) : this.set("style", "");
                      this.wz = !1
                  }, this),
                  b.g("error", function() {
                      this.wz = !1
                  }, this),
                  this.gm = a,
                  this.HD())
              }
          }
      },
      s7: function(a) {
          this.K.style.background = a
      },
      Aoa: function(a) {
          var b = this.get("center");
          if (a.contains(b))
              return null;
          a = g.Hq.closestOnLine(b, a.eU().path);
          return new g.T(a[0],a[1])
      },
      Ila: function() {
          var a = this.get("limitBounds")
            , b = this.get("bounds");
          b.xc && b.xc.Q > b.oc.Q && (b.oc.Q += 360);
          if (!a.contains(b)) {
              if (b instanceof g.Ro)
                  return this.Aoa(a, b);
              var c = this.get("center").jb();
              a.ij() < b.ij() ? c.Q = a.ki().Q : (a.xc.Q > b.xc.Q && (c.Q += a.xc.Q - b.xc.Q),
              a.oc.Q < b.oc.Q && (c.Q += a.oc.Q - b.oc.Q));
              a.gj() < b.gj() ? c.P = a.ki().P : (a.xc.P > b.xc.P && (c.P += a.xc.P - b.xc.P),
              a.oc.P < b.oc.P && (c.P += a.oc.P - b.oc.P));
              return c
          }
      },
      ZN: function() {
          var a = this.PT;
          this.D.refreshSize();
          var b = this.get("size");
          b && a && !b.cb(a) && (this.PT = b,
          this.Av = !0,
          this.set("display"),
          this.a7(b),
          this.get("resizeEnable") && this.na("resize", {
              Hsa: a,
              B5: b
          }))
      },
      f_: function() {
          var a = this;
          a.ZN();
          a.TN = setTimeout(function() {
              a.f_()
          }, 200)
      },
      Nba: function() {
          this.TN && (clearTimeout(this.TN),
          this.TN = null)
      },
      ufa: function() {
          this.D.C = !0;
          this.PT = this.D.getSize();
          this.D.C = !1;
          if (g.l.ue || g.l.h9 && g.l.JI || g.l.csa)
              this.f_();
          else {
              var a = this;
              g.F.xka(this.K, function(b) {
                  a.ZN(b)
              })
          }
      },
      Dqa: function() {
          var a = this.K;
          g.j.Ra(a, "amap-container");
          var b = {};
          b.Yc = g.j.create("div", a, "amap-maps");
          this.ul = g.j.create("div", a);
          this.ul.style.display = "none";
          b.qr = g.j.create("div", b.Yc, "amap-drags");
          b.o = g.j.create("div", b.qr, "amap-layers");
          b.w = g.j.create("div", b.qr, "amap-overlays");
          b.controls = g.j.create("div", a, "amap-controls");
          b.av = g.j.create("a", a, "amap-logo");
          var c = window.location.host;
          -1 === c.indexOf("amap.com") && -1 === c.indexOf("gaode.com") && (b.av.href = g.l.Z ? "http://m.amap.com" : "http://gaode.com",
          b.av.target = "_blank");
          g.j.create("img", b.av).src = g.l.Mc ? this.D.B.logoUrlRetina : this.D.B.logoUrl;
          b.Um = g.j.create("div", a, "amap-copyright");
          b.Um.style.display = "none";
          350 < g.j.uI(this.K).width && (b.Um.innerHTML = this.D.B.copyright,
          b.Um.f5 = g.j.create("span", b.Um, "amap-mcode"),
          this.HD());
          this.Sa = b
      },
      HD: function() {
          var a = this.get("layers");
          if (a) {
              for (var b = -1, c = "", d = 0; d < a.length; d += 1) {
                  var e = a[d].get("mapNumber")
                    , f = a[d].get("zIndex", null, !0);
                  e && f > b && a[d].get("visible") && (c = e,
                  b = f)
              }
              this.set("mapNumber", c);
              this.D.C = !0;
              a = this.D.getMapStyle();
              this.D.C = !1;
              "GS(2018)1709" === c && a && "normal" !== a && "amap://styles/normal" !== a && (c = "",
              this.Sa.Um.style.visibility = "hidden",
              this.Sa.av.style.display = "none");
              c && this.Sa.Um.f5 && (this.Sa.Um.f5.innerHTML = "- " + c + "\u53f7",
              this.Sa.Um.style.visibility = "visible",
              this.Sa.av.style.display = "block");
              return c
          }
      },
      wX: function() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1;
          g.Aj && (a ? g.Aj.flush() : this.x2 || (this.x2 = g.a.Qc(function() {
              g.Aj.flush();
              this.x2 = null
          }, this)))
      },
      fT: function(a) {
          var b = this
            , c = this.D.get("rasterLayer");
          c && (this.D.set("rasterLayer", void 0),
          this.D.G6 = !0,
          this.D.ak = this.D.Ja,
          this.Kk && (this.Kk.zI = !1),
          c.o && (c.o.kD = !0),
          a || (this.gT = g.a.sT(function() {
              b.gT = null;
              b.D && b.D.bk(c)
          })));
          a && this.gT && g.a.eP(this.gT)
      },
      Uq: function() {
          function a() {
              for (var a = d.get("layers"), b = d.get("zoom"), c = 0; c < a.length; c += 1) {
                  var e = a[c].get("zooms");
                  if (!(a[c].ak || a[c].d4 || !e || b > e[1] || b < e[0] || !a[c].get("visible") || a[c].o && a[c].o.ha && 0 === a[c].o.ha.length || a[c].o && a[c].o.kD || a[c].o && a[c].o.Ja))
                      return !1
              }
              a = d.D.get("features");
              return ("all" === a || g.a.ja(a, "point")) && d.Bc && d.Bc.get("visible") && 0 < d.Bc.ha.length && !d.Bc.Ja && !d.Bc.LN ? !1 : !0
          }
          function b() {
              var a = {
                  id: d.D.id
              };
              g.oe.Ze.end(g.extend(a, {
                  key: "rds"
              }));
              g.oe.Ze.send(g.extend(a, {
                  params: {
                      rs: d.get("baseRender"),
                      viewmode: d.D.view.type,
                      fd: 0 === d.WI ? 1 : 0,
                      raster: d.D.ak ? 1 : 0
                  }
              }));
              d.D && d.D.Yl && d.D.Yl.gB && d.D.Yl.gB();
              d.D.z6 = 1;
              d.wX();
              d.set("display");
              d.YC = !0
          }
          function c() {
              g.oe.Ze.end({
                  id: d.D.id,
                  key: "rd"
              });
              g.a.Qc(function() {
                  this.q("complete")
              }, d);
              d.D.Ja = !0;
              d.set("display")
          }
          if (!this.HP)
              if (this.YC)
                  1 === this.ot && 13 === this.get("zoom") && (g.a.AC.stop(this.IF),
                  g.oe.Ze.send({
                      id: this.D.id,
                      params: {
                          fps: this.IF.AC,
                          type: "fps",
                          rs: this.get("baseRender")
                      }
                  }),
                  this.ot = 2),
                  this.wX();
              else {
                  var d = this
                    , e = this.D.get("rasterLayer")
                    , f = a();
                  e ? (e.o && e.o.Ja && (this.D.Ja || c()),
                  f && (this.D.Ja || c(),
                  this.fT(),
                  b())) : f && (this.D.Ja || c(),
                  b(),
                  this.D.G6 = !0)
              }
      },
      layersChanged: function() {
          this.xa = this.xa || [];
          for (var a = this.get("layers"), b = this.xa.length - 1; 0 <= b; b -= 1)
              this.xa[b] === this.td || this.xa[b] === this.ws || this.xa[b].QA || this.xa[b].U.QA || -1 !== g.a.indexOf(a, this.xa[b].U) || (this.xa[b].Pg(),
              this.xa[b].bl && this.xa[b].bl.Pg(),
              this.xa[b].U.G("complete", this.Uq, this),
              this.xa[b].U.G("renderComplete", this.Uq, this),
              this.xa = g.a.fo(this.xa, b));
          for (var c = !1, d = !0, e = this.get("labelzIndex"), b = 0; b < a.length; b += 1)
              if (!a[b].d4)
                  if (a[b].ei)
                      -1 === g.a.indexOf(this.xa, a[b].o) && this.xa.push(a[b].o);
                  else {
                      var f = this.Mf(a[b]);
                      f && (this.xa.push(f),
                      a[b].ei = !0,
                      a[b].o = f);
                      a[b].g("complete", this.Uq, this, !0);
                      a[b].g("renderComplete", this.Uq, this)
                  }
          for (b = 0; b < this.xa.length; b += 1)
              f = this.xa[b].U,
              f.Xp && f.get("visible") && (c = !0,
              !1 === f.get("detectRetina") && (d = !1),
              e = f.get("textIndex") || e);
          this.Bc && (c || "3D" !== this.D.view.type ? this.Bc.LN = !1 : (c = g.a.find(a, function(a) {
              if (z.o.dt && a instanceof z.o.dt && a.get("visible"))
                  return !0
          }),
          this.Bc.LN = c = !!c));
          a = g.a.indexOf(this.xa, this.Bc);
          c && this.D.get("showLabel") ? (-1 === a && this.xa.push(this.Bc),
          this.Bc.ia = d && g.l.ia,
          this.Bc.UB(this.get("mapStyle") || "normal"),
          this.Bc.set("zIndex", e),
          this.Bc.set("visible", !0),
          this.D.JC = !0,
          this.D.get("isHotspot") ? this.Bc.ata() : this.Bc.oP()) : (this.Bc && (this.Bc.set("visible", !1),
          this.D.JC = !1,
          this.Bc.oP()),
          this.D.JC = !1);
          this.D.isHotspotChanged();
          this.set("display", 0);
          this.HD()
      },
      isHotspotChanged: function() {
          this.layersChanged()
      },
      controlsChanged: function() {
          var a = this.get("controls"), b, c;
          if (a.add && 0 < a.add.length)
              for (; 0 < a.add.length; )
                  b = a.add.shift(),
                  (c = b.Tt || b.addTo) && c.call(b, this.D, this.Sa.controls);
          else if (a.remove && a.remove.length)
              for (; 0 < a.remove.length; )
                  b = a.remove.shift(),
                  (c = b.qv || b.removeFrom) && c.call(b, this.D, this.Sa.controls)
      },
      r0: function() {
          if (!this.HP) {
              var a = this;
              this.w0 = !1;
              a.td || (a.td = new g.o.$c(new z.o.$c,a),
              a.td.mf = 36,
              a.td.Yf = 36,
              a.td.set("zIndex", 120),
              a.xa.push(a.td),
              a.td.oC = !0);
              for (var b = a.get("overlays"), c = [], d = 0; d < a.jd.length; d += 1)
                  -1 === g.a.indexOf(b, a.jd[d].Yb) && (a.jd[d].Yb instanceof z.w.Ne || a.jd[d].Yb instanceof z.w.xn ? a.jd[d].Pg() : (a.td && a.jd[d]instanceof g.w.rb ? (a.td.Ng = g.a.Tx(a.td.Ng, a.jd[d].L),
                  a.td.N6([a.jd[d].L])) : a.ws && a.ws.N6([a.jd[d].L]),
                  a.jd[d].L.ba ? (g.j.remove(a.jd[d].L.ba),
                  a.jd[d].L.ba = null) : a.jd[d].L.Ya && (g.j.remove(a.jd[d].L.Ya.Sf),
                  g.j.remove(a.jd[d].L.Ya.$b),
                  a.jd[d].L.Ya = null),
                  a.jd[d].ln && a.jd[d].ln.stop(),
                  a.jd[d].Yb.ei = !1,
                  a.jd[d].Yb.il(),
                  a.jd[d].Yb.w = null,
                  a.jd[d].Yb = null,
                  a.jd[d].L.lna(),
                  a.jd[d].L = null,
                  a.jd[d].il(),
                  a.jd[d].Ge = null,
                  a.jd[d].hi(),
                  a.jd[d].map = null),
                  c.push(a.jd[d]));
              for (d = 0; d < c.length; d += 1)
                  a.jd = g.a.fo(a.jd, g.a.indexOf(a.jd, c[d]));
              var e = []
                , f = [];
              g.a.zva(function(b) {
                  if (!b.ei && b.Kg) {
                      var c = b.w || a.rla(b);
                      c && (a.jd.push(c),
                      c instanceof g.w.Ne || c instanceof g.w.xn ? c.Py(a) : c instanceof g.w.rb ? e.push(c.L) : f.push(c.L),
                      b.ei = !0)
                  }
              }, b);
              e.length && a.td.xx(e);
              f.length && (a.ws || (a.ws = new g.o.$c(new z.o.$c,a),
              a.ws.set("zIndex", 110),
              a.xa.push(a.ws)),
              a.ws.xx(f));
              a.set("display", 0)
          }
      },
      overlaysChanged: function() {
          this.jd = this.jd || [];
          this.get("overlays") && 0 === this.get("overlays").length ? this.r0() : this.w0 || (g.a.Qc(this.r0, this),
          this.w0 = !0)
      },
      contextmenusChanged: function() {
          var a = this.get("contextmenu");
          if (a) {
              var b = this;
              g.qb.load("overlay", function() {
                  b.Lx = new g.w.xn(a,b);
                  b.set("display", 0)
              })
          }
      },
      infosChanged: function() {
          var a = this.get("infos");
          if (a) {
              this.Zl = this.Zl || {};
              var b, c = this;
              g.qb.load("overlay", function() {
                  for (var d in a)
                      a.hasOwnProperty(d) && (b = a[d],
                      c.Zl[d] = c.Zl[d] || new g.w.Ne(b,c))
              })
          }
      },
      rla: function(a) {
          var b = null;
          if (a instanceof z.w.rb)
              b = new g.w.rb(a,this);
          else if (a instanceof z.w.xn)
              b = new g.w.xn(a,this);
          else if (a instanceof z.w.Ne)
              b = new g.w.Ne(a,this);
          else {
              var c = ["overlay"];
              "d" === this.get("overlayRender") ? (c.push("dvector"),
              g.l.xo ? c.push("svg") : c.push("vml")) : c.push("cvector");
              if (!this.Vxa && !g.qb.VC(c)) {
                  var d = this;
                  g.qb.Lg(c, function() {
                      this.Vxa = !0;
                      d.overlaysChanged()
                  });
                  return
              }
              a instanceof z.w.yc ? b = new g.w.yc(a,this) : a instanceof z.w.Lz ? b = new g.w.Lz(a,this) : a instanceof z.w.Xb ? b = new g.w.Xb(a,this) : a instanceof z.w.Ug ? b = new g.w.Ug(a,this) : a instanceof z.w.at ? b = new g.w.yc(a,this) : a instanceof z.w.ht && (b = new g.w.yc(a,this))
          }
          return b
      },
      E2: function() {
          var a = this.pe;
          !this.ju || this.th && this.th.fp || (a = "function" === typeof this.ju ? this.ju(this.Kk.R.zoom) : this.ju);
          return a
      },
      MAa: function() {
          function a() {}
          var b = new g.o.$c
            , c = []
            , d = new g.T(116.405467,39.907761);
          new g.style.wg.Th;
          for (var e = 0; 100 > e; e += 1)
              for (var f = 0; 100 > f; f += 1) {
                  var h = new g.T(d.Q + 0.02 * f,d.P + 0.02 * e)
                    , h = new g.Rh({
                      name: "point" + (100 * e + f),
                      map: this,
                      da: new g.Aa.vg(this.Ab(h))
                  });
                  c[100 * e + f] = h;
                  h.g("hover", a, h)
              }
          b.xx(c);
          this.xa.push(b)
      },
      ec: function() {},
      KAa: function(a) {
          var b = new g.o.$c
            , c = []
            , c = (new g.W9({
              map: this
          })).VS(a);
          b.xx(c);
          this.xa.push(b);
          this.set("display", 0)
      },
      Mf: function(a) {
          var b = this;
          a = a.Mf(this);
          if (!a)
              return null;
          if (a.length && "string" == typeof a[0])
              g.qb.Lg(a, function() {
                  b.layersChanged()
              });
          else
              return a;
          return null
      },
      FCa: function() {
          return this.Sa
      },
      SEa: function() {
          this.set("display", 0)
      },
      displayChanged: function(a) {
          this.i0 || this.SJ(a)
      },
      SJ: function(a) {
          if (a)
              if (g.a.fi(this.MD),
              g.l.El) {
                  var b = this;
                  setTimeout(function() {
                      b.kc()
                  }, 0)
              } else
                  this.kc();
          else
              this.Yv || (this.MD = g.a.Qc(this.kc),
              this.Yv = !0)
      },
      kc: function() {
          this.MD = null;
          if (!this.HP) {
              this.q("render");
              this.Yv = !1;
              var a = {};
              if (this.xa && (a.size = this.D.get("size"),
              a.size.width && a.size.height)) {
                  for (var b = this.D.view.type, c = [], d = 0, e = this.xa.length; d < e; d += 1)
                      this.xa[d].Bi && this.xa[d].Bi !== b ? this.xa[d].Ja = !0 : (c.push(this.xa[d]),
                      this.xa[d].bl && c.push(this.xa[d].bl));
                  c.sort(function(a, b) {
                      var c = a.get("zIndex")
                        , d = b.get("zIndex");
                      return c > d ? 1 : c === d ? a.gF > b.gF ? 1 : -1 : -1
                  });
                  a.xa = c;
                  c = g.l.ia ? Math.min(window.devicePixelRatio || 1, 2) : 1;
                  a.ala = 15E5 < a.size.width * a.size.height * c * c;
                  a.zI = !!this.D.get("rasterLayer");
                  a.Z = g.l.Z;
                  a.lang = this.get("lang");
                  a.R = this.D.tI();
                  a.Bi = b;
                  this.D.C = !0;
                  a.S = this.D.getResolution([0, 0]);
                  a.gs = this.D.get("mapStyle");
                  a.Tk = this.Tk;
                  this.D.C = !1;
                  a.Pd = this.Xg;
                  a.IBa = this.Fn;
                  a.Ye = this.Dk;
                  a.Mg = this.zg;
                  a.iU = this.zg && g.l.Z;
                  a.B8 = g.l.Z && this.Dk;
                  a.qK = g.l.Z && this.Xg;
                  this.qK = a.qK;
                  b = this.get("targetLevel") || a.R.zoom;
                  a.Zs = a.R.zoom > b;
                  a.Ff = a.R.zoom > b ? "zoomOut" : a.R.zoom < b ? "zoomIn" : "stable";
                  a.$Da = !0;
                  a.R0 = this.R0;
                  for (var b = !1, f, c = !1, d = 0; d < this.xa.length; d += 1)
                      this.xa[d].pi && this.xa[d].U.get("visible") && a.R.zoom <= this.xa[d].U.get("zooms")[1] && (a.kT = !0),
                      this.xa[d].te().Mc && (b = !0);
                  for (d = 0; d < this.xa.length; d += 1)
                      this.xa[d].U.QO && a.kT && (!this.Dk && this.xa[d].U.get("visible") && (f = this.xa[d].U.QO(),
                      f.lDa = 1,
                      f.zoom = a.R.zoom),
                      c = !0);
                  this.wb = [];
                  c && f && this.wb !== f && (this.wb = f);
                  a.wb = this.wb;
                  a.Mc = b;
                  a.scale = Math.pow(2, a.R.zoom - a.R.ze);
                  this.Kk = a;
                  this.hd = this.D.get("mask");
                  a.hd = this.hd;
                  a.cJ = this.cJ;
                  if (f = this.mI())
                      f.kc(a),
                      this.Tk = this.pQ = this.cJ = !1
              }
          }
      },
      mI: function() {
          if (!this.J || this.J.type !== this.D.view.type || this.J.Tra)
              if (this.J = null,
              "3D" == this.D.view.type) {
                  var a = this;
                  g.qb.load("Map3D", function() {
                      a.J || (a.J = new g.Ba.QE(a),
                      a.set("display"))
                  })
              } else
                  this.J = new g.N.canvas.Kb(this);
          return this.J
      },
      Loa: function() {
          var a = [], b = this.get("controls").Wc, c;
          for (c in b)
              b[c].ky && b[c].ky() && a.push(b[c].ky());
          return a
      },
      destroyChanged: function() {
          delete g.oe.uy[this.D._amap_id];
          this.HP = 1;
          this.fT(!0);
          this.V = {};
          this.Bc && (this.Bc.U.G("complete", this.Uq, this),
          this.Bc.Pg(),
          this.xa = g.a.fo(this.xa, g.a.indexOf(this.xa, this.Bc)));
          this.th && this.th.af && this.th.af.U && this.th.af.U.setMap();
          this.pja && clearTimeout(this.pja);
          this.Uia();
          this.Ufa();
          this.CN && this.CN();
          this.Zja();
          this.il();
          this.D = this.D.map = null;
          this.K = this.K.GL = null;
          this.hi();
          this.ve && (this.ve.stop(),
          this.ve = null);
          this.Ef && (this.Ef.stop(),
          this.Ef = null);
          this.Ad && (this.Ad.stop(),
          this.Ad = null);
          this.J && this.J.Of && this.J.Of();
          this.J = null
      },
      Zja: function() {
          var a = this.K;
          this.Nba();
          g.F.$la(a);
          g.j.ID(a);
          this.ul = null;
          g.j.ab(a, "amap-container");
          this.Sa = null
      },
      jogEnableChanged: function() {
          this.get("jogEnable") ? this.Pu = !0 : this.Pu = !1
      },
      drawChanged: function() {
          var a = this, b, c, d = this.get("draw");
          if (d) {
              this.Op || (this.Op = []);
              b = 0;
              for (c = this.Op.length; b < c; b += 1)
                  this.Op[b].Dua();
              g.qb.load("interaction", function() {
                  var b = new g.Sya({
                      type: d,
                      o: a.ws
                  },a);
                  a.Op.push(b);
                  a.loaded = !0
              })
          } else if (this.Op)
              for (b = 0,
              c = this.Op.length; b < c; b += 1)
                  this.Op[b].Dua(),
                  this.Op[b].iBa(),
                  this.G("click", this.Op[b].UCa, this)
      },
      Ae: function(a, b, c) {
          return this.D.view.Ae(a, b, c)
      },
      lg: function(a, b, c) {
          return this.D.view.lg(a, b, c)
      },
      o3: function(a, b) {
          var c = this.get("size")
            , d = document.createElement("canvas");
          a = a || c.width;
          b = b || c.height;
          d.width = a;
          d.height = b;
          for (var e = -(c.width - a) / 2, c = -(c.height - b) / 2, f = d.getContext("2d"), h = this.Sa.o.childNodes, k = [], l = 0; l < h.length; l += 1)
              k.push(h[l]);
          k.sort(function(a, b) {
              return a.style.zIndex - b.style.zIndex
          });
          for (l = 0; l < k.length; l += 1) {
              var m = k[l];
              if (g.j.bn(m, "amap-layer") || g.j.bn(m, "amap-e") || g.j.bn(m, "amap-labels"))
                  if ("CANVAS" === m.tagName) {
                      var h = c
                        , n = e
                        , p = parseFloat(m.style.width) || m.width
                        , q = parseFloat(m.style.height) || m.height
                        , r = 1;
                      m.style.transform && (r = parseFloat(m.style.transform.split("(")[1]));
                      f.drawImage(m, n, h, p * r, q * r)
                  } else if ("DIV" === m.tagName)
                      for (var r = m.childNodes, s = parseFloat(m.style.top) || 0 + c, m = parseFloat(m.style.left) || 0 + e, u = 0; u < r.length; u += 1) {
                          var v = r[u];
                          if ("CANVAS" === v.tagName || "IMG" === v.tagName)
                              h = parseFloat(v.style.top) || 0,
                              n = parseFloat(v.style.left) || 0,
                              p = parseFloat(v.style.width) || v.width,
                              q = parseFloat(v.style.height) || v.height,
                              f.drawImage(v, n + m, h + s, p, q)
                      }
          }
          return d.toDataURL()
      }
  });
  g.Kb.zb({
      Jea: function() {
          this.WA = !1;
          g.l.Cf && ("3D" === this.D.view.type ? this.eba() : this.cba());
          g.l.Z || this.$aa()
      },
      Uia: function() {
          g.l.Cf && ("3D" === this.D.view.type ? this.$fa() : this.Zfa());
          g.l.Z || this.Vfa()
      },
      rotateEnableChanged: function() {
          this.pva = this.get("rotateEnable");
          g.l.Cf && this.U0 && "3D" !== this.D.view.type && (this.pva ? this.U0() : this.Gsa())
      },
      zoomEnableChanged: function() {
          this.get("zoomEnable") ? (g.l.Cf && this.SO && "3D" !== this.D.view.type && this.SO(),
          g.l.Z || this.bba()) : (g.l.Cf && this.lS && this.lS(),
          g.l.Z || this.Yfa())
      },
      mousewheelChanged: function() {},
      $R: function(a) {
          a && (this.WA = a.Ot)
      },
      Qv: function() {
          this.WA = !1
      },
      wi: function(a, b, c, d) {
          var e, f = {};
          a || (a = window.event);
          var h = g.F.Sl(a, this.Sa.Yc);
          g.l.Cf && ("touchend" !== a.type ? this.V.pfa = h : h = this.V.pfa);
          f.tb = h;
          f.Na = this.lg(h);
          f.Na && (f.Na = f.Na.toFixed(3));
          f.Uf = this.Qd(f.Na);
          c || (c = this.WA ? this.WA ? [this.WA] : null : this.wda(f.Na, d)) && 0 < c.length && c[0].br && (e = c[0].br,
          f.Ot = c[0]);
          e || "info" === a.sf || (e = this);
          f.bd = e;
          f.Rza = a.altKey;
          f.ctrlKey = a.ctrlKey;
          f.button = void 0 === a.button ? 0 : a.button;
          b || g.F.preventDefault(a);
          return f
      },
      $M: function(a) {
          return a && a !== this && a !== document
      },
      UN: function() {
          var a = this.V;
          a.Tf && (a.Mj.tb.x === a.Tf.x && a.Mj.tb.y === a.Tf.y ? a.zg = !1 : (a.zg = !0,
          a.bp || (a.Fp.q("dragstart", a.Ep),
          a.bp = !0),
          a.Fp.q("dragging", a.Mj),
          a.Tf = a.Mj.tb))
      },
      fwa: function(a) {
          for (var b = [], c = 0; c < a.length; c += 1)
              a[c] && (b = b.concat(a[c]));
          return b
      },
      kv: function(a, b, c) {
          return a && b && (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < (c || 10)
      },
      wda: function(a, b) {
          var c = this.mI();
          if (!c)
              return null;
          var d, e = this;
          this.xa.sort(function(a, b) {
              return a.get("zIndex") > b.get("zIndex") ? -1 : 1
          });
          c.Bu(a, this.xa, function(a) {
              d = a;
              d = e.fwa(d)
          }, function() {
              d = []
          }, b);
          return d
      }
  });
  g.Kb.zb({
      Qea: function() {
          this.Fn = {};
          this.g("moveend", this.L5, this);
          g.l.El && (g.l.xK || g.l.iH) && this.g("zoomend", this.NU, this);
          this.g("movestart", this.M5, this);
          this.g("zoomstart", this.S5, this);
          this.g("zoomend", this.R5, this);
          this.LL();
          this.ot = 0;
          this.IF = {};
          "undefined" === typeof window.requestAnimationFrame && (this.ot = 2)
      },
      S5: function() {
          2 !== this.ot && 12 === this.get("zoom") && (this.ot = 1,
          g.a.AC.start(this.IF));
          this.Dk = !0
      },
      R5: function() {
          1 === this.ot && 13 !== this.get("zoom") && (this.ot = 0,
          g.a.AC.cancel(this.IF));
          this.Dk = !1;
          this.set("display")
      },
      M_: function(a, b) {
          this.Fn.left = 0 < a;
          this.Fn.right = 0 > a;
          this.Fn.qE = 0 < b;
          this.Fn.LP = 0 > b
      },
      Kt: function() {
          this.Fn.left = !1;
          this.Fn.right = !1;
          this.Fn.qE = !1;
          this.Fn.LP = !1
      },
      Ufa: function() {
          this.G("moveend", this.L5, this);
          g.l.El && (g.l.xK || g.l.iH) && this.G("zoomend", this.NU, this);
          this.G("movestart", this.M5, this);
          this.G("zoomstart", this.S5, this);
          this.G("zoomend", this.R5, this);
          this.Wfa()
      },
      L5: function(a) {
          this.zg = !1;
          this.Kt();
          this.a7();
          !a.x4 && this.D.get("limitBounds", null, !0) ? (a = this.Ila()) && !a.cb(this.get("center")) ? this.cK(this.get("zoom"), a, !1, !0) : this.na("moveend") : this.na("moveend");
          this.set("display")
      },
      M5: function() {
          this.zg = !0;
          this.Kt()
      },
      dragEnableChanged: function() {
          (this.pC = this.get("dragEnable")) ? this.KL() : this.BN()
      },
      na: function(a, b) {
          if (this.D.ee(a)) {
              var c;
              b && (c = b.B5 ? {
                  type: a,
                  newsize: b.B5,
                  oldsize: b.Hsa
              } : {
                  type: a,
                  pixel: b.tb,
                  target: this.D,
                  lnglat: b.Uf
              });
              this.D.q(a, c)
          }
      },
      LL: function() {
          this.g("click", this.rZ);
          this.g("dblclick", this.vZ);
          g.l.Cf && this.sW();
          g.l.Z || this.aba()
      },
      Wfa: function() {
          this.G("click", this.rZ);
          this.G("dblclick", this.vZ);
          g.l.Cf && this.gZ();
          g.l.Z || this.Xfa()
      },
      pG: function(a, b) {
          var c = this.get("targetLevel") || this.get("zoom")
            , c = 0 < b ? Math.floor(c) + 1 : Math.ceil(c) - 1
            , c = Math.min(Math.max(c, this.get("zooms")[0]), this.get("zooms")[1]);
          c === this.get("zoom") || this.Ef && this.Ef.vv && c === this.Ef.end || this.Jz(c, !1, a)
      },
      rZ: function(a) {
          this.na("click", a)
      },
      vZ: function(a) {
          this.get("doubleClickZoom") && this.get("zoomEnable") && this.pG(a.Na, 1);
          this.na("dblclick", a)
      },
      wAa: function(a) {
          this.pG(a.KFa, a.i8);
          this.na("touchend", a)
      },
      KL: function() {
          this.pC && ("3D" === this.D.view.type ? (this.g("dragstart", this.BZ),
          this.g("dragging", this.xZ),
          this.g("dragend", this.zZ)) : (this.g("dragstart", this.AZ),
          this.g("dragging", this.wZ),
          this.g("dragend", this.yZ)))
      },
      BN: function() {
          this.pC || ("3D" === this.D.view.type ? (this.G("dragstart", this.BZ),
          this.G("dragging", this.xZ),
          this.G("dragend", this.zZ)) : (this.G("dragstart", this.AZ),
          this.G("dragging", this.wZ),
          this.G("dragend", this.yZ)))
      },
      AZ: function(a) {
          this.$R(a);
          this.Kt();
          this.Xg = !0;
          this.V.Yx = a.tb.x;
          this.V.qC = a.tb.y;
          this.ve && (this.ve.stop(),
          this.Jr(!0));
          this.na("dragstart");
          this.na("movestart");
          this.q("movestart", a);
          this.lwa()
      },
      wZ: function() {
          var a = this.V
            , b = a.Mj.tb.x - a.Yx
            , c = a.Mj.tb.y - a.qC;
          if (c || b) {
              this.V.zg = !0;
              this.M_(b, c);
              a.Yx = a.Mj.tb.x;
              a.qC = a.Mj.tb.y;
              var a = b
                , d = c
                , e = this.rotation;
              e && (e *= Math.PI / 180,
              a = b * Math.cos(e) + Math.sin(e) * c,
              d = -Math.sin(e) * b + Math.cos(e) * c);
              a = this.get("centerCoords").$a((new g.H(a,d)).Gd(this.S));
              (d = this.s1(a)) && (c = Math.round(this.Ae(d).$a(this.Ae(a)).y));
              this.Bo(this.Sa.qr, b, c);
              a.x = (a.x + g.a.Ca) % g.a.Ca;
              this.set("centerCoords", a, !0);
              this.set("center", this.Qd(a), !0);
              this.Pu && (this.Yg ? (a = new Date,
              this.vt = 100 < a - this.Yg ? new g.H(0,0) : new g.H(b,c),
              this.Yg = a) : this.Yg = new Date);
              this.na("dragging");
              this.na("mapmove")
          } else
              this.V.zg = !1,
              this.vt = null,
              this.Kt()
      },
      Bo: function(a, b, c) {
          if (a && !(1 > Math.abs(b) && 1 > Math.abs(c))) {
              var d = parseFloat(a.style.top) || 0
                , e = parseFloat(a.style.left) || 0
                , f = "";
              this.rotation && (f = g.j.Ls[g.j.eg] + ":rotate(" + this.rotation + "deg);overflow:visible;");
              a.style.cssText = "position:absolute;top:" + (d + c) + "px;left:" + (e + b) + "px;" + f
          }
      },
      s1: function(a) {
          var b = this.D.view.VV()
            , c = this.PT.height * this.S / 2;
          return a.y < b.fc + c ? (a.y = b.fc + c,
          a) : a.y > b.vc - c ? (a.y = b.vc - c,
          a) : null
      },
      yZ: function() {
          this.Qv();
          100 < new Date - this.Yg && (this.vt = null);
          this.V.Tf = null;
          this.Xg = !1;
          this.Kt();
          this.na("dragend");
          if (this.Pu && this.vt)
              if (this.V.zg) {
                  var a = this.vt
                    , b = new g.H(0,0);
                  this.ve = new g.vj(a,b,function(a, b, e) {
                      return 600 <= e ? b : a.Gd(1 - Math.pow(e / 600, 2)).floor()
                  }
                  ,1);
                  this.ve.$p = function(a) {
                      if (2 > Math.abs(a.x) && 2 > Math.abs(a.y))
                          this.ve.stop(),
                          this.q("moveend"),
                          this.Jr(),
                          this.vt = this.Yg = null;
                      else {
                          var b = a.x
                            , e = a.y
                            , f = this.rotation;
                          f && (f *= Math.PI / 180,
                          b = a.x * Math.cos(f) + Math.sin(f) * a.y,
                          e = -Math.sin(f) * a.x + Math.cos(f) * a.y);
                          b = this.get("centerCoords").$a((new g.H(b,e)).Gd(this.S));
                          e = this.s1(b);
                          f = a.y;
                          e && (f = Math.round(this.Ae(e).$a(this.Ae(b)).y));
                          this.Bo(this.Sa.qr, a.x, f);
                          b.x = (b.x + g.a.Ca) % g.a.Ca;
                          this.set("centerCoords", b, !0);
                          this.set("center", this.Qd(b), !0);
                          this.na("mapmove")
                      }
                  }
                  ;
                  this.ve.sn(this)
              } else
                  this.q("moveend"),
                  this.Jr(!0),
                  this.vt = this.Yg = null;
          else
              this.q("moveend"),
              this.Jr(),
              this.vt = this.Yg = null
      },
      lwa: function() {
          if (!this.V.refresh) {
              var a = this
                , b = null;
              this.V.refresh = setInterval(function() {
                  b !== a.V.Tf && (a.set("display", 0),
                  b = a.V.Tf)
              }, g.l.Z ? 400 : 100)
          }
      },
      NU: function() {
          if (g.l.El && (g.l.xK || g.l.iH)) {
              for (var a = this.Sa.o.childNodes, b = 0; b < a.length; b += 1) {
                  var c = a[b];
                  c instanceof HTMLCanvasElement && (c.width = 0);
                  "amap-e" === c.className && (c.style.height = "0")
              }
              for (b = 0; b < this.xa.length; b += 1)
                  c = this.xa[b],
                  "undefined" !== typeof AMap.IndoorMap && c instanceof AMap.IndoorMap && (c.Qt && (c.Qt.width = 0),
                  c.rx && (c.rx.width = 0))
          }
      },
      Jr: function(a) {
          this.V.refresh && (clearInterval(this.V.refresh),
          this.V.refresh = null);
          a || (this.NU(),
          this.set("display", 0))
      },
      a7: function(a) {
          this.set("refresh", a)
      }
  });
  g.Kb.zb({
      setZoomSlow: function(a) {
          this.cK(a, null, !this.get("animateEnable"))
      },
      setPanTo: function(a) {
          this.cK(null, a, !this.get("animateEnable"))
      },
      zoomAndCenterChanged: function(a) {
          var b = a[0];
          b < this.get("zooms")[0] && (b = this.get("zooms")[0]);
          b > this.get("zooms")[1] && (b = this.get("zooms")[1]);
          this.cK(b, a[1], a[2] || !this.get("animateEnable"))
      },
      zoomChanged: function() {
          this.S = Math.pow(2, 20 - this.get("zoom"));
          this.q("closeOverlays");
          this.set("display")
      },
      rotationChanged: function(a) {
          this.rotation = this.get("rotation");
          this.D.q("rotate", {
              rotation: this.rotation || 0
          });
          !0 !== a && this.set("display", 0)
      },
      pitchChanged: function() {
          this.pitch = this.get("pitch");
          this.D.q("pitch", {
              pitch: this.pitch || 0
          });
          this.set("display", 0)
      },
      centerCoordsChanged: function() {
          this.q("closeOverlays");
          this.Wza ? this.SJ(!0) : this.SJ(!1)
      }
  });
  g.MV = g.aa.extend({
      ja: [g.sa, g.Oe],
      r: function(a, b) {
          this.type = "2D";
          this.We(b, !0);
          a && this.cla(a)
      },
      cla: function(a) {
          this.map = a;
          this.Pe(["size", "refresh", "maxPitch"], a);
          this.centerChanged();
          a.Pe(["zoom", "center", "centerCoords", "rotation", "pitch"], this)
      },
      VV: function() {
          this.AL || this.rma();
          return this.AL
      },
      rma: function() {
          var a;
          if (this.get("center")instanceof g.T) {
              a = new g.me(-180,-85,180,85);
              var b = this.map.Ab(a.Oj());
              a = this.map.Ab(a.po());
              this.AL = {
                  Jc: b.x,
                  fc: b.y,
                  Hc: a.x,
                  vc: a.y
              }
          } else
              a = this.map.get("limitBounds", null, !0),
              this.AL = {
                  Jc: a[0],
                  fc: a[1],
                  Hc: a[2],
                  vc: a[3]
              }
      },
      tI: function() {
          var a = this.map
            , b = this.get("zoom");
          return {
              zoom: b,
              eh: this.get("center"),
              Ga: this.Ql(),
              nb: this.get("centerCoords"),
              rotation: parseInt(this.get("rotation")),
              yf: a.get("crs"),
              S: Math.pow(2, 20 - b),
              ze: Math.round(b),
              sg: Math.pow(2, 20 - Math.round(this.get("zoom")))
          }
      },
      centerChanged: function() {
          this.set("centerCoords", this.map.Ab(this.get("center")).toFixed(3), !0)
      },
      centerCoordsChanged: function() {
          var a = this.map;
          a.C = !0;
          var b = this.VV()
            , c = this.get("centerCoords")
            , d = a.getSize();
          a.C = !1;
          var e = this.get("zoom", null, !0)
            , a = this.get("center", null, !0)
            , d = d.height * Math.pow(2, 20 - e) / 2;
          a instanceof g.T ? c.x = (c.x + 268435456) % 268435456 : 0 > c.x ? c.x = 0 : c.x > b.Hc && (c.x = b.Hc);
          c.y < b.fc + d ? c.y = b.fc + d : c.y > b.vc - d && (c.y = b.vc - d);
          this.set("center", this.map.Qd(c), !0)
      }
  });
  g.bF = g.MV.extend({
      Ql: function() {
          var a = this.get("size")
            , b = this.get("centerCoords")
            , c = parseInt(this.get("rotation")) % 360
            , d = this.get("zoom", null, !0)
            , e = Math.pow(2, 20 - d)
            , c = Math.PI * c / 180
            , a = new g.H((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2,(Math.abs(a.width * Math.sin(c)) + Math.abs(a.height * Math.cos(c))) / 2)
            , e = new g.Gf(b.$a(a.Gd(e)),b.add(a.Gd(e)))
            , c = this.map.get("targetLevel");
          if (c > d - 1) {
              var f = Math.pow(2, 20 - c);
              e.s9 = new g.Gf(b.$a(a.Gd(f)),b.add(a.Gd(f)))
          }
          e.g8 = c || d;
          e.tc = a;
          return e
      },
      Coa: function(a) {
          var b = this.get("size")
            , c = this.get("centerCoords")
            , d = parseInt(this.get("rotation")) % 360
            , d = Math.PI * d / 180
            , b = new g.H((Math.abs(b.width * Math.cos(d)) + Math.abs(b.height * Math.sin(d))) / 2,(Math.abs(b.width * Math.sin(d)) + Math.abs(b.height * Math.cos(d))) / 2);
          a = Math.pow(2, 20 - a);
          return new g.Gf(c.$a(b.Gd(a)),c.add(b.Gd(a)))
      },
      pd: function() {
          var a = this.Ql()
            , b = a.Fd.x
            , c = a.Zb.y
            , a = new g.H(a.Zb.x,a.Fd.y)
            , b = new g.H(b,c);
          return new g.me(this.map.Qd(a),this.map.Qd(b))
      },
      zoomChanged: function() {},
      Ae: function(a, b) {
          this.get("size");
          var c = a.jb()
            , d = this.get("centerCoords")
            , e = c.$a(d);
          e.x < -g.a.Ca / 2 ? e.x += g.a.Ca : e.x > g.a.Ca / 2 && (e.x -= g.a.Ca);
          var c = this.get("size").cE().dd(2)
            , f = this.get("rotation") * Math.PI / 180
            , d = e.x * Math.cos(f) - Math.sin(f) * e.y
            , e = Math.sin(f) * e.x + Math.cos(f) * e.y;
          return c.add((new g.H(d,e)).Gd(Math.pow(2, (b || this.get("zoom")) - 20)))
      },
      lg: function(a, b) {
          var c = this.get("size").cE().dd(2)
            , d = a.$a(c)
            , e = this.get("rotation") * Math.PI / 180
            , c = d.x * Math.cos(e) + Math.sin(e) * d.y
            , d = -Math.sin(e) * d.x + Math.cos(e) * d.y
            , c = this.get("centerCoords").add((new g.H(c,d)).Gd(Math.pow(2, 20 - (b || this.get("zoom")))));
          c.x = (c.x + 268435456) % 268435456;
          return c
      }
  });
  g.uL = g.MV.extend({
      r: function(a, b) {
          this.Xf = new g.Ec;
          this.Zc = new g.Ec([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]);
          arguments.callee.ka.apply(this, arguments);
          this.scale = 1;
          this.type = "3D";
          this.Cz = null;
          this.w6 = "";
          this.R = ["", 0, 0, "", 0];
          this.Cz = {}
      },
      refreshChanged: function() {
          this.zq()
      },
      zoomChanged: function(a) {
          this.zq();
          this.R[4] = a
      },
      centerChanged: function(a) {
          arguments.callee.ka.apply(this, arguments);
          this.zq()
      },
      centerCoordsChanged: function(a) {
          arguments.callee.ka.apply(this, arguments);
          this.zq();
          this.R[0] = a.toString()
      },
      rotationChanged: function(a) {
          this.zq();
          this.R[2] = a
      },
      pitchChanged: function(a) {
          this.Ge.pitch = Math.min(this.get("maxPitch"), Math.max(a, 0));
          this.zq();
          this.R[1] = a
      },
      zq: function() {
          if (!this.Mxa() && (this.BU(),
          this.mna(),
          this.map)) {
              var a = this
                , b = function() {
                  a.map.camera = a.I2();
                  a.map.q("camerachange", {
                      map: a.map,
                      camera: a.map.camera
                  })
              };
              a.map.Ja ? b() : this.map.g("complete", b, this)
          }
      },
      I2: function() {
          return {
              height: this.Rm,
              fov: this.soa,
              aspect: this.MB,
              near: this.My,
              far: this.UH,
              position: this.yla,
              rotation: this.Ge.rotation,
              pitch: this.Ge.pitch
          }
      },
      mna: function() {
          this.qfa = g.a.wf()
      },
      wo: function() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 300;
          return g.a.wf() - this.qfa > a
      },
      BU: function() {
          var a = this.get("centerCoords")
            , b = this.get("pitch")
            , c = this.get("rotation")
            , d = (new g.Ec).C7(-a.x + g.a.ac.x, -a.y + g.a.ac.y, 0);
          this.yla = {
              x: a.x - g.a.ac.x,
              y: a.y - g.a.ac.y
          };
          a = (new g.Ec).fz(180 - b, 1, 0, 0);
          this.Vta = (new g.Ec).set(a);
          c = (new g.Ec).fz(c, 0, 0, 1);
          this.Bs = (new g.Ec).set(c);
          this.roa = d.Ig();
          this.Zc = (new g.Ec).C7(0, 0, -this.Rm).multiply(a.multiply(c.multiply(d))).toFixed(8);
          this.Zc.Te = this.Zc.Ig()
      },
      Mxa: function(a) {
          a = a || this.get("zoom");
          var b = this.get("size")
            , c = b.width
            , b = b.height;
          if (!c || !b)
              return !0;
          this.MB = c /= b;
          b = b / 2 * Math.pow(2, 20 - a);
          a = g.a.nc((56 - a) * Math.PI / 180, 2);
          var d = g.a.nc(b / Math.tan(a / 2), 0);
          2400 > d && (d = 2400,
          a = 2 * Math.atan(b / d));
          this.soa = a;
          this.Rm = d;
          this.My = this.Rm / 10;
          this.UH = 50 * this.Rm;
          this.Xma = (this.Rm - this.My) / (this.UH - this.My);
          this.Xf.z7(a, c, this.My, this.UH);
          this.Xf.Te = this.Xf.Ig();
          a = this.Xf;
          var c = new g.fV
            , b = c.xD
            , e = this.Xf.elements
            , d = e[0]
            , f = e[1]
            , h = e[2]
            , k = e[3]
            , l = e[4]
            , m = e[5]
            , n = e[6]
            , p = e[7]
            , q = e[8]
            , r = e[9]
            , s = e[10]
            , u = e[11]
            , v = e[12]
            , x = e[13]
            , t = e[14]
            , e = e[15];
          uc(b[0], k - d, p - l, u - q, e - v).normalize();
          uc(b[1], k + d, p + l, u + q, e + v).normalize();
          uc(b[2], k + f, p + m, u + r, e + x).normalize();
          uc(b[3], k - f, p - m, u - r, e - x).normalize();
          uc(b[4], k - h, p - n, u - s, e - t).normalize();
          uc(b[5], k + h, p + n, u + s, e + t).normalize();
          a.tQ = c
      },
      tI: function() {
          var a = this.map;
          a.map.Av && (this.zq(),
          this.R[3] = a.get("size").toString());
          var b = this.R.toString();
          if (b !== this.w6) {
              var c = this.get("zoom")
                , d = this.Cz;
              d.zoom = c;
              d.MB = this.MB;
              d.top = this.top;
              d.Ga = this.Ql();
              d.nb = this.get("centerCoords");
              d.rotation = a.get("rotateEnable") && parseInt(this.get("rotation")) || 0;
              d.pitch = this.get("pitch") || 0;
              d.BGa = this.get("yaw");
              d.yf = a.get("crs");
              d.S = Math.pow(2, 20 - c);
              d.ze = Math.round(c);
              d.U5 = Math.floor(c);
              d.sg = Math.pow(2, 20 - d.ze);
              d.ita = Math.pow(2, 20 - d.U5);
              d.Xf = this.Xf;
              d.Zc = this.Zc;
              this.w6 = d.key = b
          }
          this.Cz.eh = this.get("center");
          this.Cz.xq = g.a.wf();
          this.Cz.wo = this.wo();
          return this.Cz
      },
      Ql: function() {
          var a = this.get("size")
            , b = a.width
            , a = a.height;
          if (!b || !a)
              return null;
          var c, d;
          d = 0;
          var e = new g.H(0,d);
          c = this.lg(e, !0);
          if (55 < this.Ge.pitch || !c)
              for (; !c; )
                  d += a / 40,
                  e.y = d,
                  c = this.lg(e, !0);
          this.top = d / a;
          e.x = b;
          d = this.lg(e, !0);
          var f = 0
            , h = this.Ge.zoom;
          50 <= this.Ge.pitch && 18 <= h && (f = 0);
          e.y = a + f;
          f = this.lg(e, !0);
          e.x = 0;
          h = this.lg(e, !0);
          c = [c.fl(), d.fl(), f.fl(), h.fl(), c.fl()];
          c = new g.J9(c);
          e.x = b / 2;
          e.y = a + 256;
          c.cP = this.lg(e, !0);
          return c
      },
      pd: function() {
          var a = this.Ql();
          if (a) {
              for (var b = [], c = 0; c < a.path.length; c += 1) {
                  var d = this.map.Qd(new g.H(a.path[c][0],a.path[c][1]));
                  b.push(d)
              }
              return new g.Ro(b)
          }
      },
      Ae: function(a, b, c) {
          a.z = c || 0;
          a = this.u5([a]);
          a = a[0];
          return new g.H(a.x,a.y)
      },
      M2: function(a) {
          var b = this.get("size");
          a = new g.nl([a.x / b.width * 2 - 1, 1 - a.y / b.height * 2, -1, 1]);
          a.multiply(this.My);
          return this.Xf.Te.mh(a)
      },
      lg: function(a, b, c) {
          var d;
          this.map ? (this.map.C = !0,
          d = this.map.getSize(!0),
          this.map.C = !1) : d = this.get("size");
          var e = a.x / d.width * 2 - 1;
          d = 1 - a.y / d.height * 2;
          a = new g.nl([e, d, -1, 1]);
          a.multiply(this.My);
          if (!this.Xf.Te)
              return null;
          a = this.Xf.Te.mh(a);
          e = new g.nl([e, d, 1, 1]);
          e.multiply(this.UH);
          d = this.Xf.Te.mh(e);
          var f = this.Zc.Te
            , e = f.mh(a).elements;
          a = f.mh(d).elements;
          c = (e[2] - (-c || 0)) / (e[2] - a[2]);
          if (0 > a[2] || 0 > c || b && c > 2.5 * this.Xma)
              return null;
          b = e[0] - c * (e[0] - a[0]);
          c = e[1] - c * (e[1] - a[1]);
          return isNaN(b) || isNaN(c) ? null : (new g.H(b,c)).add(g.a.ac)
      },
      u5: function(a) {
          for (var b = this.get("centerCoords"), c = g.a.ac.x, d = g.a.ac.y, e = this.get("size"), f = g.a.Ca, h = b.x + f / 2, b = b.x - f / 2, k = [], l = new g.nl([0, 0, 0, 1]), m = l.elements, n = new g.H(0,0), p = g.Ec.multiply(this.Xf, this.Zc), q = 0, r = a.length; q < r; q++)
              if (a[q]) {
                  a[q].concat ? (n.x = a[q][0],
                  n.y = a[q][1],
                  n.z = -a[q][2] || 0) : (n.x = a[q].x,
                  n.y = a[q].y,
                  n.z = -a[q].z || 0);
                  h < n.x ? n.x -= f : b > n.x && (n.x += f);
                  m[0] = n.x - c;
                  m[1] = n.y - d;
                  m[2] = n.z;
                  var s = p.mh(l);
                  s.multiply(1 / s.elements[3]);
                  k[q] = {
                      x: (s.elements[0] + 1) / 2 * e.width,
                      y: (-s.elements[1] + 1) / 2 * e.height,
                      z: s.elements[2]
                  }
              }
          return k
      },
      nya: function(a) {
          var b = this.get("size");
          a = this.Xf.mh(this.Zc.mh((new g.nl).copy(a)));
          a.multiply(1 / a.elements[3]);
          b = new g.H((a.elements[0] + 1) / 2 * b.width,(-a.elements[1] + 1) / 2 * b.height);
          b.z = a.elements[2];
          return b
      }
  });
  g.a.ac = new g.H(215440491,106744817);
  g.Kb.zb({
      n1: function(a, b, c) {
          var d = this;
          d.vE ? (clearTimeout(d.vE),
          d.vE = null) : (d.na("zoomstart", {
              zoom: a
          }),
          d.q("zoomstart"));
          d.vE = setTimeout(function() {
              d.vE = null;
              d.na("zoomend", {
                  zoom: a
              });
              d.na("zoomchange", {
                  zoom: a
              });
              d.q("zoomend")
          }, 150);
          a = g.a.nc(a, 2);
          d.Jz(a, !0, b, c)
      },
      Jz: function(a, b, c, d) {
          var e = this.get("zoom");
          if (e !== a) {
              var f = this.get("zooms");
              "3D" !== this.D.view.type && (g.l.Z || g.l.ue) && (b = !0);
              a = a || e;
              a = Math.min(Math.max(a, f[0]), f[1]);
              var h = a !== e
                , k = !!c;
              this.ve && (this.ve.stop(),
              this.ve = null);
              c = c || this.get("centerCoords");
              var l = this.Ae(c);
              c = function(c) {
                  b || (c = g.a.nc(c, 2));
                  var d = this.lg(l);
                  this.set("zoom", c);
                  var e = this.lg(l)
                    , d = e && e ? e.$a(d) : new g.H(0,0);
                  this.set("centerCoords", this.get("centerCoords").$a(d).toFixed(3));
                  d.x && d.y && this.na("mapmove");
                  c === a && a << 0 === a && (this.set("targetLevel", null),
                  h && !this.vE && (this.na("zoomchange"),
                  this.na("zoomend")),
                  this.q("zoomend"),
                  k && this.q("moveend"),
                  this.Ef = null)
              }
              ;
              var m;
              this.Ad && this.Ad.vv && (this.Ad.stop(),
              this.Ad.jR && (d = !0),
              this.Ad.GC && (m = !0),
              this.Ad = null,
              this.set("targetLevel", null));
              this.Ef && this.Ef.vv && (this.Ef.stop(),
              d = !0,
              this.Ef.GC && (m = !0),
              this.Ef = null,
              this.set("targetLevel", null));
              h && !d && this.na("zoomstart");
              k && !m && this.na("movestart");
              this.q("zoomstart");
              b ? c.call(this, a) : (this.Ef = new g.vj(e,a,null,0.04),
              this.Ef.jR = h,
              this.Ef.GC = k,
              this.Ef.transition = function(a, b, c) {
                  return c >= g.A.cH ? b : (b - a) * (1 - Math.pow(1 - c / g.A.cH, 4)) + a
              }
              ,
              this.Ef.$p = c,
              this.Ef.sn(this, !0),
              this.set("targetLevel", a))
          }
      },
      cK: function(a, b, c, d) {
          var e = null;
          a || (a = this.Ad ? this.Ad.wwa : this.get("targetLevel") || this.get("zoom"));
          var e = b ? this.Ab(b).toFixed(3) : this.Ad ? this.Ad.f8 : this.get("centerCoords")
            , f = a !== this.get("zoom")
            , h = !e.cb(this.get("centerCoords"))
            , k = b = !1;
          this.Ef && this.Ef.vv && (this.Ef.stop(),
          b = !0,
          this.Ef.GC && (k = !0),
          this.Ef = null,
          this.set("targetLevel", null));
          this.Ad && this.Ad.vv && (this.Ad.stop(),
          this.Ad.jR && (b = !0),
          this.Ad.GC && (k = !0),
          this.Ad = null,
          this.set("targetLevel", null));
          this.ve && (this.ve.stop(),
          this.ve = null);
          if (f || h) {
              if (!this.D.view.Ql().contains(e) || f && "3D" !== this.D.view.type && (g.l.Z || g.l.ue))
                  c = !0;
              if (c)
                  f && (b || (this.q("zoomstart"),
                  this.na("zoomstart")),
                  this.set("zoom", a),
                  this.na("zoomchange"),
                  this.na("zoomend"),
                  this.q("zoomend")),
                  h && (k || d || (this.na("movestart"),
                  this.q("movestart")),
                  this.set("centerCoords", e),
                  this.na("mapmove"),
                  this.q("moveend", {
                      x4: d
                  })),
                  this.set("targetLevel", null);
              else {
                  this.set("targetLevel", a);
                  var l = a - this.get("zoom")
                    , m = e.$a(this.get("centerCoords")).toFixed(3);
                  this.Ad = new g.vj(1,0,null,0.001);
                  this.Ad.jR = f;
                  this.Ad.GC = h;
                  this.Ad.f8 = e;
                  this.Ad.wwa = a;
                  this.Ad.transition = function(a, b, c) {
                      return Math.pow(1 - Math.min(g.A.cH, c) / g.A.cH, 2)
                  }
                  ;
                  this.Ad.$p = function(b) {
                      0.02 > b ? (this.Ad && (this.Ad.stop(),
                      this.Ad = null),
                      f && (this.set("zoom", a),
                      this.na("zoomchange"),
                      this.na("zoomend"),
                      f = !1,
                      this.q("zoomend")),
                      h && (this.set("centerCoords", e),
                      this.q("mapmove"),
                      this.q("moveend", {
                          x4: d
                      })),
                      this.set("targetLevel", null)) : (f && this.set("zoom", a - l * b),
                      h && (b = e.$a(m.Gd(b)).toFixed(3),
                      this.set("centerCoords", b),
                      this.na("mapmove")));
                      this.set("display", 1)
                  }
                  ;
                  this.Ad.sn(this);
                  f && !b && (this.q("zoomstart"),
                  this.na("zoomstart"));
                  !h || k || d || (this.q("movestart"),
                  this.na("movestart"))
              }
          }
      }
  });
  g.o = {};
  g.o.Tb = g.aa.extend({
      ja: [g.sa, g.Oe],
      r: function(a, b) {
          this.U = a;
          this.lb = [3, 18];
          this.gF = g.a.ub(this);
          a && this.Pe(["opacity", "visible", "zIndex", "zooms"], a);
          a.Bi = b.D.view.type;
          this.e = b;
          this.W("display", b)
      },
      Pg: function() {
          this.pi && this.oP();
          if (g.Da && g.Da.Cq && g.Da.Cq.length) {
              var a = g.a.indexOf(g.Da.Cq, this);
              -1 !== a && (g.Da.Cq = g.a.fo(g.Da.Cq, a))
          }
          if (a = this.Lb) {
              if (a.length)
                  for (var b = 0; b < a.length; b += 1)
                      a[b].parentNode && a[b].parentNode.removeChild(a[b]);
              else
                  a.parentNode && a.parentNode.removeChild(a);
              this.Lb = null
          }
          this.U.Pg && this.U.Pg();
          this.U.ei = !1;
          this.U.o = null;
          this.il();
          var c;
          this.N && (this.N.Lj(),
          this.N = null,
          c = "-" + this.dc);
          this.$f && (this.$f.Lj(),
          this.$f = null,
          c = "-" + this.dc);
          if (c)
              for (var d in g.Da.rj)
                  g.a.vC(d, c) && delete g.Da.rj[d]
      },
      na: function(a, b) {
          this.U.q(a, b)
      },
      visibleChanged: function() {
          this.set("display", 0)
      },
      zIndexChanged: function() {
          this.set("display", 0)
      },
      GT: function(a) {
          g.j.lq(a, this.opacity)
      },
      opacityChanged: function() {
          var a = this.get("opacity");
          this.opacity = Math.min(Math.max(0, a), 1);
          if (a = this.Lb)
              if (a.length)
                  for (var b = 0; b < a.length; b += 1)
                      this.GT(a[b]);
              else
                  this.GT(a);
          this.e && this.e.D && "3D" == this.e.D.view.type && this.set("display", 0)
      },
      mo: function() {
          return this.e.hd && !this.U.get("rejectMapMask")
      },
      jI: function() {
          var a = this.get("bounds");
          if (a) {
              if (a instanceof g.me) {
                  var b = a.Oj()
                    , a = a.po()
                    , c = this.e.Ab(new g.T(180,0)).x
                    , d = this.e.Ab(b)
                    , e = this.e.Ab(a)
                    , f = this.e.get("center");
                  b.Q > a.Q && (0 < f.Q ? e.x += c : d.x -= c);
                  this.I = [d.x, d.y, e.x, e.y]
              } else
                  a instanceof g.Gf ? this.I = [a.Zb.x, a.Zb.y, a.Fd.x, a.Fd.y] : a instanceof g.cF && "3D" === this.U.Bi && (b = a.path[1],
                  d = this.e.Ab(a.path[0]),
                  e = this.e.Ab(b),
                  this.I = [d.x, d.y, e.x, e.y, a.p7, a.height]);
              return this.I
          }
          return null
      }
  });
  var Nc = function() {
      function a(a) {
          this.fF[g.a.ub(a)] = a;
          return this
      }
      function b(a) {
          this.fF[g.a.ub(a)] = null;
          return this
      }
      return function() {
          function c() {
              var a = c.fF, b, f = [], h;
              for (h in a)
                  a.hasOwnProperty(h) && f.push(a[h]);
              for (a = f.length - 1; 0 <= a; a -= 1)
                  h = f[a].apply(this, arguments),
                  void 0 !== h && (b = h);
              return b
          }
          c.fF = {};
          c.C0 = a;
          c.QEa = b;
          return c
      }
  }();
  g.dg = g.aa.extend({
      ja: [g.sa],
      r: function(a, b) {
          this.gp = a | 0;
          this.jF = !!b;
          this.count = 0;
          this.rJ = Nc();
          this.clear();
          this.VA = []
      },
      Qk: function() {
          return !this.count
      },
      jDa: function() {
          return this.count >= this.gp
      },
      yFa: function(a) {
          this.gp !== a && (this.gp = a | 0) && this.l0(this.gp)
      },
      Wc: function(a) {
          return !!this.e[a]
      },
      get: function(a, b) {
          var c = this.tX(a);
          return c ? c.value : b
      },
      set: function(a, b) {
          var c = this.tX(a);
          c ? c.value = b : (c = new g.dg.Kq(a,b),
          this.e[a] = c,
          this.MA(c),
          this.count += 1,
          this.count > this.gp && this.l0(this.gp))
      },
      Sv: function(a) {
          this.remove(a)
      },
      remove: function(a) {
          return this.e.hasOwnProperty(a) && this.mB(this.e[a]) ? !0 : !1
      },
      forEach: function(a, b) {
          for (var c = this.Uc.next; c !== this.Uc; c = c.next)
              a.call(b, c.value, c.key, this)
      },
      yJ: function(a, b) {
          return this.e.hasOwnProperty(a) ? this.e[a].value : b
      },
      sEa: function() {
          return this.Uc.next.value
      },
      tEa: function() {
          return this.Uc.Fa.value
      },
      shift: function() {
          return this.g_(this.Uc.next)
      },
      w1: function() {
          this.VA.length = 0
      },
      d5: function(a) {
          this.VA.push(a)
      },
      push: function(a) {
          a = new g.dg.Kq("",a);
          0 === this.count ? (this.Uc.Fa = null,
          a.Fa = this.Uc,
          this.Uc.next = a) : (this.CB.next = a,
          a.Fa = this.CB);
          this.count += 1;
          this.CB = a
      },
      Cxa: function(a) {
          a = new g.dg.Kq("",a);
          0 === this.count ? (this.Uc.Fa = null,
          a.Fa = this.Uc,
          this.CB = this.Uc.next = a) : (this.Uc.next.Fa = a,
          a.next = this.Uc.next,
          a.Fa = this.Uc,
          this.Uc.next = a);
          this.count += 1
      },
      ysa: function() {
          if (this.count) {
              this.count -= 1;
              var a = this.Uc.next;
              a.next ? (a.next.Fa = this.Uc,
              this.Uc.next = a.next) : (this.Uc.next = null,
              this.CB = this.Uc.Fa = null);
              a.next = null;
              a.Fa = null;
              return a.value
          }
          return null
      },
      pop: function() {
          return this.g_(this.Uc.Fa)
      },
      tX: function(a) {
          if (this.e.hasOwnProperty(a))
              return a = this.e[a],
              this.jF && (a.remove(),
              this.MA(a)),
              a
      },
      MA: function(a) {
          this.jF ? (a.next = this.Uc.next,
          a.Fa = this.Uc,
          this.Uc.next = a,
          a.next.Fa = a) : (a.Fa = this.Uc.Fa,
          a.next = this.Uc,
          this.Uc.Fa = a,
          a.Fa.next = a)
      },
      l0: function(a) {
          if (!(this.count <= a || this.count < 2 * this.VA.length)) {
              for (var b = this.jF ? this.Uc.Fa : this.Uc.next, c = {}, d = 0, e = this.VA.length; d < e; d++)
                  c[this.VA[d]] = !0;
              for (a = Math.ceil(2 * a / 3); b && this.count > a && (d = this.jF ? b.Fa : b.next,
              b.key && !c[b.key] && this.mB(b) && this.rJ(b.value),
              b = d,
              b !== this.Uc && b !== this.CB); )
                  ;
          }
      },
      mB: function(a) {
          if (this.PB && !1 == this.PB(a.value))
              return !1;
          a.remove();
          delete this.e[a.key];
          this.count -= 1;
          return !0
      },
      g_: function(a) {
          this.Uc !== a && (this.PB && console.log("Warnning!!!"),
          this.mB(a));
          return a.value
      },
      clear: function() {
          this.e = {};
          this.Uc = new g.dg.Kq("",null);
          this.Uc.Fa = this.Uc.next = this.Uc;
          this.count = 0
      }
  });
  g.dg.Kq = function(a, b) {
      this.key = a;
      this.value = b
  }
  ;
  g.dg.Kq.prototype.Fa = null;
  g.dg.Kq.prototype.next = null;
  g.dg.Kq.prototype.remove = function() {
      this.Fa.next = this.next;
      this.next.Fa = this.Fa;
      this.next = this.Fa = null
  }
  ;
  function Oc(a, b, c) {
      this.url = a;
      this.Gc = b;
      this.oQ = c;
      this.Sm = this.TJ = !1
  }
  function Pc(a, b, c) {
      var d = Qc;
      return function() {
          return d.call(this, a, b, c)
      }
  }
  function Qc(a, b, c) {
      a.PBa = +new Date;
      a.loaded = b;
      clearTimeout(a.Lwa);
      var d = a.Ora;
      d.qn.remove(a.url) && d.rfa();
      d = a.Wqa ? a.ha : a.wa;
      a.ha = null;
      (c || b || a.oQ) && a.Gc(b ? d : null, a);
      a.E4 ? (a.E4.hi(),
      a.E4 = null) : d && (d.onload = null,
      d.onerror = null,
      d.onabort = null,
      a.wa = null)
  }
  g.KE = g.aa.extend({
      Tza: "assets/image/blank.gif",
      r: function(a, b, c) {
          this.timeout = b || 15E3;
          this.eq = new g.dg(1024);
          this.qn = new g.dg(1024);
          this.G1 = a;
          this.ZP = c
      },
      TL: function(a) {
          a && this.qn.count >= this.G1 && (a = this.qn.Uc.Fa.value,
          a.Sm && (this.qn.remove(a.url),
          this.bW(a)));
          for (; this.eq.count && !(this.qn.count >= this.G1); )
              this.Bca(this.eq.shift())
      },
      rfa: function() {
          if (!this.MW) {
              this.MW = !0;
              var a = this;
              setTimeout(function() {
                  a.MW = !1;
                  a.TL()
              }, 0)
          }
      },
      Bca: function(a) {
          var b = document.createElement("img");
          a.toa && (b.crossOrigin = "anonymous");
          b.src = a.url;
          a.wa = b;
          a.Ora = this;
          a.startTime = +new Date;
          a.TJ = !0;
          b.complete ? Qc(a, !0) : (this.qn.set(a.url, a),
          b.onload = Pc(a, !0),
          b.onerror = Pc(a, !1, !0),
          b.onabort = Pc(a, !1),
          a.Lwa = setTimeout(Pc(a, !1, !0), this.timeout))
      },
      bW: function(a) {
          a.TJ && (Qc(a, !1),
          a.Sm = !0,
          a.JAa = !0)
      },
      GDa: function(a, b, c) {
          return this.Hy(a.url, b, c, !0, a.ra.z + "_" + a.ra.x + "_" + a.ra.y)
      },
      Hy: function(a, b, c, d, e) {
          var f = this.qn.get(a);
          if (f && f.Sm)
              f.Sm = !1,
              f.Gc = b,
              f.oQ = c;
          else {
              f = new Oc(a,b,c);
              f.Wqa = d;
              f.key = e;
              if (this.eq.get(g.a.ub(f)))
                  return;
              this.eq.set(g.a.ub(f), f);
              this.TL(!0)
          }
          return f
      },
      Era: function(a, b, c) {
          var d = this.qn.get(a);
          if (d && d.Sm)
              d.Sm = !1,
              d.Gc = b,
              d.oQ = c;
          else {
              d = new Oc(a,b,c);
              d.toa = !0;
              if (this.eq.get(g.a.ub(d)))
                  return;
              this.eq.set(g.a.ub(d), d);
              this.TL(!0)
          }
          return d
      },
      k1: function(a) {
          a.Sm || (a.Sm = !0,
          this.eq.remove(g.a.ub(a)))
      },
      clear: function(a) {
          this.eq.forEach(function(a) {
              a.Sm = !0
          });
          this.eq.clear();
          if (a)
              for (; 0 < this.qn.length; )
                  a = this.qn.pop(),
                  this.bW(a);
          else
              this.qn.forEach(function(a) {
                  a.Sm = !0
              })
      }
  });
  function Rc(a, b, c) {
      this.z = a;
      this.x = b;
      this.y = c
  }
  Rc.prototype.jb = function() {
      return new Rc(this.z,this.x,this.y)
  }
  ;
  Rc.prototype.toString = function() {
      return this.z + "/" + this.x + "/" + this.y
  }
  ;
  g.ob = function(a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
      this.ra = a;
      this.key = a.toString();
      this.we = b
  }
  ;
  g.Gq = Rc;
  g.o.ob = g.o.Tb.extend({
      r: function(a, b, c, d, e) {
          arguments.callee.ka.apply(this, arguments);
          this.W("tileSize", a);
          this.W("tiles", a);
          this.Pe(["zooms", "type", "detectRetina", "errorUrl"], a);
          a.UF && (this.W("lang", b, !0),
          this.W("mapStyle", b, !0),
          this.W("style", b, !0),
          this.W("features", b, !0));
          var f = "overlayer" === a.get("type") || !1 === a.get("blend");
          this.rk = !f && !g.l.Z;
          if (g.l.ue || g.l.uGa)
              this.rk = !1;
          var h = b.get("size")
            , h = h.width * h.height / 65536;
          this.ia = g.l.Z && g.l.ia && this.get("detectRetina");
          g.l.Mc && g.l.Z && 9 < h && (this.rk = !1);
          this.Li = !f && !a.ak;
          this.Mi = !f && !a.ak;
          this.nK = c;
          this.W("reload", a);
          a.Sqa ? this.W("createTile", a) : this.W("tileFun", a);
          this.Ve = d;
          this.sR = e
      },
      langChanged: function() {
          this.set("reload");
          this.U.ys()
      },
      styleChanged: function() {
          this.e.od || (this.set("reload"),
          this.U.ys())
      },
      featuresChanged: function() {
          this.set("reload");
          this.U.ys()
      },
      reloadChanged: function() {
          this.set("display", 0)
      },
      tileFunChanged: function() {
          var a = this.nK || this.get("tileFun");
          this.ao = function(b, c, d) {
              var e = a(b.ra.x, b.ra.y, b.ra.z);
              if (!b.Zr || b.Zr.Sm)
                  b.loaded = !1,
                  b.Zr = ("3D" === this.e.D.view.type ? g.Xl.Era : g.Xl.Hy).call(g.Xl, e, function(a) {
                      b.Zr = null;
                      a ? c(a) : d()
                  }, !1)
          }
      },
      createTileChanged: function() {
          this.U.C = !0;
          var a = this.U.getCreateTile();
          this.U.C = !1;
          this.ao = function(b, c, d) {
              a.call(this.h.U, b.ra.x, b.ra.y, b.ra.z, c, d, b)
          }
          ;
          this.set("reload")
      },
      te: function() {
          var a = this.U.get("zooms", null, !0);
          this.U.Rqa && (a = [Math.min(a[0], 18), Math.min(a[1], 18)]);
          return {
              zd: this.U.get("tileSize"),
              visible: this.U.get("visible"),
              I: this.jI(),
              lb: a,
              lH: this.rk,
              Li: this.Li,
              Mi: this.Mi,
              opacity: this.U.get("opacity"),
              ao: this.U.get("createTile"),
              qo: this.nK || this.U.get("tileFun"),
              Mc: this.U.Xp ? !1 : this.U.get("detectRetina") && g.l.ia && g.l.Z,
              hd: this.mo()
          }
      },
      Gl: function(a) {
          if (g.N.Vd.Gi)
              return new g.N.Vd.Gi(this,a)
      }
  });
  g.Xl = new g.KE(6,null);
  g.o.$c = g.o.Tb.extend({
      r: function(a, b) {
          this.Za = Math.min(2, window.devicePixelRatio || 1);
          this.Mc = g.l.ia && !a.kj;
          this.map = b;
          this.vq = 0;
          this.Vl = !1;
          this.Yf = this.mf = 0;
          this.Ng = [];
          arguments.callee.ka.apply(this, arguments);
          this.ev = [];
          this.Ll = new g.o.Q9;
          a && (this.W("style", a),
          this.W("cursor", a, !0),
          this.iwa = a.get("stable") || !1,
          this.W("dataSources", a),
          this.W("bubble", a));
          this.W("display", b);
          this.Xaa()
      },
      te: function() {
          return {
              visible: this.get("visible"),
              lb: this.get("zooms"),
              opacity: this.get("opacity"),
              zIndex: this.get("zIndex"),
              Ax: this.U.get("alwaysRender") || !1,
              hd: this.mo()
          }
      },
      dataSourcesChanged: function() {
          var a = this.get("dataSources");
          a && a.length ? "string" === typeof a ? (new g.fb.vb(a)).g("complete", function(a) {
              this.c6(a.data);
              this.Cr = a.data;
              this.Vl = !0;
              this.set("display");
              this.Ja = !0;
              this.U.q("complete")
          }, this) : a.length && (this.c6(a),
          this.Cr = a,
          this.Vl = !0,
          this.set("display"),
          this.Ja = !0,
          this.U.q("complete")) : this.clear()
      },
      getDatas: function() {
          return this.Cr
      },
      Hxa: function() {
          if (this.U.kj) {
              var a = this.hm;
              this.mf = a.mf;
              this.Yf = a.Yf
          }
      },
      na: function(a, b) {
          var c = {
              type: a,
              data: "mouseout" === a ? this.ofa || null : b.Ot.eb,
              target: this.U
          };
          this.ofa = "mouseout" === a ? null : b.Ot.eb;
          this.U.q(a, c)
      },
      mc: function(a) {
          this.na(a.type, a)
      },
      Xaa: function() {
          this.g("click", this.mc);
          this.g("dblclick", this.mc);
          this.g("mousedown", this.mc);
          this.g("mouseup", this.mc);
          this.g("mouseover", this.mc);
          this.g("mouseout", this.mc);
          this.g("touchstart", this.mc);
          this.g("touchend", this.mc)
      },
      GAa: function() {
          this.G("click", this.mc);
          this.G("dblclick", this.mc);
          this.G("mousedown", this.mc);
          this.G("mouseup", this.mc);
          this.G("mouseover", this.mc);
          this.G("mouseout", this.mc);
          this.G("touchstart", this.mc);
          this.G("touchend", this.mc)
      },
      styleChanged: function() {
          this.hm = this.get("style");
          this.Hxa();
          this.set("display", 0)
      },
      c6: function(a) {
          if (a) {
              this.clear();
              for (var b = 0; b < a.length; b += 1) {
                  var c = a[b].lnglat;
                  a[b].lnglat = g.a.Ha(c);
                  c = this.map.Ab(c);
                  c = new g.Rh({
                      name: "point-" + g.a.ub(this),
                      da: new g.Aa.vg([c.x, c.y],!0)
                  });
                  c.br = this;
                  c.eb = a[b];
                  this.aH(c)
              }
          }
      },
      ppa: function(a) {
          if ("geojson" === a)
              return new g.W9({
                  map: this.map
              });
          if ("topjson" === a)
              return new g.oza({
                  map: this.map
              });
          if ("subway" === a)
              return new g.jza({
                  map: this.map
              })
      },
      Ota: function(a) {
          if (a) {
              var b = []
                , b = []
                , c = {};
              if (a.rules) {
                  for (var b = a.rules, d = 0, e = b.length; d < e; d += 1) {
                      for (var f = [], h = b[d].symbolizers, k = 0, l = h.length; k < l; k += 1)
                          h[k].fill && (f[k] = new g.style.wg.dV(h[k].fill)),
                          h[k].stroke && (f[k] = new g.style.wg.FV(h[k].stroke));
                      h = f;
                      b[d].lK = h;
                      b[d] = new g.style.L$(b[d])
                  }
                  c.rules = b
              }
              if (a.symbolizers) {
                  b = a.symbolizers;
                  a = 0;
                  for (d = b.length; a < d; a += 1)
                      b[a].fill && (b[a] = new g.style.wg.dV(b[a].fill)),
                      b[a].stroke && (b[a] = new g.style.wg.FV(b[a].stroke));
                  c.lK = b
              }
              a = new g.pL(c)
          } else
              a = new g.pL({});
          this.set("style", a);
          return a
      },
      DAa: function(a, b) {
          var c = new g.fb.vb(a);
          c.g("complete", function(c) {
              c = this.ha[a] = this.ppa(b).VS(c);
              this.xx(c);
              this.na("complete")
          }, this);
          c.g("error", this.ec, this)
      },
      qua: function(a) {
          "px" === a.target.get("unit") ? (this.mf = Math.max(a.al, this.mf),
          this.Yf = Math.max(a.al, this.Yf)) : a.al > this.is && (this.is = a.al,
          this.Jy = this.is / this.map.D.aj.Jp(20))
      },
      aH: function(a) {
          this.Ll.add(a);
          if (!this.oC && !this.U.kj) {
              if (0 === a.name.indexOf("circle") || 0 === a.name.indexOf("ellipse")) {
                  a.g("rad", this.qua, this);
                  var b = a.get("radius");
                  b.length && (b = Math.max.apply(null, b));
                  "px" === a.get("unit") ? (this.mf = Math.max(b, this.mf),
                  this.Yf = Math.max(b, this.Yf)) : this.is ? b > this.is && (this.is = b,
                  this.Jy = this.is / this.map.D.aj.Jp(20)) : (this.is = b,
                  this.Jy = this.is / this.map.D.aj.Jp(20))
              }
              b = a.get("strokeWeight") || 0;
              if (!this.Ky || b > this.Ky)
                  this.Ky = b
          }
          this.iwa || a.W("feature", this, !0)
      },
      xx: function(a) {
          this.Vl = !0;
          for (var b = 0, c = a.length; b < c; b += 1)
              this.aH(a[b])
      },
      clear: function() {
          this.Vl = !0;
          this.Cr = [];
          this.Ll.clear();
          this.set("display", 0)
      },
      $m: function(a) {
          var b, c;
          b = this.Ll.$m([a[0] + g.a.Ca, a[1], a[2] + g.a.Ca, a[3]]);
          c = this.Ll.$m([a[0] - g.a.Ca, a[1], a[2] - g.a.Ca, a[3]]);
          a = this.Ll.$m(a);
          return g.extend(a, g.extend(b, c))
      },
      CCa: function(a) {
          var b, c = this.get("style"), d = a.cl;
          c instanceof g.pL || (c = this.Ota(c));
          if (d && 0 < d.length)
              b = c.L1(d, a);
          else {
              if (c.j7.length || c.cl.length)
                  b = c.Kma(a);
              b || (b = a.Toa())
          }
          return b
      },
      $Q: function(a) {
          function b(a, b) {
              return a.Ml - b.Ml
          }
          var c = [], d, e, f, h, k, l = {};
          for (d in a)
              if (a.hasOwnProperty(d)) {
                  f = a[d];
                  h = f.get("zIndex");
                  for (e in l)
                      if (l.hasOwnProperty(e) && (k = c[l[e]][2],
                      k === h))
                          break;
                  "undefined" === typeof l[h] && (c.push([[], [], h]),
                  l[h] = c.length - 1);
                  h = c[l[h]];
                  h[0].push(f)
              }
          c.sort(this.ewa);
          a = 0;
          for (d = c.length; a < d; a += 1)
              c[a][0].sort(b);
          return c
      },
      featureChanged: function(a) {
          this.Vl = !0;
          var b = a.target
            , c = b.cc();
          0 !== this.Ll.Yoa([g.a.ub(b)]).length && (this.Ll.remove(b, a.gv),
          c && !a.cna && this.Ll.add(b))
      },
      N6: function(a) {
          this.Vl = !0;
          for (var b, c = 0, d = a.length; c < d; c += 1)
              b = a[c],
              b.da.gv = null,
              b.Ir(!0),
              b.hl("feature")
      },
      EFa: function(a, b) {
          return a[1].zIndex === b[1].zIndex ? g.a.ub(a[1]) - g.a.ub(b[1]) : a[1].zIndex - b[1].zIndex
      },
      ewa: function(a, b) {
          return a[2] - b[2]
      },
      qFa: function(a) {
          return a.ICa() === g.o.tza.dza
      },
      Gl: function(a) {
          return this.oC ? new g.N.ye.ol(this,a) : "c" === this.map.get("overlayRender") && g.N.canvas.ol ? new g.N.canvas.ol(this,a) : g.N.Vd.ol && "d" === this.map.get("overlayRender") ? new g.N.Vd.ol(this,a) : null
      }
  });
  g.o.$c.zb({
      Hl: function(a) {
          return this.oC ? new g.Ba.ye.ol(this,a) : this.U.kj ? new g.Ba.w$(this,a) : new g.Ba.ol(this,a)
      }
  });
  g.o.Q9 = g.aa.extend({
      r: function() {
          this.clear()
      },
      clear: function() {
          this.Mp = [];
          this.RS = new g.qk
      },
      add: function(a) {
          var b = g.a.ub(a)
            , c = a.cc();
          this.Mp[b] || (this.count += 1,
          this.Mp[b] = a,
          c && !g.I.cb(c.pd(), [Infinity, Infinity, -Infinity, -Infinity]) && this.RS.Xr(c.pd(), a))
      },
      xCa: function() {
          return this.Mp
      },
      $m: function(a) {
          return this.RS.sva(a)
      },
      Yoa: function(a) {
          var b = a.length, c = [], d;
          for (d = 0; d < b; d += 1)
              this.Mp[a[d]] && c.push(this.Mp[a[d]]);
          return c
      },
      remove: function(a, b) {
          var c = g.a.ub(a).toString()
            , d = a.cc();
          this.Mp[c] && (this.Mp[c] = null,
          d && (c = "undefined" !== typeof b ? b : d.pd(),
          this.RS.remove(c, a)))
      }
  });
  g.qk = g.aa.extend({
      r: function(a) {
          this.k5 = "undefined" !== typeof a ? a : 6;
          this.dJ = Math.floor(this.k5 / 2);
          this.YJ = {
              I: [Infinity, Infinity, -Infinity, -Infinity],
              Gb: []
          };
          this.count = 0
      },
      Pla: function(a, b) {
          var c = -1, d = [], e;
          d.push(b);
          var f = b.Gb;
          do {
              -1 !== c && (d.push(f[c]),
              f = f[c].Gb,
              c = -1);
              for (var h = f.length - 1; 0 <= h; h -= 1) {
                  var k = f[h];
                  if ("undefined" !== typeof k.Le) {
                      c = -1;
                      break
                  }
                  var l = g.qk.hz(k.I[2] - k.I[0], k.I[3] - k.I[1], k.Gb.length + 1)
                    , k = g.qk.hz((k.I[2] > a.I[2] ? k.I[2] : a.I[2]) - (k.I[0] < a.I[0] ? k.I[0] : a.I[0]), (k.I[3] > a.I[3] ? k.I[3] : a.I[3]) - (k.I[1] < a.I[1] ? k.I[1] : a.I[1]), k.Gb.length + 2);
                  if (0 > c || Math.abs(k - l) < e)
                      e = Math.abs(k - l),
                      c = h
              }
          } while (-1 !== c);return d
      },
      Xr: function(a, b, c) {
          a = {
              I: a,
              Le: b
          };
          "undefined" !== typeof c && (a.type = c);
          this.i4(a, this.YJ);
          this.count += 1
      },
      i4: function(a, b) {
          var c;
          if (0 === b.Gb.length)
              b.I = g.I.jb(a.I),
              b.Gb.push(a);
          else {
              var d = this.Pla(a, b)
                , e = a;
              do {
                  if (c && "undefined" !== typeof c.Gb && 0 === c.Gb.length) {
                      var f = c;
                      c = d.pop();
                      for (var h = 0, k = c.Gb.length; h < k; h += 1)
                          if (c.Gb[h] === f || 0 === c.Gb[h].Gb.length) {
                              c.Gb.splice(h, 1);
                              break
                          }
                  } else
                      c = d.pop();
                  f = e instanceof Array;
                  if ("undefined" !== typeof e.Le || "undefined" !== typeof e.Gb || f) {
                      if (f) {
                          f = 0;
                          for (h = e.length; f < h; f += 1)
                              g.I.extend(c.I, e[f].I);
                          c.Gb = c.Gb.concat(e)
                      } else
                          g.I.extend(c.I, e.I),
                          c.Gb.push(e);
                      if (c.Gb.length <= this.k5)
                          if (0 < d.length)
                              e = {
                                  I: g.I.jb(c.I)
                              };
                          else
                              break;
                      else
                          e = f = this.tra(c.Gb),
                          1 > d.length && (c.Gb.push(f[0]),
                          d.push(c),
                          e = f[1])
                  } else
                      g.I.extend(c.I, e.I),
                      e = {
                          I: g.I.jb(c.I)
                      }
              } while (0 < d.length)
          }
      },
      tra: function(a) {
          for (var b = this.Sta(a); 0 < a.length; )
              this.Tta(a, b[0], b[1]);
          return b
      },
      Sta: function(a) {
          for (var b = a.length - 1, c = 0, d = a.length - 1, e = 0, f = a.length - 2; 0 <= f; f -= 1) {
              var h = a[f];
              h.I[0] > a[c].I[0] ? c = f : h.I[2] < a[b].I[1] && (b = f);
              h.I[1] > a[e].I[1] ? e = f : h.I[3] < a[d].I[3] && (d = f)
          }
          Math.abs(a[b].I[2] - a[c].I[0]) > Math.abs(a[d].I[3] - a[e].I[1]) ? b > c ? (b = a.splice(b, 1)[0],
          c = a.splice(c, 1)[0]) : (c = a.splice(c, 1)[0],
          b = a.splice(b, 1)[0]) : d > e ? (b = a.splice(d, 1)[0],
          c = a.splice(e, 1)[0]) : (c = a.splice(e, 1)[0],
          b = a.splice(d, 1)[0]);
          return [{
              I: g.I.jb(b.I),
              Gb: [b]
          }, {
              I: g.I.jb(c.I),
              Gb: [c]
          }]
      },
      Tta: function(a, b, c) {
          for (var d = g.qk.hz(b.I[2] - b.I[0], b.I[3] - b.I[1], b.Gb.length + 1), e = g.qk.hz(c.I[2] - c.I[0], c.I[3] - c.I[1], c.Gb.length + 1), f, h, k, l = a.length - 1; 0 <= l; l -= 1) {
              var m = a[l]
                , n = [b.I[0] < m.I[0] ? b.I[0] : m.I[0], b.I[2] > m.I[2] ? b.I[2] : m.I[2], b.I[1] < m.I[1] ? b.I[1] : m.I[1], b.I[3] > m.I[3] ? b.I[3] : m.I[3]]
                , n = Math.abs(g.qk.hz(n[1] - n[0], n[3] - n[2], b.Gb.length + 2) - d)
                , m = [c.I[0] < m.I[0] ? c.I[0] : m.I[0], c.I[2] > m.I[2] ? c.I[2] : m.I[2], c.I[1] < m.I[1] ? c.I[1] : m.I[1], c.I[3] > m.I[3] ? c.I[3] : m.I[3]]
                , m = Math.abs(g.qk.hz(m[1] - m[0], m[3] - m[2], c.Gb.length + 2) - e)
                , p = Math.abs(m - n);
              if (!h || !f || p < f)
                  h = l,
                  f = p,
                  k = m < n ? c : b
          }
          d = a.splice(h, 1)[0];
          b.Gb.length + a.length + 1 <= this.dJ ? (b.Gb.push(d),
          g.I.extend(b.I, d.I)) : c.Gb.length + a.length + 1 <= this.dJ ? (c.Gb.push(d),
          g.I.extend(c.I, d.I)) : (k.Gb.push(d),
          g.I.extend(k.I, d.I))
      },
      remove: function(a, b) {
          var c = [];
          c[0] = {
              I: a
          };
          (c[1] = b) || (c[1] = !1);
          c[2] = this.YJ;
          this.count -= 1;
          if (!1 === c[1]) {
              var d = 0
                , e = [];
              do
                  d = e.length,
                  e = e.concat(this.R6.apply(this, c));
              while (d !== e.length);return e
          }
          return this.R6.apply(this, c)
      },
      R6: function(a, b, c) {
          var d = []
            , e = []
            , f = [];
          if (!a || !g.I.Hg(a.I, c.I))
              return f;
          a = g.I.jb(a.I);
          var h;
          e.push(c.Gb.length);
          d.push(c);
          do {
              c = d.pop();
              var k = e.pop() - 1;
              if ("undefined" !== typeof b)
                  for (; 0 <= k; ) {
                      var l = c.Gb[k];
                      if (g.I.Hg(a, l.I))
                          if (b && "undefined" !== typeof l.Le && l.Le === b || !b && ("undefined" !== typeof l.Le || g.I.H1(a, l.I))) {
                              "undefined" !== typeof l.Gb ? (f = this.bz(l, !0, [], l),
                              c.Gb.splice(k, 1)) : f = c.Gb.splice(k, 1);
                              g.qk.aT(c);
                              b = void 0;
                              c.Gb.length < this.dJ && (h = this.bz(c, !0, [], c));
                              break
                          } else
                              "undefined" !== typeof l.Gb && (e.push(k),
                              d.push(c),
                              c = l,
                              k = l.Gb.length);
                      k -= 1
                  }
              else if ("undefined" !== typeof h) {
                  c.Gb.splice(k + 1, 1);
                  0 < c.Gb.length && g.qk.aT(c);
                  k = 0;
                  for (l = h.length; k < l; k += 1)
                      this.i4(h[k], c);
                  h.length = 0;
                  0 === d.length && 1 >= c.Gb.length ? (h = this.bz(c, !0, h, c),
                  c.Gb.length = 0,
                  d.push(c),
                  e.push(1)) : 0 < d.length && c.Gb.length < this.dJ ? (h = this.bz(c, !0, h, c),
                  c.Gb.length = 0) : h = void 0
              } else
                  g.qk.aT(c)
          } while (0 < d.length);return f
      },
      search: function(a, b) {
          return this.bz({
              I: a
          }, !1, [], this.YJ, b)
      },
      sva: function(a, b) {
          return this.bz({
              I: a
          }, !1, [], this.YJ, b, !0)
      },
      bz: function(a, b, c, d, e, f) {
          var h = {}
            , k = [];
          if (!g.I.Hg(a.I, d.I))
              return f ? h : c;
          k.push(d.Gb);
          do {
              d = k.pop();
              for (var l = d.length - 1; 0 <= l; l -= 1) {
                  var m = d[l];
                  if (g.I.Hg(a.I, m.I))
                      if ("undefined" !== typeof m.Gb)
                          k.push(m.Gb);
                      else if ("undefined" !== typeof m.Le)
                          if (b)
                              c.push(m);
                          else if ("undefined" === typeof e || m.type === e)
                              m = m.Le,
                              "undefined" !== typeof f ? h[g.a.ub(m)] = m : c.push(m)
              }
          } while (0 < k.length);return "undefined" !== typeof f ? h : c
      }
  });
  g.qk.aT = function(a) {
      var b = a.Gb.length
        , c = a.I;
      if (0 === b)
          g.I.empty(c);
      else {
          var d = a.Gb[0].I;
          c[0] = d[0];
          c[2] = d[2];
          c[1] = d[1];
          c[3] = d[3];
          for (d = 1; d < b; d += 1)
              g.I.extend(c, a.Gb[d].I)
      }
  }
  ;
  g.qk.hz = function(a, b, c) {
      var d = (a + b) / 2;
      a *= b;
      return a * c / (a / (d * d))
  }
  ;
  g.w = g.w || {};
  g.w.sh = g.aa.extend({
      ja: [g.sa, g.Oe],
      yta: ["position", "altitude", "visible", "clickable", "bubble"],
      r: function(a, b) {
          this.map = b;
          this.Pe(this.yta, a);
          this.W("zIndex", a);
          this.W("draggable", a);
          g.l.Cf && this.dba();
          g.l.Z || this.LL();
          this.Yb = a;
          this.Yb.w = this
      },
      draggableChanged: function() {
          this.get("draggable") ? this.KL() : this.BN()
      },
      na: function(a, b) {
          var c;
          c = b ? {
              type: a,
              pixel: b.tb,
              target: this.Yb,
              lnglat: b.Uf
          } : {
              type: a
          };
          this.Yb && this.Yb.q(a, c)
      },
      mc: function(a) {
          ("click" !== a.type && "rightclick" !== a.type && "dblclick" !== a.type && "longclick" !== a.type || this.get("clickable")) && this.na(a.type, a)
      },
      JL: function() {
          this.g("click", this.mc);
          this.g("rightclick", this.mc);
          this.g("longclick", this.mc);
          this.g("longpress", this.mc);
          this.g("dblclick", this.mc)
      },
      n0: function() {
          this.G("click", this.mc);
          this.G("rightclick", this.mc);
          this.G("longclick", this.mc);
          this.G("longpress", this.mc);
          this.G("dblclick", this.mc)
      },
      LL: function() {
          this.get("clickable") && this.JL();
          this.g("mousemove", this.mc);
          this.g("mouseout", this.mc);
          this.g("mouseover", this.mc);
          this.g("mousedown", this.mc);
          this.g("mouseup", this.mc)
      },
      HAa: function() {
          this.n0();
          this.G("mousemove", this.mc);
          this.G("mouseout", this.mc);
          this.G("mouseover", this.mc);
          this.G("mousedown", this.mc);
          this.G("mouseup", this.mc)
      },
      clickableChanged: function() {
          this.get("clickable") ? this.JL() : this.n0()
      },
      dba: function() {
          this.get("clickable") && this.JL();
          this.g("touchstart", this.mc, this);
          this.g("touchmove", this.mc, this);
          this.g("touchend", this.mc, this)
      },
      KL: function() {
          this.g("dragstart", this.Dt);
          this.g("dragging", this.Bt);
          this.g("dragend", this.Ct)
      },
      Dt: function(a) {
          this.map.$R(a);
          this.Tf = a.tb;
          this.I4 = a.Na;
          this.H4 = a.Uf;
          this.na("dragstart", a)
      },
      Bt: function(a) {
          var b = this.map.D.view.type;
          if ("2D" == b) {
              var c = a.tb.$a(this.Tf)
                , b = c.x
                , c = c.y;
              this.Tf = a.tb;
              var d = this.map.get("rotation") * Math.PI / 180
                , e = b * Math.cos(d) + Math.sin(d) * c
                , b = -Math.sin(d) * b + Math.cos(d) * c;
              this.Bo(new g.H(e,b));
              this.na("dragging", a)
          } else
              "3D" == b && a.Na && (c = a.tb.$a(this.Tf),
              b = c.x,
              c = c.y,
              e = a.Na.$a(this.I4),
              a.Uf.$a(this.H4),
              this.Tf = a.tb,
              "function" === typeof this.Ly && this.Ly(b, c, e),
              this.I4 = a.Na,
              this.H4 = a.Uf,
              this.na("dragging", a))
      },
      Ct: function(a) {
          this.map.Qv();
          "3D" == this.map.D.view.type && this.Yb.reset && this.Yb.reset();
          this.na("dragend", a)
      },
      BN: function() {
          this.G("dragstart", this.Dt);
          this.G("dragging", this.Bt);
          this.G("dragend", this.Ct)
      },
      CM: function(a) {
          var b, c, d = [];
          if (a)
              for (b = 0,
              c = a.length; b < c; b += 1)
                  d.push(this.DM(a[b]));
          return d
      },
      DM: function(a) {
          a = this.map.Ab(a);
          return [a.x, a.y]
      },
      Wf: function(a) {
          var b = this.L.ib || this.map.get("centerCoords")
            , c = Math.pow(2, 20 - this.map.get("zoom"));
          return [(a[0] - b.x) / c, (a[1] - b.y) / c]
      },
      GA: function(a, b) {
          var c = this.map.D
            , d = []
            , e = !1;
          a[0]instanceof Array && "number" !== typeof a[0][0] && (e = !0);
          if (e)
              for (var e = [], f = 0, h = a.length; f < h; f++) {
                  for (var k = 0, l = a[f].length; k < l; k++) {
                      var m = c.Ab(a[f][k]);
                      m.x += b[0];
                      m.y += b[1];
                      e.push(c.Qd(m))
                  }
                  d.push(e)
              }
          else
              for (e = 0,
              f = a.length; e < f; e++)
                  h = c.Ab(a[e]),
                  h.x += b[0],
                  h.y += b[1],
                  d.push(c.Qd(h));
          return d
      }
  });
  g.w.rb = g.w.sh.extend({
      uD: "content contentDom icon opacity angle autoRotation offset textAlign verticalAlign shadow title label isTop shape topWhenClick topWhenMouseOver noSelect anchor".split(" "),
      Eka: {
          AMAP_ANIMATION_NONE: !1,
          AMAP_ANIMATION_DROP: g.vj.Easing.Bounce,
          AMAP_ANIMATION_BOUNCE: g.vj.Easing.Cubic
      },
      r: function(a, b) {
          arguments.callee.ka.apply(this, arguments);
          this.Pe(this.uD, a);
          this.W("move", a);
          this.tla();
          this.au();
          this.set("AnimationOffset", new g.H(0,0), !0);
          this.W("raiseOnDrag", a);
          this.W("animation", a)
      },
      UM: function(a, b, c) {
          var d = this.get("animation");
          if (d && "AMAP_ANIMATION_NONE" !== d) {
              var e = this;
              this.ln = new g.vj;
              this.ln.transition = function(c, h, k) {
                  if ("AMAP_ANIMATION_NONE" === d)
                      return 0;
                  if (a && 600 <= k)
                      return e.ln.stop(),
                      0;
                  c = 0 === Math.floor(k / 600) % 2 ? "Out" : "In";
                  "out" === b ? c = "Out" : "in" === b && (c = "In");
                  return e.Eka[d][c](k % 600 / 600)
              }
              ;
              c = c || 40;
              this.ln.$p = function(a) {
                  e.set("AnimationOffset", e.DN.add(new g.H(0,-1 * c * a)))
              }
              ;
              this.DN = new g.H(0,0);
              this.ln.sn()
          }
      },
      AnimationOffsetChanged: function() {
          this.positionChanged()
      },
      p_: function() {
          this.ln && (this.ln.stop(),
          this.set("AnimationOffset", this.DN));
          this.set("AnimationOffset", new g.H(0,-40));
          if (this.Eq)
              this.Eq.set("position", this.get("position"));
          else {
              var a = new z.w.rb({
                  zIndex: this.get("zIndex") - 1,
                  icon: new z.w.Th({
                      image: g.A.yb + "/theme/v1.3/dragCross.png",
                      size: new g.xd(14,11),
                      innerOverlay: !0
                  }),
                  offset: new g.H(-4,-5),
                  position: this.get("position"),
                  innerOverlay: !0
              });
              a.za = !0;
              this.Eq = a
          }
          this.Eq.C = !0;
          this.Eq.setMap(this.map.D);
          this.Eq.C = !1
      },
      hX: function() {
          this.set("animation", "AMAP_ANIMATION_DROP", !0);
          this.UM(!0, "in");
          this.Eq.C = !0;
          this.Eq.C = !1
      },
      animationChanged: function() {
          this.ln && (this.ln.stop(),
          this.set("AnimationOffset", this.DN),
          this.ln = null);
          var a = this.get("animation");
          a && "AMAP_ANIMATION_NONE" !== a && ("AMAP_ANIMATION_DROP" === a ? this.UM(!0, "in", 100) : this.UM())
      },
      Xg: function() {
          this.Eq && this.Eq.set("position", this.get("position"))
      },
      raiseOnDragChanged: function() {
          this.get("raiseOnDrag") ? (this.g("dragstart", this.p_, this),
          this.g("dragging", this.Xg, this),
          this.g("dragend", this.hX, this)) : (this.G("dragstart", this.p_, this),
          this.G("dragging", this.Xg, this),
          this.G("dragend", this.hX, this))
      },
      Bo: function(a) {
          var b = this.get("position");
          a = this.map.Ab(b).add(a.Gd(Math.pow(2, 20 - this.map.get("zoom"))));
          b instanceof g.T ? this.set("position", this.map.Qd(a)) : this.set("position", a)
      },
      Ly: function(a, b) {
          var c = this.get("position")
            , d = this.get("altitude")
            , c = this.map.ds(c, d)
            , d = this.map.wp(new g.H(c.x + a,c.y + b), null, d);
          this.set("position", d)
      },
      tla: function() {
          var a = this.get("content"), b = this.get("shadow"), c = this.get("offset"), d = this.get("label"), e, f = this;
          e = a ? this.Z0(a, c) : this.WO(this.get("icon"), function() {
              f.L && f.L.ba ? (g.l.mi && g.a.iepngFix(e),
              f.offsetChanged(),
              f.zK()) : f.map && f.map.set("display")
          });
          this.set("contentDom", e, !0);
          b && (a = this.e1(b, c),
          this.set("shadowDom", a, !0));
          d && d.content && this.set("labelDom", this.XO(d.content), !0)
      },
      XO: function(a) {
          var b = document.createElement("div");
          b.className = "amap-marker-label";
          b.innerHTML = a;
          return b
      },
      au: function() {
          var a = this.get("position");
          if (this.map && a && !this.L) {
              var b = this.map
                , a = this.map.Ab(a)
                , a = this.L = new g.Rh({
                  name: "marker-" + g.a.ub(this),
                  map: b,
                  da: new g.Aa.vg([a.x, a.y])
              });
              a.rp = this.Yb.CLASS_NAME;
              a.br = this;
              this.W("coords", a, !0);
              a.Pe("offset textAlign verticalAlign isTop zIndex params noSelect".split(" "), this)
          }
      },
      getParams: function() {
          return {
              zIndex: this.get("zIndex"),
              pp: this.get("angle"),
              Cg: this.get("contentDom"),
              SI: this.get("labelDom"),
              E7: this.get("shadowDom"),
              opacity: this.get("opacity"),
              altitude: this.get("altitude"),
              title: this.get("title"),
              label: this.get("label"),
              AE: this.get("AnimationOffset"),
              verticalAlign: this.get("verticalAlign"),
              textAlign: this.get("textAlign"),
              offset: this.get("offset"),
              B4: this.get("isTop"),
              shape: this.get("shape"),
              visible: this.get("visible") && !this.Yb.get("outOfZooms"),
              anchor: this.get("anchor")
          }
      },
      offsetChanged: function() {
          function a(a) {
              var c = b.get("offset")
                , f = b.get("AnimationOffset")
                , h = b.get("verticalAlign")
                , k = b.get("textAlign")
                , l = Math.round(a.x) + c.x + f.x;
              a = Math.round(a.y) + c.y + f.y;
              var f = b.get("anchor")
                , m = b.L.Hj || g.j.jo(b.L.Cg);
              b.L.Hj = m;
              c = m[0];
              m = m[1];
              f && (f = f.split("-"),
              2 === f.length ? (k = f[1],
              h = f[0]) : 1 === f.length && "center" === f[0] && (k = "center",
              h = "middle"));
              switch (k) {
              case "center":
                  l -= c / 2;
                  break;
              case "right":
                  l -= c
              }
              switch (h) {
              case "middle":
                  a -= m / 2;
                  break;
              case "bottom":
                  a -= m
              }
              b.L.ba.style.left = l + "px";
              b.L.ba.style.top = a + "px"
          }
          if (this.map)
              if (this.L && this.L.ba) {
                  var b = this
                    , c = this.map.D.view.type;
                  "2D" == c ? (c = this.map.Ab(this.get("position")),
                  c = c.$a(this.L.Ka).dd(Math.pow(2, 20 - this.map.get("zoom"))),
                  this.L.ba && (this.L.ba.dB && this.L.ba.parentNode !== this.L.ba.dB ? this.map.set("display") : a(c))) : "3D" == c && (c = this.get("position"),
                  c = this.map.ds(c, this.get("altitude")),
                  this.L.ba && (this.L.ba.dB && this.L.ba.parentNode !== this.L.ba.dB ? this.map.set("display") : a(c)))
              } else
                  this.map.set("display")
      },
      altitudeChanged: function() {
          this.offsetChanged()
      },
      positionChanged: function() {
          if (this.L) {
              var a = this.map.Ab(this.get("position"));
              this.set("coords", [a.x, a.y]);
              this.map && (this.L.F$ = !0,
              this.offsetChanged())
          }
      },
      anchorChanged: function() {
          this.hF()
      },
      textAlignChanged: function() {
          this.hF()
      },
      verticalAlignChanged: function() {
          this.hF()
      },
      hF: function() {
          this.L && (this.L.Hj = null,
          this.L.Se = !0,
          this.map && (this.map.td.Tl = !0,
          this.map.set("display")))
      },
      contentChanged: function() {
          if (this.L) {
              this.L.Hj = null;
              this.map.td.Tl = !0;
              -1 === g.a.indexOf(this.map.td.Ng, this.L) && this.map.td.Ng.push(this.L);
              var a = this.get("contentDom");
              this.L.ba && this.L.ba === a.parentNode && this.L.ba.removeChild(a);
              var a = this.get("content")
                , b = this.get("offset")
                , a = this.Z0(a, b);
              this.set("contentDom", a);
              this.L.ba ? (g.l.mi && g.a.iepngFix(a),
              this.L.ba.appendChild(a),
              this.L.Cg = a,
              this.offsetChanged(),
              this.zK()) : this.map && this.map.set("display")
          }
      },
      iconChanged: function() {
          if (this.L && this.L.ba && !this.get("content")) {
              this.L.Hj = null;
              this.map.td.Tl = !0;
              -1 === g.a.indexOf(this.map.td.Ng, this.L) && this.map.td.Ng.push(this.L);
              this.L.ba && this.get("contentDom") && this.L.ba.removeChild(this.get("contentDom"));
              var a = this.get("icon");
              this.get("offset");
              var b = this
                , c = this.WO(a, function() {
                  b.L && b.L.ba ? (g.l.mi && g.a.iepngFix(c),
                  b.offsetChanged(),
                  b.zK()) : b.map && b.map.set("display")
              });
              this.set("contentDom", c);
              this.L.ba && (this.L.ba.appendChild(c),
              this.L.Cg = c)
          }
      },
      shadowChanged: function() {
          if (this.L && this.L.ba) {
              var a = this.get("shadowDom");
              this.L.ba && a && a.parentNode === this.L.ba && this.L.ba.removeChild(a);
              if (a = this.get("shadow")) {
                  var b = this.get("offset")
                    , a = this.e1(a, b);
                  this.set("shadowDom", a);
                  this.L.ba && this.L.ba.appendChild(a)
              }
          }
      },
      titleChanged: function() {
          this.L && this.L.Cg && "string" === typeof this.get("title") && this.L.Cg && this.get("title") && (this.L.Cg.title = this.get("title"))
      },
      zK: function(a, b) {
          a = a || this.get("label");
          b = b || this.get("labelDom");
          if (a && b) {
              var c = a.direction
                , d = this.L.Hj || g.j.jo(this.L.Cg)
                , e = d[0]
                , d = d[1]
                , f = g.j.jo(b)
                , h = f[0]
                , k = f[1];
              this.L.Xu = f;
              var l = f = 0;
              switch (c) {
              case "top":
                  f = -k;
                  l = (e - h) / 2;
                  break;
              case "right":
                  f = (d - k) / 2;
                  l = e;
                  break;
              case "bottom":
                  f = d;
                  l = (e - h) / 2;
                  break;
              case "left":
                  f = (d - k) / 2;
                  l = -h;
                  break;
              case "center":
                  f = (d - k) / 2,
                  l = (e - h) / 2
              }
              a.offset && (f += a.offset.y,
              l += a.offset.x);
              b.style.top = f + "px";
              b.style.left = l + "px"
          }
      },
      labelChanged: function(a) {
          a = a || this.get("label");
          if (this.L && this.L.ba) {
              this.L.Xu = null;
              var b = this.L.ba
                , c = this.get("labelDom");
              c && c.parentNode === b && b.removeChild(c);
              a && a.content && (c = "",
              a.content && (c = this.XO(a.content),
              b.appendChild(c),
              this.zK(a, c)),
              this.set("labelDom", c))
          } else
              a && a.content ? this.set("labelDom", this.XO(a.content), !0) : this.set("labelDom", null)
      },
      isTopChanged: function() {
          var a = this.map.td.pK
            , b = this.get("isTop")
            , c = this.get("zIndex");
          a ? a === this ? this.L && this.L.ba && (this.L.ba.style.zIndex = b ? this.map.td.vq + 10 : c,
          this.map.td.pK = b ? this : null) : (a.L && a.L.ba && (a.L.ba.style.zIndex = b ? a.get("zIndex") : this.map.td.vq + 10),
          this.L && this.L.ba && (this.L.ba.style.zIndex = b ? this.map.td.vq + 10 : c),
          this.map.td.pK = b ? this : a) : (this.map.td.pK = this,
          this.L && this.L.ba && (this.L.ba.style.zIndex = b ? this.map.td.vq + 10 : c))
      },
      visibleChanged: function() {
          this.L && this.L.ba && (this.get("visible") && !this.Yb.get("outOfZooms") ? this.L.ba.style.display = "block" : this.L.ba.style.display = "none")
      },
      pta: function() {
          this.visibleChanged()
      },
      angleChanged: function() {
          if (!g.l.ue && this.L && this.L.ba) {
              var a = this.L
                , b = a.get("params")
                , c = b.textAlign
                , d = b.verticalAlign
                , e = b.offset
                , b = e.x
                , e = e.y;
              this.hF();
              if ("AMap.Text" == a.rp) {
                  var e = b = 0
                    , f = a.Hj || g.j.jo(a.Cg)
                    , h = f[0]
                    , k = f[1];
                  a.Hj = f;
                  switch (c) {
                  case "center":
                      b = h / 2;
                      break;
                  case "right":
                      b = h
                  }
                  switch (d) {
                  case "middle":
                      e = k / 2;
                      break;
                  case "bottom":
                      e = k
                  }
              } else
                  b = -b,
                  e = -e;
              g.j.rotate(this.L.ba, this.get("angle") || 0, {
                  x: b,
                  y: e
              })
          }
      },
      zIndexChanged: function() {
          var a = this.get("zIndex");
          if (a > this.map.td.vq) {
              this.map.td.vq = a;
              var b = this.map.td.pK;
              b && b.L && b.L.ba && (b.L.ba.style.zIndex = a + 10)
          }
          this.L && this.L.ba && (this.L.ba.style.zIndex = this.get("isTop") ? this.map.td.vq + 10 : this.get("zIndex"))
      },
      opacityChanged: function() {
          var a = this.get("contentDom")
            , b = this.get("shadowDom");
          a && g.j.lq(a, this.get("opacity"));
          b && g.j.lq(b, this.get("opacity"))
      },
      Z0: function(a) {
          var b;
          b = document.createElement("div");
          b.className = "amap-marker-content";
          "string" !== typeof a ? b.appendChild(a) : (b.innerHTML = a,
          b.childNodes[0] && !b.childNodes[0].style && (b.style["white-space"] = "pre"));
          g.j.lq(b, this.get("opacity"));
          return b
      },
      WO: function(a, b) {
          var c, d = 0, e = 0, f, h, k, l, m, n;
          a ? ("string" === typeof a ? (c = a,
          n = !0) : (c = a.get("image"),
          e = a.get("size"),
          f = a.get("imageSize"),
          d = e.width,
          e = e.height,
          f && (l = f.width,
          m = f.height)),
          f = "string" !== typeof a ? a.get("imageOffset") : {
              x: 0,
              y: 0
          }) : (c = g.A.ri + "/mark_bs.png",
          f = {
              x: 0,
              y: 0
          },
          d = 19,
          e = 33,
          l = 19,
          m = 33);
          h = document.createElement("div");
          h.className = "amap-icon";
          h.style.position = "absolute";
          h.style.overflow = n ? "inherit" : "hidden";
          d && (h.style.width = d + "px");
          e && (h.style.height = e + "px");
          k = document.createElement("img");
          l && m && (k.style.width = l + "px",
          k.style.height = m + "px");
          k.style.top = f.y + "px";
          k.style.left = f.x + "px";
          h.appendChild(k);
          g.j.lq(g.l.ue && n ? k : h, this.get("opacity"));
          d && e || (h.CL = !1);
          g.F.g(k, "load", function q() {
              this.L && (this.L.Hj = null);
              this.map && this.map.td && (this.map.td.Tl = !0);
              g.F.G(k, "load", q, this);
              if (this.L && this.L.ba) {
                  var a = this.get("labelDom");
                  a && this.L.ba.appendChild(a)
              }
              h.CL = !0;
              b && b()
          }, this);
          k.src = c;
          return h
      },
      e1: function(a) {
          a = this.WO(a);
          a.style.zIndex = -1;
          return a
      },
      moveChanged: function() {
          var a = this.get("move");
          if (!1 === a)
              return this.pwa();
          void 0 !== a && ("pause" === a.action ? this.Qta() : "[object Array]" === Object.prototype.toString.call(a.Uf) ? a.Uf && ("resume" === a.action && this.bG ? this.moveTo(a.Uf[a.Uf.ip || 0], a.speed, a.sb) : (this.bG && this.q("movestop"),
          a.Uf.ip = 0,
          this.set("position", a.Uf[0]),
          this.ssa(a.Uf, a.speed, a.sb, a.Tla))) : this.moveTo(a.Uf, a.speed, a.sb, !0))
      },
      moveTo: function(a, b, c, d) {
          if (!(0 >= b)) {
              var e = this.get("position");
              a.$a(e);
              var f = Math.round(a.re(e) / 1E3 / b * 36E5);
              if (0 === f)
                  return this.q("moveend");
              this.ti && (this.ti.stop(),
              this.ti = null);
              this.ti = new g.vj(e,a);
              c = c || function(a) {
                  return a
              }
              ;
              this.ti.transition = function(a, b, d) {
                  if (d >= f)
                      return b;
                  var e = (b.Q - a.Q) * c(d / f) + a.Q;
                  a = (b.P - a.P) * c(d / f) + a.P;
                  return new g.T(e,a)
              }
              ;
              this.ti.$p = function(b) {
                  this.set("position", b);
                  d && this.Yb.q("moving", {
                      passedPath: [this.ti.start, this.get("position")]
                  });
                  this.q("moving");
                  b.cb(a) && (this.ti && (this.ti.stop(),
                  this.ti = null),
                  this.Yb.q("moveend"),
                  this.q("moveend"))
              }
              ;
              this.get("autoRotation") && !g.l.ue && (b = "2D" == (this.map.D.view.type || "2D") ? this.tda(e, a) : this.uda(e, a),
              this.set("angle", b));
              this.ti.sn(this)
          }
      },
      pwa: function() {
          this.ti && (this.ti.stop(),
          this.ti = null,
          this.q("movestop"))
      },
      Qta: function() {
          this.ti && (this.ti.stop(),
          this.ti = null,
          this.q("movepause"))
      },
      ssa: function(a, b, c, d) {
          function e() {
              var b = a.slice(0, a.ip || 0);
              b.push(this.get("position"));
              this.Yb.q("moving", {
                  passedPath: b
              })
          }
          function f() {
              a.ip < a.length - 1 ? (a.ip += 1,
              this.moveTo(a[a.ip], b, c)) : (this.na("movealong"),
              d ? (a.ip = 0,
              this.set("position", a[0]),
              this.moveTo(a[a.ip], b, c)) : this.q("movestop"))
          }
          var h = Math.min(a.ip || 0, a.length - 1);
          this.bG || (this.bG = !0,
          this.g("moving", e, this),
          this.g("moveend", f, this),
          this.g("movestop", function l() {
              this.bG = !1;
              this.G("moveend", f, this);
              this.G("moving", e, this);
              this.G("movestop", l, this)
          }, this));
          this.moveTo(a[h], b, c)
      },
      uda: function(a, b) {
          var c = this.map
            , d = c.ds(a)
            , c = c.ds(b)
            , e = 0;
          c.re(d);
          var f = c.y - d.y
            , h = c.x - d.x;
          0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)),
          0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
          return g.a.nc(180 * e / Math.PI, 1)
      },
      tda: function(a, b) {
          var c = this.map
            , d = c.Ab(a)
            , c = c.Ab(b)
            , e = 0;
          c.re(d);
          var f = c.y - d.y
            , h = c.x - d.x;
          0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)),
          0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
          return g.a.nc(180 * e / Math.PI, 1)
      }
  });
  g.w.xn = g.w.sh.extend({
      r: function(a, b) {
          arguments.callee.ka.apply(this, arguments);
          this.W("items", a, !0);
          this.W("content", a, !0);
          this.W("resolution", b);
          this.W("centerCoords", b);
          this.qp = a
      },
      Py: function(a) {
          this.Gg();
          this.Rs();
          this.km();
          this.hl("resolution");
          this.hl("centerCoords");
          this.hl("render");
          this.W("resolution", a);
          this.W("centerCoords", a);
          this.W("render", a);
          this.map.g("movestart", this.Em, this);
          this.map.g("mapmove", this.Em, this);
          this.map.g("zoomstart", this.Em, this);
          this.map.g("click", this.Em, this);
          this.map.g("closeOverlays", this.Em, this);
          this.map.g("rotate", this.Em, this)
      },
      Em: function() {
          this.qp.map && (this.qp.C = !0,
          this.qp.close(),
          this.qp.C = !1)
      },
      mapChanged: function() {},
      positionChanged: function() {
          this.km()
      },
      renderChanged: function() {
          this.km()
      },
      Gg: function() {
          this.K && (this.K.parentNode && this.K.parentNode.removeChild(this.K),
          this.K = null);
          var a = g.j.create("div", null, "amap-menu");
          g.F.g(a, "mousedown", function(a) {
              g.F.stopPropagation(a)
          }, this);
          this.K = a;
          this.map.Sa.w.appendChild(this.K)
      },
      Rs: function() {
          var a = this
            , b = this.K;
          b.innerHTML = "";
          var c = this.get("content");
          if ("object" === typeof c)
              b.appendChild(c);
          else if ("string" === typeof c)
              b.innerHTML = c;
          else if ((c = this.get("items")) && c.length) {
              var d = g.j.create("ul", b, "amap-menu-outer");
              c.sort(function(a, b) {
                  return isNaN(a.sJ) || isNaN(b.sJ) ? 0 : a.sJ - b.sJ
              });
              for (b = 0; b < c.length; b += 1)
                  (function(b) {
                      var c = b.Ps
                        , h = b.sb
                        , k = g.j.create("li", d);
                      k.innerHTML = c;
                      g.F.g(k, "click", function() {
                          h.call(k);
                          a.qp.C = !0;
                          a.qp.close();
                          a.qp.C = !1
                      }, k)
                  }
                  )(c[b])
          } else
              this.K.innerHTML = ""
      },
      km: function() {
          var a = this.map
            , b = this.K;
          a && b && (this.map.get("zoom"),
          b = this.get("position"),
          b = a.ds(b),
          a = b.y,
          b = b.x,
          this.K.style.right = "",
          this.K.style.bottom = "",
          this.K.style.left = b + "px",
          this.K.style.top = a + "px")
      },
      Pg: function() {
          this.K && (this.map.G("click", this.Yza, this),
          this.map.Sa.w.removeChild(this.K),
          this.qp.ei = !1,
          this.K = this.qp.Ge.map = null,
          this.map.G("movestart", this.Em, this),
          this.map.G("zoomstart", this.Em, this),
          this.map.G("click", this.Em, this),
          this.map.G("closeOverlays", this.Em, this),
          this.map.G("rotate", this.Em, this))
      },
      visibleChanged: function() {
          this.K && (this.get("visible") ? this.K.style.display = "block" : this.K.style.display = "none")
      },
      itemsChanged: function() {
          this.K && this.Rs()
      }
  });
  g.w.Ne = g.w.sh.extend({
      r: function(a, b) {
          arguments.callee.ka.apply(this, arguments);
          this.Pe("content contentDom position contentU altitude isCustom autoMove showShadow closeWhenClickMap size offset anchor".split(" "), a);
          this.W("retainWhenClose", a, !0);
          a.W("toBeClose", this);
          this.df = a
      },
      Py: function(a) {
          this.uma || (this.Gg(),
          this.Rs());
          this.hl("resolution");
          this.hl("centerCoords");
          this.hl("render");
          this.W("resolution", a);
          this.W("centerCoords", a);
          this.W("render", a);
          this.map = a;
          a.Sa.w.appendChild(this.$b);
          this.DU();
          this.km();
          this.jW();
          this.uma = !0;
          this.jma();
          this.Yb.q("onAdd", {
              type: "onAdd",
              target: this.Yb
          })
      },
      Gg: function() {
          var a = g.j.create("div");
          a.className = "amap-info";
          var b = g.j.create("div", a, "amap-info-shadowContainer")
            , c = g.j.create("div", a)
            , d = this.get("anchor")
            , e = "amap-info-contentContainer";
          d && (e = d + " amap-info-contentContainer");
          d = g.j.create("div", c, e);
          a.style.position = "absolute";
          c.style.position = "absolute";
          c.style.bottom = "0px";
          c.style.left = "0px";
          b.style.position = "absolute";
          this.$b = a;
          this.Sf = c;
          this.KT = b;
          this.fh = d;
          this.set("contentDom", this.fh, !0)
      },
      Rs: function() {
          var a = this.get("contentU");
          if (a) {
              var b = this.get("isCustom")
                , c = this.fh
                , d = this.KT;
              c.innerHTML = "";
              var e = null;
              if (b) {
                  if ("string" === typeof a)
                      c.innerHTML = a;
                  else if (a instanceof Array)
                      for (e = 0; e < a.length; e += 1)
                          c.appendChild(a[e]);
                  else
                      c.appendChild(a);
                  e = c;
                  d.parentNode && d.parentNode.removeChild(d)
              } else {
                  e = "amap-info-content amap-info-outer";
                  g.l.ue && (e += " amap-info-content-ie8");
                  e = this.vqa = d = g.j.create("div", c, e);
                  "string" === typeof a ? d.innerHTML = a : d.appendChild(a);
                  this.wma = d;
                  a = g.j.create("a", this.vqa, "amap-info-close");
                  a.innerHTML = "\u00d7";
                  this.nP = a;
                  a.href = "javascript: void(0)";
                  g.l.Cf && (g.F.g(a, "touchstart", function(a) {
                      g.F.stop(a)
                  }, this),
                  g.F.g(a, "touchend", function(a) {
                      g.F.stop(a);
                      this.df.C = !0;
                      this.df.close();
                      this.df.C = !1
                  }, this),
                  g.F.g(a, "click", function(a) {
                      g.F.stop(a);
                      this.df.C = !0;
                      this.df.close();
                      this.df.C = !1
                  }, this));
                  g.l.Z || (g.F.g(a, "mousedown", function(a) {
                      g.F.stop(a)
                  }, this),
                  g.F.g(a, "click", function(a) {
                      g.F.stop(a);
                      this.df.C = !0;
                      this.df.close();
                      this.df.C = !1
                  }, this));
                  if (a = this.get("size", !0))
                      0 !== a.width && (d.style.width = a.width + "px"),
                      0 !== a.height && (d.style.height = a.height + "px");
                  this.get("anchor");
                  g.j.create("div", c, g.l.ue ? "amap-info-sharp-old" : "amap-info-sharp");
                  this.KT.style.display = "block"
              }
              g.F.nwa(e)
          }
      },
      DU: function() {
          var a = this.get("isCustom")
            , b = this.get("showShadow");
          if (!a && b) {
              var a = this.KT
                , b = g.j.uI(this.fh)
                , c = b.height - 23
                , d = b.width;
              if (g.l.mi || g.l.Nu)
                  c = this.fh.childNodes[0].offsetHeight,
                  d = this.fh.childNodes[0].offsetWidth + 26;
              b = "background-image:url(" + g.A.yb + (g.l.mi ? "/theme/v1.3/iws.gif);" : "/theme/v1.3/iws.png);");
              a.innerHTML = "";
              var e = [], f;
              f = e[1] = {};
              f.height = 0.5 * c + 4;
              f.width = d;
              f.offsetX = 400;
              f.offsetY = 16;
              f.top = -f.height - 10 - 15;
              f.left = 23;
              f = e[2] = {};
              f.height = e[1].height;
              f.width = e[1].height;
              f.offsetX = 1075 - f.width;
              f.offsetY = e[1].offsetY;
              f.top = e[1].top;
              f.left = 23 + e[1].width;
              f = e[3] = {};
              f.height = 10;
              f.width = 22;
              f.offsetX = 30;
              f.offsetY = 445;
              f.top = -25;
              f.left = 23 + (g.l.Nu || g.l.mi ? 5 : 0);
              f = e[4] = {};
              f.height = 10;
              f.width = d / 2 - 15 - e[3].left - e[3].width;
              f.offsetX = 132;
              f.offsetY = 445;
              f.top = -25;
              f.left = e[3].left + e[3].width;
              f = e[5] = {};
              f.height = 10;
              f.width = 70;
              f.offsetX = 80;
              f.offsetY = 445;
              f.top = -25;
              f.left = e[4].left + e[4].width;
              f = e[6] = {};
              f.height = 10;
              f.width = d - e[5].left - e[5].width;
              f.offsetX = 132;
              f.offsetY = 445;
              f.top = -25;
              f.left = e[5].left + e[5].width;
              f = e[7] = {};
              f.height = 10;
              f.width = 30;
              f.offsetX = 621;
              f.offsetY = 445;
              f.top = -25;
              f.left = d;
              f = e[8] = {};
              f.height = 15;
              f.width = 70;
              f.offsetX = 47;
              f.offsetY = 470;
              f.top = -15;
              f.left = d / 2 - 15;
              for (c = 1; 8 >= c; c += 1)
                  d = g.j.create("div", a),
                  f = [],
                  f.push("position:absolute;"),
                  f.push(b),
                  f.push("top:" + e[c].top + "px;"),
                  f.push("left:" + e[c].left + "px;"),
                  f.push("width:" + e[c].width + "px;"),
                  f.push("height:" + e[c].height + "px;"),
                  f.push("background-position:" + -e[c].offsetX + "px " + -e[c].offsetY + "px;"),
                  d.style.cssText = f.join("")
          }
      },
      gGa: function() {},
      km: function() {
          var a = this.map
            , b = this.$b
            , c = this.get("position")
            , d = this.get("anchor");
          if (a && b && c) {
              a = a.ds(c, this.get("altitude"));
              d && (this.fh.className = d + " amap-info-contentContainer");
              var e = g.j.uI(this.fh);
              if (g.l.mi || g.l.Nu)
                  e.width = this.fh.childNodes[0].offsetWidth + 14;
              b = e.height;
              c = this.get("offset");
              this.get("isCustom");
              e = e.width;
              this.$b.style.left = Math.round(a.x - e / 2 + (c.x || 0)) + "px";
              this.$b.style.top = Math.round(a.y + (c.y || 0)) + "px";
              if (d) {
                  var f;
                  "center" == d ? (d = "center",
                  f = "middle") : (f = d.split("-"),
                  d = f[1],
                  f = f[0]);
                  switch (f) {
                  case "middle":
                      this.$b.style.top = Math.round(a.y + b / 2 + (c.y || 0)) + "px";
                      break;
                  case "top":
                      this.$b.style.top = Math.round(a.y + b + (c.y || 0)) + "px"
                  }
                  switch (d) {
                  case "left":
                      this.$b.style.left = Math.round(a.x + (c.x || 0)) + "px";
                      break;
                  case "right":
                      this.$b.style.left = Math.round(a.x - e + (c.x || 0)) + "px"
                  }
              }
              d = this.wma;
              if (this.nP && d.childNodes[0]) {
                  for (b = a = 0; b < d.childNodes.length; b += 1)
                      a += d.childNodes[0].clientHeight || 0;
                  a > (this.get("size").height || d.clientHeight) ? this.nP.style.right = "20px" : this.nP.style.right = "5px"
              }
          }
      },
      Yba: function() {
          var a = new g.H(2 - this.fh.offsetWidth / 2,2 - this.fh.offsetHeight)
            , b = this.get("offset") || new g.H(0,0)
            , c = this.get("anchor");
          if (c) {
              var a = this.fh.offsetWidth, d = this.fh.offsetHeight, e, f, h = 2 - a / 2, k = 2 - d;
              c && (c = c.split("-"),
              2 === c.length ? (e = c[1],
              f = c[0]) : 1 === c.length && "center" === c[0] && (e = "center",
              f = "middle"));
              switch (e) {
              case "left":
                  h = 2;
                  break;
              case "right":
                  h = -a
              }
              switch (f) {
              case "middle":
                  k = -d / 2;
                  break;
              case "top":
                  k = -2
              }
              a = new g.H(h,k)
          }
          this.get("isCustom") || (a = a.add(new g.H(0,-23)));
          return a.add(b)
      },
      altitudeChanged: function() {
          this.km()
      },
      jW: function() {
          if (this.get("position") && this.get("autoMove") && this.fh) {
              for (var a = this.map, b = new g.xd(this.fh.offsetWidth,this.fh.offsetHeight), c = a.ds(this.get("position"), this.get("altitude")).add(this.Yba()), d = c.add(b.cE()), e = a.get("size"), f = a.Loa(), h = 0, k = 0, l = 0; l < f.length; l += 1) {
                  var m = f[l]
                    , n = 0
                    , p = 0;
                  0 === m[1] && 0 === m[2] ? (n = m[3] - (c.x + h),
                  p = m[0] - (c.y + k),
                  0 < n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[2] && 0 === m[3] ? (n = e.ij() - m[1] - (d.x + h),
                  p = m[0] - (c.y + k),
                  0 > n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[3] ? (n = e.ij() - m[1] - (d.x + h),
                  p = e.gj() - m[2] - (d.y + k),
                  0 > n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[1] && (n = m[3] - (c.x + h),
                  p = e.gj() - m[2] - (d.y + k),
                  0 < n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p))
              }
              c = c.add(new g.H(h,k));
              d = d.add(new g.H(h,k));
              l = f = 0;
              0 > c.x || b.ij() > e.ij() ? f = 20 - c.x : e.ij() < d.x && (f = e.ij() - d.x - 25);
              0 > c.y || b.gj() > e.gj() ? l = 5 - c.y : e.gj() < d.y && (l = e.gj() - d.y - 15);
              f += h;
              l += k;
              if (f || l)
                  a.D.C = !0,
                  a.D.panBy(f, l),
                  a.D.C = !1
          }
      },
      jma: function() {
          this.get("closeWhenClickMap") && (this.map.g("clickstart", this.tZ, this, !1),
          this.map.g("clickend", this.sZ, this, !1))
      },
      tZ: function() {
          this.df.ei && (this.df.C = !0,
          this.df.getIsOpen() && (this.df.oK = !0),
          this.df.C = !1)
      },
      sZ: function() {
          this.df.ei && (this.df.oK && (this.df.C = !0,
          this.df.close(),
          this.df.C = !1),
          this.df.oK = !1)
      },
      Pg: function() {
          this.$b && this.map && (this.df.oK = !1,
          this.get("closeWhenClickMap") && (this.map.G("clickstart", this.tZ, this),
          this.map.G("clickend", this.sZ, this)),
          this.get("retainWhenClose") ? this.map.ul.appendChild(this.$b) : (this.$b.parentNode === this.map.Sa.w && this.map.Sa.w.removeChild(this.$b),
          this.df.w = null),
          this.map = null,
          this.df.ei = !1,
          this.Yb.q("close", {
              type: "close",
              target: this.Yb
          }))
      },
      hAa: function() {
          if (!this.get("isCustom"))
              return this.fh.offsetWidth;
          for (var a = this.Wh, b = a.firstChild, c = a.lastChild; b && c && b.style && c.style && b === c; )
              a = b,
              b = a.firstChild,
              c = a.lastChild;
          a = g.j.Vc(a, "width");
          return a = parseInt(a.replace("px", ""), 10)
      },
      renderChanged: function() {
          this.km()
      },
      positionChanged: function() {
          this.map && this.$b && (this.km(),
          this.jW())
      },
      anchorChanged: function() {
          this.positionChanged()
      },
      offsetChanged: function() {
          this.positionChanged()
      },
      contentChanged: function() {
          this.Rs();
          this.DU();
          this.km()
      },
      sizeChanged: function() {
          this.Rs();
          this.DU();
          this.km()
      }
  });
  g.Aa = {};
  g.Aa.Ee = g.aa.extend({
      ja: [g.sa, g.Oe],
      r: function() {},
      zu: function() {
          var a = this.pd();
          a.eh || (a.eh = g.I.ki(a));
          return a.eh
      },
      jb: function() {
          return new this.r(this.va)
      },
      xQ: function() {
          return this.va
      },
      setCoords: function(a) {
          this.Gva(a)
      },
      Gva: function(a) {
          this.gv = this.pd();
          this.kg = null;
          if (g.Aa.yc && this instanceof g.Aa.yc) {
              var b = a.length;
              this.zf = Array(b);
              for (var c, d, e = 0; e < b; e += 1)
                  if (c = a[e],
                  d = new g.Aa.YK(c),
                  this.zf[e] = d,
                  0 === e) {
                      if (0 === c.length)
                          break;
                      d.Pp(c) || c.reverse()
                  } else
                      0 !== c.length && d.Pp(c) && c.reverse()
          } else
              this.va = a
      }
  });
  g.Aa.Fe = g.extend({}, {
      rw: "point",
      UK: "linestring",
      pV: "linearring",
      SE: "polygon",
      eL: "multipoint",
      dL: "multilinestring",
      PE: "multipolygon",
      Oya: "geometrycollection"
  });
  g.Rh = g.aa.extend({
      ja: [g.sa, g.Oe],
      r: function(a) {
          a = a || {};
          a.PA && (this.PA = a.PA);
          a.WM && (this.WM = a.WM);
          a.DY && (this.DY = a.DY);
          this.map = a.map;
          this.Ml = a.xM || g.a.ub(this);
          this.name = a.name || "";
          this.Se = !1;
          this.set("visible", !0, !0);
          this.DT(a.da);
          this.cl = a.lK;
          this.style = a.style
      },
      lna: function() {
          this.name = this.map = null;
          this.style = this.cl = this.br = this.P4 = this.da = this.da.Ma = null;
          this.il();
          this.hi()
      },
      Fpa: function() {
          return this.cl
      },
      Tva: function(a) {
          this.cl = a;
          this.zIndex = this.cl[0].ok || this.zIndex
      },
      cc: function() {
          return this.da
      },
      DT: function(a) {
          a && (this.da = a,
          this.W("coords", a, !0),
          this.PA || this.WM) && (a.W("radius", this),
          a.W("center", this),
          a.W("resolution", this),
          a.W("strokeWeight", this))
      },
      setStyle: function(a) {
          this.Tva(a);
          this.Ir()
      },
      coordsChanged: function() {
          this.Ir()
      },
      radiusChanged: function() {
          this.da.gv = this.da.pd();
          this.da.kg = null;
          this.Ir()
      },
      Ir: function(a) {
          this.set("feature", {
              target: this,
              cna: a,
              gv: this.da.gv || this.da.pd(),
              xsa: this.da.pd()
          });
          this.da.gv = this.da.pd()
      },
      visibleChanged: function() {
          this.Ir()
      },
      NCa: function(a) {
          for (var b = 0; b < this.cl.length; b += 1) {
              var c = this.cl[b];
              if (a.cb(c.Mx(this)))
                  return c
          }
      },
      Toa: function() {
          var a = this.cc()
            , b = [];
          a.li() === g.Aa.Fe.SE || a.li() === g.Aa.Fe.PE ? b.push(new g.style.ne.yc({
              fillColor: "#78cdd1",
              $d: 0.2,
              strokeColor: "#122e29",
              kb: 0.5,
              lc: 1
          })) : a.li() === g.Aa.Fe.UK || a.li() === g.Aa.Fe.pV || a.li() === g.Aa.Fe.dL ? b.push(new g.style.ne.Vo({
              color: "#888888",
              width: 1,
              zIndex: 10
          })) : a.li() !== g.Aa.Fe.rw && a.li() !== g.Aa.Fe.eL || b.push(new g.style.ne.Th({
              url: g.A.yb + "/theme/v1.3/markers/0.png",
              width: 36,
              height: 36,
              rotation: 0,
              yGa: -12,
              AGa: -36,
              zIndex: 100
          }));
          return b
      }
  });
  g.Rh.Jya = "geometry";
  g.Aa.vg = g.Aa.Ee.extend({
      r: function(a, b) {
          this.va = a;
          this.kj = b;
          this.kg = null
      },
      pd: function() {
          if (!this.kg) {
              var a = this.va[0]
                , b = this.va[1];
              if (this.kj)
                  this.kg = [a, b, a, b];
              else {
                  var c = this.get("radius")
                    , d = this.get("resolution") * this.get("strokeWeight") || 0
                    , c = c ? c / Math.cos(Math.PI * this.get("center").P / 180) : 0;
                  this.kg = [a - c - d, b - c - d, a + c + d, b + c + d]
              }
          }
          return this.kg
      },
      li: function() {
          return g.Aa.Fe.rw
      }
  });
  g.N = {
      canvas: {},
      Vd: {},
      Me: {},
      ye: {}
  };
  g.N.Tb = g.aa.extend({
      ja: [g.sa, g.Oe],
      r: function(a, b) {
          this.h = a;
          this.kj = a.U.kj;
          this.J = b;
          this.e = b.e;
          this.W("display", b)
      },
      Lj: function() {
          this.hv && this.hv();
          this.il();
          this.e = this.J = this.h = null
      },
      Bu: function(a, b, c, d) {
          var e = this.zoom;
          c = [];
          var f = this.h;
          if (Math.floor(e) !== e)
              b(c, f);
          else {
              a = [a.x, a.y];
              if (f.Tl) {
                  for (var e = f.Ng, h = !0, k = [], l = 0; l < e.length; l += 1) {
                      var m = e[l].Cg;
                      if (m)
                          if (m.parentNode && m.parentNode.parentNode && this.J && m.parentNode.parentNode !== this.J.ul && "none" !== m.parentNode.style.display) {
                              var n = g.j.jo(m)
                                , m = n[0]
                                , n = n[1];
                              if (m && n) {
                                  var p = Math.max(Math.abs(e[l].get("offset").x), Math.abs(e[l].get("offset").y)) + Math.max(m, n);
                                  f.mf = Math.max(f.mf, p);
                                  f.Yf = Math.max(f.Yf, p);
                                  e[l].width = m;
                                  e[l].height = n
                              } else
                                  h = !1,
                                  k.push(e[l])
                          } else
                              h = !1,
                              k.push(e[l])
                  }
                  h ? (f.Tl = !1,
                  f.Ng = []) : f.Ng = k
              }
              e = Math.max(f.mf, f.Ky || 0) * this.S;
              h = Math.max(f.Yf, f.Ky || 0) * this.S;
              k = 0;
              f.Jy && (k = f.Jy / Math.cos(Math.PI * this.e.get("center").P / 180));
              h = Math.max(h, k || 0);
              e = Math.max(e, k || 0);
              if (e = f.$m([a[0] - e, a[1] - h, a[0] + e, a[1] + h])) {
                  for (var q in e)
                      if (e.hasOwnProperty(q) && (h = e[q],
                      h.get("visible") && !h.get("noSelect")))
                          if (k = h.cc(),
                          k instanceof g.Aa.vg)
                              if (this.kj) {
                                  l = this.h.hm;
                                  l instanceof Array && (l = "number" === typeof h.eb.style && l[h.eb.style] ? l[h.eb.style] : l[0]);
                                  var m = l.size.width * this.S
                                    , n = l.size.height * this.S
                                    , p = l.anchor.x * this.S
                                    , r = l.anchor.y * this.S
                                    , k = k.va
                                    , s = l.rotation_
                                    , u = [a[0], a[1]];
                                  if (s) {
                                      var v = (a[0] - k[0]) / this.S
                                        , x = (a[1] - k[1]) / this.S
                                        , t = s
                                        , s = Math.cos(-t)
                                        , w = Math.sin(-t)
                                        , t = v * s - x * w
                                        , v = v * w + x * s;
                                      u[0] = k[0] + t * this.S;
                                      u[1] = k[1] + v * this.S
                                  }
                                  m = g.I.TO([[u[0] - m + p, u[1] - n + r], [u[0] + p, u[1] + r]]);
                                  g.I.Nd(m, k) && c.push(h)
                              } else if ("undefined" !== typeof k.get("radius"))
                                  l = k.va,
                                  l = new g.H(l[0],l[1]),
                                  m = new g.H(a[0],a[1]),
                                  k = k.get("radius"),
                                  "px" === h.get("unit") ? m.re(l) / Math.pow(2, 20 - this.zoom) < k && c.push(h) : m.re(l) * Math.cos(h.get("center").P * Math.PI / 180) <= k / this.Vp * Math.pow(2, 20 - this.zoom) && c.push(h);
                              else if ("AMap.Text" == h.rp)
                                  l = h.get("params"),
                                  l.visible && h.ba && g.j.UC(d, h.ba, "amap-markers") && c.push(h);
                              else {
                                  if (l = h.get("params"),
                                  l.visible && h.ba)
                                      if (l.shape)
                                          for (k = k.va,
                                          s = l.pp % 360,
                                          u = [a[0], a[1]],
                                          s && (v = (a[0] - k[0]) / this.S,
                                          x = (a[1] - k[1]) / this.S,
                                          t = Math.PI * s / 180,
                                          s = Math.cos(-t),
                                          w = Math.sin(-t),
                                          t = v * s - x * w,
                                          v = v * w + x * s,
                                          u[0] = k[0] + t * this.S,
                                          u[1] = k[1] + v * this.S),
                                          m = h.width * this.S,
                                          n = h.height * this.S,
                                          p = l.offset.x * this.S,
                                          r = l.offset.y * this.S,
                                          m = g.I.TO([[u[0] - m - p, u[1] - n - r], [u[0] - p, u[1] - r]]),
                                          k[0]instanceof Array || (k = [k]),
                                          n = k.length - 1; 0 <= n; n -= 1) {
                                              if (g.I.Nd(m, k[n])) {
                                                  l.shape ? this.TC(h, u, k) && c.push(h) : c.push(h);
                                                  break
                                              }
                                          }
                                      else
                                          g.j.UC(d, h.ba, "amap-markers") && c.push(h)
                              }
                          else
                              k.Nd ? k.Nd(a) && c.push(h) : k.Wx && 1.8 * k.Wx(a) <= h.get("strokeWeight") * this.S && c.push(h);
                  this.kj ? c.sort(function(a, b) {
                      return a.Ml > b.Ml ? -1 : 1
                  }) : c.sort(function(a, b) {
                      return a.get("isTop") ? -1 : b.get("isTop") ? 1 : a.get("zIndex") > b.get("zIndex") || a.get("zIndex") === b.get("zIndex") && a.Ml > b.Ml ? -1 : 1
                  });
                  b(c, f)
              } else
                  b([], f)
          }
      },
      TC: function(a, b, c) {
          var d = (b[0] - c[0][0]) / this.S;
          b = (b[1] - c[0][1]) / this.S;
          a = a.get("params");
          c = a.offset;
          var d = [d - c.x, b - c.y], e;
          a = a.shape;
          if ("circle" === a.B.type) {
              if (b = a.B.coords[0],
              c = a.B.coords[1],
              Math.sqrt((d[0] - b) * (d[0] - b) + (d[1] - c) * (d[1] - c)) <= a.B.coords[2])
                  return !0
          } else {
              if ("poly" === a.B.type)
                  return e = a.B.coords,
                  e = this.rH(e),
                  g.wd.Nd(d, e);
              if ("rect" === a.B.type)
                  return e = a.B.coords,
                  a = e[0],
                  b = e[1],
                  c = e[2],
                  e = e[3],
                  e = [[a, b], [c, b], [c, e], [a, e]],
                  g.wd.Nd(d, e)
          }
          return !1
      },
      rH: function(a) {
          for (var b = [], c = 0; c / 2 < a.length / 2; c += 2)
              b.push([a[c], a[c + 1]]);
          return b
      },
      V2: function(a, b, c, d, e, f, h) {
          var k = ["position:absolute;"];
          k.push("top:" + Math.round(c) + "px;");
          k.push("left:" + Math.round(b) + "px;");
          k.push("width:" + Math.round(d) + "px;");
          k.push("height:" + Math.round(e) + "px;");
          1 > f && ("opacity"in a.style ? (k.push("opacity"),
          k.push(":"),
          k.push(f),
          k.push(";")) : 8 <= document.documentMode ? (k.push("-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="),
          k.push(Math.ceil(100 * f)),
          k.push(")';")) : (k.push("filter:alpha(opacity="),
          k.push(Math.ceil(100 * f)),
          k.push(");")));
          k.push("z-index:" + h + ";");
          k.join("");
          g.j.t7(a, k.join(""))
      }
  });
  g.N.Kb = g.aa.extend({
      ja: [g.sa, g.Oe],
      r: function(a) {
          this.e = a;
          this.type = "2D";
          this.fk = g.a.nc(a.get("zoom"), 1);
          this.ul = a.ul;
          this.K = a.Sa.o;
          this.W("display", a);
          this.W("rotateEnable", a);
          this.W("style", a);
          this.W("zoom", a);
          this.W("hightlight", a)
      },
      nS: function(a) {
          this.pe = a || g.a.Ek("ff" + this.e.pe.slice(1))
      },
      Bu: function(a, b, c, d, e) {
          function f(a, d) {
              a.length && (k[g.a.indexOf(b, d)] = a);
              l -= 1;
              0 >= l && (c(k),
              l = 0)
          }
          for (var h = b.length, k = [], l = 0, m, n = [], p = 0; p < h; p += 1)
              m = b[p],
              m instanceof g.o.$c && m.get("visible") && (n.push(this.Du(m)),
              l += 1);
          for (h = 0; h < n.length; h += 1)
              n[h].Bu(a, f, d, e)
      }
  });
  g.P1 = {
      hI: function(a, b, c) {
          for (var d = null, e = null, f = 0, h = 0, k = 0, l = b.length; k < l; k++) {
              var m = b[k];
              if (m < a)
                  d = c[m],
                  f = m;
              else {
                  e = c[m];
                  h = m;
                  break
              }
          }
          null === d ? (d = e,
          f = h) : null === e && (e = d,
          h = f);
          return {
              Xy: f,
              lJ: h,
              xs: d,
              jD: e
          }
      },
      Ipa: function(a) {
          var b = this
            , c = g.a
            , d = []
            , e = {};
          c.Rb(a.nodes, function(a) {
              !1 !== a.value && null !== a.value && (e[a.zoom] = g.A.Cc + "://" + a.value,
              d.push(a.zoom))
          });
          return function(a) {
              a = c.nc(a, 1);
              void 0 === e[a] && (e[a] = b.hI(a, d, e).xs);
              return e[a]
          }
      },
      opa: function(a) {
          var b = this
            , c = g.a
            , d = []
            , e = {}
            , f = a.transitional;
          c.Rb(a.nodes, function(a) {
              null !== a.value && !1 !== a.value && (e[a.zoom] = a.value,
              d.push(a.zoom))
          });
          return function(a) {
              a = c.nc(a, 1);
              if (void 0 === e[a]) {
                  var k = b.hI(a, d, e);
                  e[a] = f && "none" !== f && k.lJ !== k.Xy && k.xs !== k.jD ? c.p3(k.xs, k.jD, (a - k.Xy) / (k.lJ - k.Xy), f) : k.xs
              }
              return e[a]
          }
      },
      Boa: function(a) {
          var b = this
            , c = g.a
            , d = []
            , e = {};
          c.Rb(a.nodes, function(a) {
              null !== a.value && (e[a.zoom] = a.value,
              d.push(a.zoom))
          });
          return function(a) {
              a = c.nc(a, 1);
              void 0 === e[a] && (e[a] = b.hI(a, d, e).xs);
              return e[a]
          }
      },
      Joa: function(a, b, c) {
          var d = this
            , e = g.a
            , f = []
            , h = {}
            , k = a.transitional;
          e.Rb(a.nodes, function(a) {
              a.value && (h[a.zoom] = e.Hka(a.value, c ? "rgba" : "webgl"),
              f.push(a.zoom))
          });
          return function(a) {
              var b = null;
              a = e.nc(a, 1);
              if (void 0 === h[a]) {
                  var b = d.hI(a, f, h)
                    , n = b.xs;
                  if (k && "none" !== k && b.Xy !== b.lJ && b.xs.join("") !== b.jD.join(""))
                      for (var n = n.slice(0), p = (a - b.Xy) / (b.lJ - b.Xy), q = 0, r = b.jD.length; q < r; q++)
                          n[q] = e.p3(b.xs[q], b.jD[q], p, k);
                  h[a] = n
              }
              b = h[a];
              return c && b ? "rgba(" + b.join(",") + ")" : b || ""
          }
      },
      wJ: function(a, b, c, d) {
          var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {}, f;
          for (f in c)
              if (c.hasOwnProperty(f)) {
                  var h = c[f];
                  void 0 !== b[h] ? (b[h].nodes && 1 < b[h].nodes.length && b[h].nodes.sort(function(a, b) {
                      return a.zoom - b.zoom
                  }),
                  a[f] = e.Nqa ? {
                      Me: d.call(this, b[h], c[f]),
                      canvas: d.call(this, b[h], c[f], !0)
                  } : d.call(this, b[h], c[f])) : e.Mqa && (a[f] = !0)
              }
      },
      kr: function(a, b) {
          for (var c = [], d = 0, e = a.length; d < e; d += 2) {
              var f = 0
                , f = "str" === b ? g.a.nc(parseInt(a.substr(d, 2), 16) / (0 === d ? 255 : 1), 3) : g.a.nc(parseInt(a.substr(d, 2), 16) / 255, 3);
              c.push(f)
          }
          return c.length ? (c.push(c.shift()),
          "str" === b ? "rgba(" + c.join(",") + ")" : c) : ""
      },
      f6: function(a, b, c) {
          if (b[c])
              console.log("customType repeat!!", c);
          else {
              var d = {}
                , e = {
                  visible: "visible",
                  MT: "showLabel",
                  ek: "showIcon"
              }
                , f = [["color", {
                  color: "color"
              }, {
                  opacity: "opacity"
              }], ["fillColor", {
                  fillColor: "fillColor"
              }, {
                  $d: "fillOpacity"
              }], ["strokeColor", {
                  strokeColor: "strokeColor"
              }, {
                  kb: "strokeOpacity"
              }], ["textFillColor", {
                  Awa: "textFillColor"
              }, {
                  Bwa: "textFillOpacity"
              }], ["textStrokeColor", {
                  Dwa: "textStrokeColor"
              }, {
                  Ewa: "textStrokeOpacity"
              }], ["backgroundColor", {
                  backgroundColor: "backgroundColor"
              }, {
                  Qka: "backgroundOpacity"
              }]];
              if (a.styles) {
                  a = a.styles;
                  this.wJ(d, a, e, this.Boa, {
                      Mqa: !0
                  });
                  for (var e = 0, h = f.length; e < h; e++) {
                      var k = f[e];
                      a[k[0]] ? this.wJ(d, a, k[1], this.Joa, {
                          Nqa: !0
                      }) : this.wJ(d, a, k[2], this.opa)
                  }
                  a.texture && (this.wJ(d, a, {
                      Ua: "texture"
                  }, this.Ipa),
                  d.kd = [],
                  g.a.Rb(a.texture.nodes, function(a) {
                      a.value && d.kd.push(g.A.Cc + "://" + a.value)
                  }))
              } else {
                  for (h in e)
                      e.hasOwnProperty(h) && (k = e[h],
                      d[h] = void 0 === a[k] ? !0 : a[k]);
                  e = 0;
                  for (h = f.length; e < h; e++) {
                      var l = f[e]
                        , k = g.a.keys(l[1])[0]
                        , m = l[1][k]
                        , n = g.a.keys(l[2])[0]
                        , l = l[2][n];
                      void 0 !== a[m] ? d[k] = {
                          canvas: this.kr(a[m], "str"),
                          Me: this.kr(a[m])
                      } : d[n] = a[l]
                  }
                  a.texture && (d.Ua = g.A.Cc + "://" + a.texture)
              }
              b[c] = d
          }
      },
      DS: function(a, b, c, d) {
          if (a)
              for (var e in a)
                  if (a.hasOwnProperty(e) && g.a.Uj(a[e], "object")) {
                      var f = a[e]
                        , h = e;
                      c && (h = c + ":" + e);
                      if (f.detailedType)
                          this.f6(f, b, h),
                          this.DS(f.detailedType, b, h, f);
                      else if (f.subType)
                          this.DS(f.subType, b, h);
                      else {
                          if (void 0 !== f.code) {
                              for (var k in d)
                                  d.hasOwnProperty(k) && !g.a.ja(["isDetailed", "detailedType", "styles"], k) && void 0 === f[k] && void 0 !== d[k] && (f[k] = d[k]);
                              h = c + ":" + f.code
                          }
                          this.f6(f, b, h)
                      }
                  }
      },
      zU: function(a) {
          if (!this.Qx || this.Qx.zoom != a) {
              var b = g.a.Eh, c = {
                  zoom: a
              }, d;
              for (d in this.ii)
                  if (this.ii.hasOwnProperty(d)) {
                      var e = this.ii[d];
                      c[d] = {};
                      for (var f in e)
                          if (e.hasOwnProperty(f)) {
                              var h = e[f];
                              h ? h.Me ? (c[d][f] = {},
                              b(h.Me) ? c[d][f].Me = h.Me(a) : c[d][f].Me = h.Me,
                              b(h.canvas) ? c[d][f].canvas = h.canvas(a) : c[d][f].canvas = h.canvas) : b(h) ? c[d][f] = h(a) : c[d][f] = h : c[d][f] = h
                          }
                  }
              this.Qx = c
          }
      },
      styleChanged: function(a) {
          if (this.e.D.oi) {
              a = a || this.get("style");
              this.Rl.jA || (this.Rl = g.a.bind(this.Rl, this),
              this.Hp = g.a.bind(this.Hp, this),
              this.Rl.jA = !0);
              var b = g.a
                , c = {};
              this.DS(a, c);
              this.ii = c;
              a = this.ii["regions:land"];
              var c = this.ii.water, d = this.ii.sky, e = this.ii.buildings, f, h, k, l, m, n = this.fk;
              if (a) {
                  var p = "rgba(0, 0, 0, 0)";
                  if (a.visible) {
                      var q = this.Hp(b.d7(this.e.pe.substr(1)), a.opacity, a.color, !0, n);
                      q && (p = this.Gz(q, a.visible, "rgba(0, 0, 0, 0)"),
                      q = this.Rl(b.As(this.e.pe.substr(1)), a.opacity, a.color, !0, n),
                      f = this.Gz(q, a.visible))
                  }
                  this.e.ju = p
              } else
                  this.e.ju = "";
              c && c.visible && (h = this.Rl(b.As(this.e.XG.substr(1)), c.opacity, c.color, !0, n),
              h = this.Gz(h, c.visible));
              d && d.visible && (k = this.Rl(b.As(this.e.wB.substr(1)), void 0, d.color, !0, n),
              k = this.Gz(k, d.visible));
              e && (e.visible ? (l = this.Rl(b.Ek(this.e.kF[0]), void 0, e.fillColor, !0, n),
              l = this.Gz(l, e.visible),
              m = this.Rl(b.Ek(this.e.kF[1]), void 0, e.strokeColor, !0, n),
              m = this.Gz(m, e.visible)) : (l = [1, 1, 1, 0],
              m = [1, 1, 1, 0]));
              this.nS && this.nS(f, h, k, [l, m]);
              this.U8 ? this.U8(this.ii) : this.set("display");
              delete this.Qx;
              this.zU(n)
          }
      },
      Gz: function(a, b) {
          var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [0, 0, 0, 0]
            , d = g.a.Eh;
          if (d(a) && d(b)) {
              var e = a;
              a = function(a) {
                  return b(a) ? e(a) : c
              }
          }
          return a
      },
      Hp: function(a, b, c, d, e) {
          if (a) {
              if (void 0 !== b)
                  return a = a.split(","),
                  c = b,
                  "function" === typeof b && (c = b(e)),
                  a[3] = g.a.nc(c, 3) + ")",
                  a.join(",");
              if (c)
                  return "function" === typeof c.canvas ? d ? c.canvas : c.canvas(e) : c.canvas
          }
          return a
      },
      Rl: function(a, b, c, d, e) {
          if (a) {
              if (b)
                  return c = b,
                  "function" === typeof b && (c = b(e)),
                  [a[0], a[1], a[2], g.a.nc(c, 3)];
              if (c)
                  return "function" === typeof c.Me ? d ? c.Me : c.Me(e) : c.Me
          }
          return a
      },
      pI: function(a, b, c) {
          var d = this.ii;
          this.Qx && c && c == this.Qx.zoom && (d = this.Qx);
          return b && (b = d[a + ":" + b]) ? b : d[a]
      },
      Pl: function(a, b, c, d, e) {
          var f = null
            , h = a;
          d = d ? this.Hp : this.Rl;
          e = e || this.fk;
          if (f = this.pI(b, void 0, e))
              if ("function" === typeof f.visible && !f.visible(e) || !1 === f.visible)
                  h = "";
              else {
                  var h = 1
                    , k = "";
                  if (c)
                      if (f.fillColor || f.$d)
                          h = f.$d,
                          k = f.fillColor;
                      else {
                          if (f.color || f.opacity)
                              h = f.opacity,
                              k = f.color
                      }
                  else if (f.strokeColor || f.kb)
                      h = f.kb,
                      k = f.strokeColor;
                  else if (f.color || f.opacity)
                      h = f.opacity,
                      k = f.color;
                  h = d(a, h, k, !1, e)
              }
          this.Tr === b && (h = this.Cu(h || a));
          return h
      },
      Or: function(a, b, c, d) {
          c = c ? this.Hp : this.Rl;
          var e = null
            , f = a;
          d = d || this.fk;
          (e = this.pI(b, void 0, d)) && (f = "function" === typeof e.visible && !e.visible(d) || !1 === e.visible ? "" : c(a, e.opacity, e.color, !1, d));
          this.Tr === b && (f = this.Cu(f || a));
          return f
      },
      hy: function(a, b, c, d, e, f) {
          var h = a
            , k = b
            , l = c
            , m = !0
            , n = !0
            , p = 1;
          f = f || this.fk;
          var q = this.pI(d, e, f);
          q && ("function" === typeof q.visible && !q.visible(f) || !1 === q.visible || "function" === typeof q.MT && !q.MT(f) || !1 === q.MT ? (n = m = !1,
          h = k = l = "") : (h = this.Hp(a, q.Bwa, q.Awa, !1, f),
          k = this.Hp(b, q.Ewa, q.Dwa, !1, f),
          l = this.Hp(c, q.Qka, q.backgroundColor, !1, f),
          m = "function" === typeof q.ek ? q.ek(f) : q.ek));
          f = !1;
          this.Tr === d ? f = !0 : void 0 !== e && this.Tr === d + "-" + e && (f = !0);
          f && (h = this.Cu(h || a),
          k = this.Cu(k || b),
          l = this.Cu(l || c),
          p = 1 - 1.6 * this.MC,
          n = m = !0);
          return [h, k, l, m, n, p]
      },
      gy: function(a, b, c, d, e) {
          var f = null
            , h = a
            , k = b;
          d = d ? this.Hp : this.Rl;
          var l = e || this.fk;
          if (f = this.pI(c, void 0, e))
              "function" === typeof f.visible && !f.visible(l) || !1 === f.visible ? h = k = "" : (h = d(a, f.$d, f.fillColor, !1, l),
              k = d(b, f.kb, f.strokeColor, !1, l));
          this.Tr === c && (b = k || b,
          h = this.Cu(h || a),
          k = this.Cu(b));
          return [h, k]
      }
  };
  g.N.Kb.zb(g.P1);
  g.N.canvas.Kb = g.N.Kb.extend({
      r: function(a) {
          arguments.callee.ka.apply(this, arguments)
      },
      Du: function(a) {
          if (!a.N) {
              var b = a.Gl(this);
              b && !b.Gma && (a.N = b)
          }
          return a.N
      },
      kc: function(a) {
          var b = this.e.E2();
          b && this.ZS !== b && this.e.D.oi && (this.e.s7(b),
          this.ZS = b);
          this.e.Sa.qr.style.cssText = "";
          var c = a.xa
            , b = a.R
            , d = this.e.D.get("features")
            , e = a.size.width
            , f = a.size.height;
          this.fk = "vw" === this.e.D.Ge.baseRender ? g.a.nc(b.zoom, 1) : a.R.ze;
          this.S = b.S;
          if (!this.Ka || 1E4 < Math.abs(b.nb.x - this.Ka.x) / this.S || 1E4 < Math.abs(b.nb.y - this.Ka.y) / this.S)
              this.Ka = b.nb;
          this.Ka.x - b.nb.x < -g.a.Ca / 2 ? this.Ka = new g.H(this.Ka.x + g.a.Ca,this.Ka.y) : this.Ka.x - b.nb.x > g.a.Ca / 2 && (this.Ka = new g.H(this.Ka.x - g.a.Ca,this.Ka.y));
          for (var h = 0; h < c.length; h += 1) {
              var k = c[h]
                , l = this.Du(k)
                , m = c[h].te();
              if (l && l.h)
                  if (!m.visible || k.kD || m.lb[0] > b.zoom || m.lb[1] < b.zoom || k.ha && 0 === k.ha.length) {
                      if (l = l.hj())
                          if (l.length)
                              for (m = 0; m < l.length; m += 1)
                                  l[m].parentNode === this.K && this.K.removeChild(l[m]);
                          else
                              l.parentNode === this.K && this.K.removeChild(l)
                  } else if (this.IR(k, d)) {
                      l.kc(a, m);
                      l.en && (a.Qf = l.Qf);
                      var k = l.hj(), n, p, q = l.transform;
                      if (!q || !k || l.Jg && !this.e.D.Ja)
                          c[h].Pk && k.parentNode !== this.K && (this.K.appendChild(k),
                          c[h].Lb = k);
                      else {
                          c[h].Lb = k;
                          k.length || (k = [k],
                          q = [q]);
                          for (var r = 0; r < k.length; r += 1)
                              if (n = k[r],
                              p = q[r],
                              !p.ty) {
                                  var s = p.translate.x
                                    , u = p.translate.y;
                                  c[h].OI || (s = g.a.nc(s, 2),
                                  u = g.a.nc(u, 2));
                                  var v = p.scale;
                                  1E-5 > Math.abs(s) && (s = 0);
                                  1E-5 > Math.abs(u) && (u = 0);
                                  var x = [];
                                  x.push("position:absolute");
                                  x.push("z-index:" + (p.ok || c[h].get("zIndex")));
                                  c[h].oC ? (x.push("top:" + Math.floor(f / 2 + u) + "px"),
                                  x.push("left:" + Math.floor(e / 2 + s) + "px")) : n.v4 ? (x.push("height:" + n.height * v + "px"),
                                  x.push("width:" + n.width * v + "px"),
                                  x.push("top:" + (f / 2 - u * v) + "px"),
                                  x.push("left:" + (e / 2 - s * v) + "px")) : (1 !== v && (x.push(g.j.Ls[g.j.eg] + "-origin:" + s + "px " + u + "px"),
                                  x.push(g.j.Ls[g.j.eg] + ":scale3d(" + v + "," + v + ",1)")),
                                  x.push("top:" + Math.floor(f / 2 - u) + "px"),
                                  x.push("left:" + Math.floor(e / 2 - s) + "px"),
                                  l.mj && (x.push("height:" + n.height + "px"),
                                  x.push("width:" + n.width + "px")));
                                  l.OI || 1 === m.opacity || "number" !== typeof m.opacity || x.push(g.j.b3(n, m.opacity));
                                  n.parentNode !== this.K && this.K.appendChild(n);
                                  g.j.t7(n, x.join(";"))
                              }
                      }
                  }
          }
          a = this.e.Sa.qr;
          k = this.e.Sa.o;
          c = this.e.Sa.w;
          g.j.eg && "number" === typeof b.rotation && 0 !== b.rotation ? (a.style[g.j.eg + "Origin"] = e / 2 + "px " + f / 2 + "px",
          a.style[g.j.eg] = "rotate(" + b.rotation + "deg)",
          a.style.overflow = "visible",
          k.style.overflow = "visible",
          c.style.overflow = "visible") : (a.style.cssText = "",
          k.style.cssText = "-webkit-transform: translateZ(0);",
          c.style.cssText = "");
          this.e.Av = !1
      },
      IR: function(a, b) {
          if ("all" === b || void 0 === a.Dl)
              return !0;
          for (var c = 0, d = a.Dl.length; c < d; c++)
              if (g.a.ja(b, "region" === a.Dl[c] ? "bg" : a.Dl[c]))
                  return !0;
          return !1
      },
      zoomChanged: function() {
          var a = this.e.get("zoom");
          this.fk = "vw" === this.e.D.Ge.baseRender ? g.a.nc(a, 1) : Math.round(a);
          this.ii && this.zU(this.fk)
      }
  });
  g.N.Gi = g.N.Tb.extend({
      r: function(a, b) {
          arguments.callee.ka.apply(this, arguments);
          this.W("reload", a, !0);
          var c = a.U.get("cacheSize");
          if (this.e && this.e.D) {
              var d = this.e.D.get("tileCacheSize");
              d && 0 < d && (c = d)
          }
          this.ta = new g.dg(c);
          var e = this;
          this.ta.rJ.C0(function(a) {
              e.uA(a)
          });
          this.ta.PB = function(a) {
              return a.Sb ? (a.Sb.Wi -= 1,
              0 == a.Sb.Wi && (a.Uu = !1),
              delete a.Sb,
              !0) : a.Uu ? a.Wi ? !1 : !0 : !0
          }
          ;
          this.ad = 1;
          this.Cn = 50;
          this.lW = !0;
          this.h.ta = this.ta;
          this.Xl = new g.KE(6,null,a.ZP);
          new g.KE(5,null,a.ZP)
      },
      hv: function() {
          this.clear();
          this.Tg = null;
          this.ta.clear();
          this.ta.PB = null;
          this.ta = this.ta.rJ.fF = null;
          this.Dc && (this.Dc.G("tiles", this.qD, this),
          this.Dc.G("ack", this.pD, this),
          this.Dc.G("disable", this.nD, this),
          this.Dc = null);
          this.mj && g.F.G(this.Qa, "webglcontextlost", this.mD, this);
          this.e.G("zoomend", this.Nj, this);
          this.e.G("moveend", this.Nj, this)
      },
      reloadChanged: function() {
          this.h && (this.h.Ja = !1);
          this.ta.clear();
          this.reload = !0;
          this.set("display")
      },
      kh: function(a, b, c) {
          function d(b) {
              a.loaded = !0;
              e.h && (a.status = "loaded",
              a.wa = !0,
              a.ff = b,
              e.set("display", 0),
              "function" === typeof c && c())
          }
          var e = this;
          a.status = "loading";
          this.h.ao && this.h.ao.call(this, a, d, function() {
              a.loaded = !0;
              e.h && (a.status = "loaded",
              a.wa = !0,
              "function" === typeof c && c())
          })
      },
      ZFa: function(a, b, c, d) {
          var e = [];
          c = c || 18;
          b = Math.pow(2, b - c);
          for (var f = 0; f < a.length; f += 1) {
              var h = a[f].ra
                , k = Math.floor(h.x / b)
                , h = Math.floor(h.y / b);
              if (d) {
                  if (k = c + "/" + k + "/" + h,
                  (h = this.ta.get(k)) && "loaded" == h.status)
                      continue
              } else
                  h = new g.Gq(c,k,h),
                  k = h + "",
                  h = new g.ob(h);
              !e[k] && h && (e.push(h),
              e[k] = 1)
          }
          return e
      },
      VH: function(a, b) {
          var c = this
            , d = this;
          if (this.h.IG) {
              var e, f, h, k, l, m, n, p = function() {
                  var p = 0;
                  for (e = a.length - 1; 0 <= e; e -= 1)
                      f = a[e],
                      p += f.length;
                  if (0 == p)
                      return b.call(c, a),
                      {
                          AK: void 0
                      };
                  d.fU = a;
                  for (e = a.length - 1; 0 <= e; e -= 1)
                      for (f = a[e],
                      h = [],
                      k = [],
                      f.$S = h,
                      f.fv = k,
                      l = f.length - 1; 0 <= l; l -= 1)
                          m = f[l],
                          n = m.ra,
                          c.h.e.th.pz(n.x, n.y, n.z, function() {
                              var c = l;
                              return function(e) {
                                  e ? h.push(f[c]) : k.push(f[c]);
                                  p -= 1;
                                  if (0 == p) {
                                      for (e = a.length - 1; 0 <= e; e -= 1) {
                                          var l = a[e];
                                          a[e] = l.$S;
                                          if (l.fv)
                                              for (var m = l.fv.length - 1; 0 <= m; m -= 1) {
                                                  var n = l.fv[m];
                                                  n.status = "loaded";
                                                  n.loaded = !0;
                                                  n.wa = !0
                                              }
                                      }
                                      b.call(d, a)
                                  }
                              }
                          }())
              }();
              if ("object" === typeof p)
                  return p.AK
          } else
              b.call(this, a)
      },
      Mv: function(a, b, c) {
          if (a = this.ta.get(a + "/" + b + "/" + c)) {
              if (a.Uu)
                  return a;
              if (a.Sb)
                  return a.Sb;
              a.Uu = !0;
              a.Wi = 0;
              return a
          }
      },
      rI: function(a) {
          var b = a.ra;
          a = b.x;
          var c = b.y
            , b = b.z
            , d = Math.pow(2, b)
            , e = (a + d) % d
            , f = e + d
            , d = e - d
            , h = null;
          e !== a && (h = this.Mv(b, e, c));
          h || d === a || (h = this.Mv(b, d, c));
          h || f === a || (h = this.Mv(b, f, c));
          return h
      },
      kn: function(a) {
          var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
          if (a.length)
              if (this.OJ)
                  this.jJ = !0;
              else {
                  for (var c = a.length - 1; 0 <= c; c -= 1) {
                      var d = a[c];
                      if (d.length)
                          for (var e = Math.pow(2, 20 - d[0].ra.z), c = d.length - 1; 0 <= c; c--) {
                              var f = d[c]
                                , h = f.ra;
                              h.S = e;
                              f.qa = {};
                              f.Vm = 0;
                              if (10 > h.z) {
                                  var k = this.rI(f);
                                  k && (f.Sb = k,
                                  f.status = "loaded",
                                  f.wa = !0,
                                  k.Wi += 1,
                                  f.Vm = (h.x - k.ra.x) / Math.pow(2, h.z),
                                  d.splice(c, 1),
                                  this.set("display", 0))
                              }
                              this.ta.set(f.key, f);
                              !b && f.we ? f.we = !1 : f.status = "loading"
                          }
                  }
                  var l = this;
                  this.VH(a, function(a) {
                      for (var c = a.length - 1; 0 <= c; c -= 1) {
                          var d = a[c];
                          if (d.length)
                              if (l.pi) {
                                  if (l.e.wz)
                                      break;
                                  var e = d[0].ra.z;
                                  l.Bv(d, l.mj ? 1 : 0);
                                  for (var f = 0, h = 0; f < d.length; )
                                      l.ZR(d.slice(50 * h, 50 * h + 50), e, b),
                                      f += 50,
                                      h += 1
                              } else
                                  for (e = function() {
                                      var a = d.length;
                                      return function() {
                                          if (0 === --a) {
                                              var b = {
                                                  key: "rb",
                                                  index: 0,
                                                  id: l.e.D.id
                                              };
                                              l.h.U.ak || (g.oe.Ze.end(b),
                                              g.oe.Ze.end(g.extend(b, {
                                                  index: 1
                                              })))
                                          }
                                      }
                                  }(),
                                  l.Bv(d),
                                  l.Sp += d.length,
                                  f = d.length - 1; 0 <= f; f -= 1)
                                      l.kh(d[f], l.Xl, e)
                      }
                  })
              }
      },
      ly: function(a, b) {
          var c = this.ta.get(a + "");
          c || b || (c = new g.ob(a.jb()));
          return c
      },
      gK: function(a, b) {
          return this.zd * Math.pow(2, a - b)
      },
      uA: function(a) {
          a.Zr && this.Xl.k1(a.Zr);
          a.TJ = !1;
          a.loaded = !1;
          this.Of && this.Of(a)
      },
      Kx: function(a, b) {
          var c = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0) || this.bb
            , d = a.Fd.x
            , e = a.Fd.y
            , f = a.Zb.x
            , h = a.Zb.y;
          new g.H(0,0);
          var k = this.gK(20, c);
          b && (f = Math.max(b[0], f) - b[0],
          h = Math.max(b[1], h) - b[1],
          d = Math.min(b[2], d) - b[0],
          e = Math.min(b[3], e) - b[1],
          new g.H(Math.floor(b[0] / k),Math.floor(b[1] / k)));
          d /= k;
          e /= k;
          d = {
              Hc: 0 === d % 1 ? d - 1 : Math.floor(d),
              vc: 0 === e % 1 ? e - 1 : Math.floor(e),
              Jc: Math.floor(f / k),
              fc: Math.floor(h / k)
          };
          d.FD = d.Hc - d.Jc + 1;
          d.FJ = d.vc - d.fc + 1;
          d.z = c;
          d.S = this.S * Math.pow(2, this.zoom - c);
          d.oy = Math.ceil(d.FD / 2);
          return d
      },
      Ou: function(a, b, c) {
          return b < a.Jc || b > a.Hc || c < a.fc || c > a.vc ? !1 : !0
      },
      Bv: function(a, b) {
          if (a.length) {
              var c = this.nb.dd(this.zd << 20 - a[0].ra.z)
                , d = Math.floor(c.x)
                , e = Math.floor(c.y);
              a.sort(function(a, c) {
                  var k = a.ra
                    , l = c.ra
                    , m = k.x - d
                    , k = k.y - e
                    , n = l.x - d
                    , l = l.y - e;
                  return (b ? -1 : 1) * (n * n + l * l - (m * m + k * k))
              })
          }
      },
      clear: function() {
          this.Xl.clear()
      },
      Ho: function(a, b) {
          this.ig = !1;
          this.clear();
          this.Mi = b.Mi;
          this.Li = b.Li;
          this.zd = b.zd;
          var c = a.R;
          this.yf = b.yf || a.R.yf;
          this.eh = c.eh;
          this.size = a.size;
          this.rotation = c.rotation;
          this.nb = c.nb;
          this.Ga = a.R.Ga;
          this.Ff = a.Ff;
          this.Ye = a.Ye;
          this.Mg = a.Mg;
          this.zoom = c.zoom;
          this.ze = c.ze;
          this.bb = !1 === this.pi && !this.h.sR && this.h.ia ? this.ze + 1 : this.ze;
          this.Ve && this.bb > this.Ve && (this.bb = this.Ve);
          this.Ao && this.bb < this.Ao && (this.bb = this.Ao);
          this.S = c.S;
          this.sg = c.sg;
          c = a.R.Ga;
          this.Yj = this.Kx(c, b.I);
          this.aw = c.s9 ? this.Kx(c.s9, b.I) : null;
          var c = this.Yj, d = this.Ga.g8, e = null, e = d < this.zoom && this.aw ? this.aw : c, f = [], h = [], k, l = [], m = [], n = [], p = new g.Gq(0,0,0), q, r = this.zoom, m = this.sl || "", s = {}, u = {}, v, x, t, w, y, E;
          this.Xd = 1E6 * Math.random() << 0;
          for (q = m.length - 1; 0 <= q; q -= 1)
              if (k = m[q],
              !(k.Ew < b.opacity))
                  if (p.z = k.ra.z,
                  p.x = k.ra.x,
                  p.y = k.ra.y,
                  p.z === this.bb)
                      s[p + ""] |= 16;
                  else if (p.z < this.bb) {
                      if (s[p + ""] |= 64,
                      this.Mi)
                          for (w = this.bb - p.z,
                          v = Math.max(c.Jc, p.x << w),
                          r = Math.min(c.Hc, (p.x + 1 << w) - 1),
                          x = Math.max(c.fc, p.y << w),
                          t = Math.min(c.vc, (p.y + 1 << w) - 1),
                          p.z = this.bb,
                          w = v; w <= r; w += 1)
                              for (p.x = w,
                              y = x; y <= t; y += 1)
                                  p.y = y,
                                  E = p + "",
                                  s[E] |= 32,
                                  u[E] = u[E] ? Math.max(k.ra.z, u[E]) : k.ra.z
                  } else if (this.Li)
                      for (v = 1; p.z >= this.bb; ) {
                          s[p + ""] |= v;
                          v = p.x >> 1;
                          x = p.y >> 1;
                          r = v << 1;
                          t = x << 1;
                          k = 0;
                          for (w = 2; 0 < w; w -= 1)
                              for (p.x = r + w,
                              y = 2; 0 < y; y -= 1)
                                  p.y = t + y,
                                  s[p + ""] & 5 && (k += 1);
                          p.z -= 1;
                          p.x = v;
                          p.y = x;
                          v = 4 === k ? 4 : 2
                      }
          m = [];
          p.z = this.bb;
          q = !0;
          this.ta.w1();
          for (w = e.Jc; w <= e.Hc; w += 1)
              for (p.x = w,
              y = e.fc; y <= e.vc; y += 1)
                  p.y = y,
                  k = this.ly(p),
                  this.yt(k),
                  v = !1,
                  k.wa ? (k.Xd = this.Xd,
                  this.Ou(c, w, y) && (m.push(k),
                  this.rk && (k.ad !== this.ad || 1 > k.Ew) && (v = !0))) : (q = !1,
                  this.Ou(c, w, y) && (v = !0),
                  k.status && !k.we || this.ze !== d || this.aw && !this.Ou(this.aw, w, y) || l.push(k)),
                  v && n.push(k);
          q ? (this.xC || (this.xC = !0),
          this.h.Ja || (k = {
              key: this.h.Jg ? "rl" : "rb",
              index: 1,
              id: this.e.D.id
          },
          this.h.U.ak || (g.oe.Ze.end(k),
          g.oe.Ze.push({
              key: "ftc",
              rf: m.length,
              id: this.e.D.id
          })))) : this.h.Ja = !1;
          this.ig = q;
          m.length && this.xC && (f.push(m),
          m.ig = q);
          h.push(l);
          d = !1;
          if (this.Li) {
              n = n.slice(0);
              e = [];
              for (q = n.length - 1; 0 <= q; q -= 1)
                  k = n[q],
                  s[k.key] & 4 || e.push(k);
              k = b.lb[1];
              for (r = this.bb + 1; n.length && r <= k; r += 1) {
                  m = [];
                  l = n;
                  n = [];
                  p.z = r;
                  for (q = l.length - 1; 0 <= q; q -= 1)
                      if (w = l[q],
                      v = s[w.key],
                      v & 7)
                          for (v = w.ra.x << 1,
                          x = w.ra.y << 1,
                          w = 1; 0 <= w; w -= 1)
                              for (p.x = v + w,
                              y = 1; 0 <= y; y -= 1)
                                  p.y = x + y,
                                  E = p + "",
                                  t = this.ta.yJ(E),
                                  s[E] & 5 && t && t.wa ? (t.$A = !0,
                                  t.Xd = this.Xd,
                                  m.push(t),
                                  this.yt(t)) : n.push(new g.ob(p.jb()));
                  m.length && (d = !0,
                  f.push(m))
              }
              n = e
          }
          if (!d && this.Mi)
              for (w = !f.length || this.mj ? b.lb[0] : Math.max(b.lb[0], this.bb - 2),
              Math.max(w, this.bb - this.Cfa),
              r = this.bb - 1; n.length && r >= w; r -= 1) {
                  m = [];
                  y = {};
                  l = n;
                  n = [];
                  for (q = l.length - 1; 0 <= q; q -= 1)
                      k = l[q],
                      p.z = r,
                      p.x = k.ra.x >> 1,
                      p.y = k.ra.y >> 1,
                      k = this.ly(p),
                      y[k.key] || (y[k.key] = 1,
                      v = !1,
                      k.wa && (!this.Eha || s[k.key] & 64) ? (p.x = Math.min(c.Hc, Math.max(c.Jc, p.x << this.bb - r)),
                      p.y = Math.min(c.vc, Math.max(c.fc, p.y << this.bb - r)),
                      p.z = this.bb,
                      E = p + "",
                      "number" === typeof u[E] && k.ra.z > u[E] ? v = !0 : k.$A = !0,
                      k.Xd = this.Xd,
                      m.push(k),
                      this.yt(k)) : v = !0,
                      v && n.push(k));
                  m.length && f.push(m)
              }
          this.fU = h;
          this.$u = this.Sp = 0;
          this.kn(h);
          this.Tg = f;
          this.h.set("tiles", f);
          this.nv(a, b)
      },
      yt: function(a) {
          this.ta.d5(a.DDa)
      },
      PQ: function(a, b) {
          for (var c = [], d = this.e.D.getCoordsBoundByZoom(a), d = this.Kx(d, b, a), e = d.Jc; e < d.Hc; e++)
              for (var f = d.fc; f < d.vc; f++) {
                  var h = [a, e, f].join("/");
                  this.ta.Wc(h) || c.push(new g.ob(new g.Gq(a,e,f),!0))
              }
          return c
      },
      QL: function() {
          var a = this.e.D;
          return a.z6 && a.get("preloadMode") && 200 <= this.ta.gp && this.h.U.Su() && "stable" != this.Ff && this.ux && this.ux() && this.zoom !== this.bb
      },
      nv: function(a, b) {
          var c = b.I
            , d = b.lb;
          if (this.QL() && this.bb >= d[0] + 1) {
              var d = []
                , e = null
                , e = "zoomOut" === this.Ff ? Math.floor(this.zoom) : Math.ceil(this.zoom)
                , e = this.PQ(e, c);
              e.length && d.push(e);
              d.length && this.kn(d, !0)
          }
      }
  });
  g.N.Vd.Gi = g.N.Gi.extend({
      r: function(a, b) {
          arguments.callee.ka.apply(this, arguments);
          this.Cn = 120;
          this.pi = !1;
          this.Gg();
          this.Ve = a.Ve;
          this.Ao = a.Ao
      },
      hj: function() {
          return this.Lb
      },
      Gg: function() {
          this.Lb = document.createElement("div");
          this.Lb.className = this.h.U.get("className") || "amap-layer";
          this.xu = document.createDocumentFragment()
      },
      sv: function(a) {
          var b = Math.pow(2, a.R.zoom - this.nf)
            , c = a.R.nb.$a(this.as).dd(this.cm);
          this.transform = {
              translate: this.transform.translate.add(c),
              scale: b,
              rotate: 0
          };
          this.nb = a.R.nb
      },
      RO: function(a, b) {
          this.Ka = this.J.Ka;
          this.nf = this.ze;
          this.cm = this.sg;
          this.he = !1;
          this.currentTime = +new Date;
          this.GU = b.GU;
          var c = this.Yj;
          this.rk = this.Cn && b.lH;
          var d = this.Tg
            , e = 256 * c.FD
            , c = 256 * c.FJ;
          this.Ye = this.zoom << 0 !== this.zoom;
          var f = this.nb.$a(this.Ka);
          f.x < -g.a.Ca / 2 ? f.x += g.a.Ca : f.x > g.a.Ca / 2 && (f.x -= g.a.Ca);
          this.fP = f.dd(this.sg);
          return [d, e, c, b]
      },
      $y: function(a, b) {
          var c = this.RO(a, b);
          this.zs.apply(this, c);
          this.De(a);
          this.ig && !this.h.Ja && (c = this.h,
          c.U.ak || g.oe.Ze.end({
              key: "rb",
              index: 2,
              id: this.e.D.id
          }),
          c.Ja = !0,
          c.Dd ? c.na("renderComplete") : (c.Dd = !0,
          c.na("complete")))
      },
      kc: function(a, b) {
          this.Zs = a.Zs;
          this.Mg = a.Mg;
          this.Ho(a, b);
          this.as && g.l.El && (a.Ye || a.Mg) ? this.sv(a, b) : this.$y(a, b);
          this.as = this.nb;
          this.he && this.set("display", 0)
      },
      rv: function() {
          for (var a = this.Lb.childNodes, b = a.length - 1; 0 <= b; b -= 1)
              a[b] && a[b].ad !== this.ad && this.Lb.removeChild(a[b])
      },
      ED: function(a, b) {
          return a.fc === b.fc && a.Jc === b.Jc && a.vc === b.vc && a.Hc === b.Hc
      },
      zs: function(a) {
          var b = this.ad;
          this.ad += 1;
          var c = !1, d, e, f;
          e = !1;
          var h = [], k, l;
          for (d = a.length - 1; 0 <= d; d -= 1)
              if (f = a[d],
              f.length) {
                  e = f[0].ra.z;
                  var m, n, p = this.gK(this.ze, e), q = !1;
                  this.en && f.ig && f[0].ra.z == this.bb && (k = [],
                  l = [],
                  q = !0);
                  for (var r = f.length - 1; 0 <= r; r -= 1) {
                      n = f[r];
                      q && n.ha && (k.push.apply(k, n.ha),
                      l.push(n.ra + ""));
                      this.pT(n);
                      if (this.Ka === n.Ka && n.nf === this.nf) {
                          var s = n.ff;
                          if (s && s.parentNode === this.Lb && 1 === n.Ew) {
                              h.push(n);
                              s.ad = this.ad;
                              n.ad = this.ad;
                              continue
                          }
                      }
                      n.Ka = this.Ka;
                      n.nf = this.nf;
                      m = n.ra;
                      var c = !0
                        , u = (new g.H((m.x << 20 - e) * this.zd,(m.y << 20 - e) * this.zd)).$a(this.Ka)
                        , u = u.dd(this.sg);
                      u.x = g.a.nc(u.x, 1);
                      u.y = g.a.nc(u.y, 1);
                      var v = 1;
                      if (!n.iX || this.lW && n.ad !== b)
                          n.iX = this.currentTime;
                      this.rk && !n.$A ? (s = Math.max(0, Math.abs(m.z - this.zoom) - 1),
                      v = Math.min(1, (this.currentTime - n.iX) / (1 / Math.pow(1.32, s) * this.Cn)),
                      1 !== v && (this.he = !0)) : n.$A = !1;
                      n.ad = this.ad;
                      n.Ew = v;
                      n.wa ? (s = n.ff,
                      !s && n.Sb && n.Sb.ff && (s = n.Sb.ff),
                      0 !== v && s && (this.V2(s, u.x, u.y, p, p, v, m.z),
                      s.parentNode !== this.Lb && (g.l.mi && "overlayer" === this.h.get("type") && (s.style.display = "none"),
                      this.xu.appendChild(s)),
                      s.ad = this.ad,
                      n.ze = this.ze,
                      h.push(n))) : n.Xd = null
                  }
                  e = !0
              }
          this.en && k && (r = l.sort().join(";"),
          k.NR = r,
          r !== this.Qf.NR && (this.Qf = k));
          1 < a.length && (this.he = !0);
          this.sl = h;
          this.rv();
          this.Lb.appendChild(this.xu);
          return c || !e
      },
      pT: function() {},
      De: function() {
          this.transform = {
              translate: this.fP,
              scale: Math.pow(2, this.zoom - this.ze),
              rotate: 0
          }
      }
  });
  window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.FP = function(a, b, c, d, e) {
      "undefined" === typeof e && (e = [10, 10]);
      this.moveTo(a, b);
      var f = c - a
        , h = d - b
        , k = Math.floor(Math.sqrt(f * f + h * h));
      d = f / k;
      c = h / k;
      e.qg = 0;
      for (var l = [], f = this.CH, m = 0, n = 0, p = !1, q = h = 0; q < e.length; q += 1)
          e.qg += e[q],
          l[q] = {
              tC: e[q] * d,
              uC: e[q] * c,
              zy: h += e[q]
          },
          f -= e[q],
          0 > f && !p && (m = q,
          n = -f,
          p = !0);
      for (p = 0; n + p <= k; )
          n < e[m] ? (f = n * d,
          h = n * c) : (f = l[m].tC,
          h = l[m].uC),
          a += f,
          b += h,
          this.WD ? this.moveTo(a, b) : this.lineTo(a, b),
          p += n,
          this.WD = !this.WD,
          n = e[(m + 1) % e.length],
          m = (m + 1) % e.length;
      k -= p;
      a += k * d;
      b += k * c;
      this.WD ? this.moveTo(a, b) : this.lineTo(a, b);
      this.CH = (this.CH + p + k) % e.qg
  }
  ,
  window.CanvasRenderingContext2D.prototype.Tma = function(a, b, c, d) {
      "undefined" === typeof d && (d = [10, 10]);
      var e = 2 * Math.PI * c
        , f = 0 >= d ? e : Math.round(e / (d[0] + d[1]))
        , h = (d[0] + d[1]) / e * 2 * Math.PI;
      d = d[0] / e * 2 * Math.PI;
      for (e = 0; e < f; e += 1)
          this.beginPath(),
          this.arc(a, b, c, e * h, e * h + d),
          this.stroke()
  }
  );
  g.N.ye.ol = g.N.Gi.extend({
      r: function(a, b) {
          arguments.callee.ka.apply(this, arguments);
          this.Gg()
      },
      TQ: function() {
          return this.Xa.XT
      },
      hj: function() {
          return this.Lb
      },
      Gg: function() {
          this.Lb = document.createElement("div");
          this.Lb.className = "amap-markers";
          this.Xa = new g.N.ye.$c(this.Lb);
          this.Xa.h = this.h;
          this.J.K.appendChild(this.Lb)
      },
      Ss: function(a, b) {
          this.xu = b.xu;
          this.By = b;
          this.yf = a.R.yf;
          this.S = a.R.S;
          this.zoom = a.R.zoom;
          this.size = a.size;
          this.Ga = a.R.Ga;
          this.Vp = a.S;
          this.ib = a.R.nb;
          this.eh = a.R.eh;
          var c = !1;
          if (!this.Ka || 500 < Math.abs(this.ib.x - this.Ka.x) / this.S || 500 < Math.abs(this.ib.y - this.Ka.y) / this.S)
              c = !0;
          if (c || this.zoom << 0 !== this.zoom || this.nf !== this.zoom)
              this.Ka = this.ib,
              this.nf = this.zoom
      },
      Gu: function(a) {
          var b = a.R.Ga.tc.y * this.S;
          a = a.R.Ga.tc.x * this.S;
          return [this.ib.x - a, this.ib.y - b, this.ib.x + a, this.ib.y + b]
      },
      rv: function() {
          if (this.Ih && this.Ih)
              for (var a in this.Ih)
                  if (this.Ih.hasOwnProperty(a)) {
                      var b = this.Ih[a];
                      b.Xd !== this.Xd && b.ba && this.J.ul.appendChild(b.ba)
                  }
      },
      kc: function(a, b) {
          this.Xd = 1E6 * Math.random() << 0;
          this.Ss(a, b);
          this.R = a.R;
          this.size = a.size;
          var c = this.h;
          this.zd = 256;
          var d, e;
          e = this.Gu(a);
          var f = 0;
          c.Tl && (f = 50 * this.S);
          e[0] -= this.h.mf * this.S + f;
          e[1] -= this.h.Yf * this.S + f;
          e[2] += this.h.mf * this.S + f;
          e[3] += this.h.Yf * this.S + f;
          c = c.$m(e);
          for (d in c)
              c.hasOwnProperty(d) && (c[d].Xd = this.Xd,
              c[d].P4 = this);
          this.rv(c);
          this.Ss.call(this.Xa, a, b);
          this.Xa.LD(c);
          this.Ih = c;
          this.De(a)
      },
      De: function() {
          var a = Math.pow(2, this.zoom - this.ze);
          this.transform = {
              translate: this.Ka.$a(this.ib).dd(this.S),
              scale: a,
              rotate: 0
          }
      }
  });
  g.N.ye.$c = g.aa.extend({
      r: function(a) {
          this.Xk = a
      },
      LD: function(a, b) {
          var c = document.createDocumentFragment(), d = b && b.ER ? null : {}, e = !0, f;
          for (f in a)
              if (a.hasOwnProperty(f)) {
                  var h = a[f], k, l = h.get("params");
                  if (h.ba)
                      k = h.ba;
                  else {
                      k = g.j.create("div");
                      k.className = "amap-marker";
                      var m = l.Cg
                        , n = l.E7
                        , p = l.SI;
                      m && k.appendChild(m);
                      n && k.appendChild(n);
                      p && !1 !== m.CL && k.appendChild(p);
                      h.ba = k;
                      h.Cg = m;
                      if (n = l.title)
                          m.title = n;
                      this.h.Tl = !0;
                      -1 === g.a.indexOf(this.h.Ng, h) && this.h.Ng.push(h);
                      h.Se = !0
                  }
                  var p = l.offset, q = p.x, r = p.y, s = l.textAlign, u = l.verticalAlign, n = l.anchor, m = !1, v, x;
                  n && (n = n.split("-"),
                  2 === n.length ? (s = n[1],
                  u = n[0]) : 1 === n.length && "center" === n[0] && (s = "center",
                  u = "middle"));
                  var t, n = t = 0;
                  if ("AMap.Text" == h.rp || "AMap.Marker" == h.rp) {
                      if (x = v = 0,
                      k.parentNode !== this.Xk && d && (m = !0,
                      d[f] = h,
                      e = !1),
                      !m) {
                          h.Se || !h.Hj ? (t = g.j.jo(h.Cg),
                          h.Hj = t) : t = h.Hj;
                          n = t[0];
                          t = t[1];
                          switch (s) {
                          case "center":
                              v = n / 2;
                              break;
                          case "right":
                              v = n
                          }
                          switch (u) {
                          case "middle":
                              x = t / 2;
                              break;
                          case "bottom":
                              x = t
                          }
                          q -= v;
                          r -= x
                      }
                  } else
                      v = -q,
                      x = -r;
                  var w, y;
                  if (!m)
                      if (h.Se) {
                          var E = [];
                          w = this.gu(h.da.va);
                          h.Ka = this.Ka;
                          y = l.AE;
                          r = Math.round(w[1] + r + y.y);
                          q = Math.round(w[0] + q + y.x);
                          E.push("top:" + r + "px");
                          E.push("left:" + q + "px");
                          E.push("z-index:" + (l.B4 ? this.h.vq + 10 : l.zIndex));
                          if (!g.l.ue) {
                              r = v;
                              q = x;
                              if ("AMap.Marker" == h.rp) {
                                  r = -p.x;
                                  q = -p.y;
                                  switch (s) {
                                  case "center":
                                      r = -p.x + n / 2;
                                      q = -p.y + t / 2;
                                      break;
                                  case "right":
                                      r = -p.x + n
                                  }
                                  switch (u) {
                                  case "middle":
                                      q = -p.y + t / 2;
                                      break;
                                  case "bottom":
                                      q = -p.y + t
                                  }
                              }
                              E.push(g.j.m3(k, l.pp, {
                                  x: r,
                                  y: q
                              }))
                          }
                          E.push("display:" + (l.visible ? "block" : "none") + ";");
                          k.style.cssText = E.join(";");
                          if ((p = l.label) && p.content) {
                              l = l.SI;
                              s = p.direction;
                              r = null;
                              h.Xu || (r = g.j.jo(l),
                              h.Xu = r);
                              u = (r = h.Xu) && r[0];
                              x = r && r[1];
                              q = r = 0;
                              if (s && u && x)
                                  switch (s) {
                                  case "top":
                                      r = -x;
                                      q = (n - u) / 2;
                                      break;
                                  case "right":
                                      r = (t - x) / 2;
                                      q = n;
                                      break;
                                  case "bottom":
                                      r = t;
                                      q = (n - u) / 2;
                                      break;
                                  case "left":
                                      r = (t - x) / 2;
                                      q = -u;
                                      break;
                                  case "center":
                                      r = (t - x) / 2,
                                      q = (n - u) / 2
                                  }
                              p.offset ? (r = r + p.offset.y + "px",
                              q = q + p.offset.x + "px") : (r += "px",
                              q += "px");
                              l.style.top = r;
                              l.style.left = q
                          }
                      } else if (h.F$ || this.zoom << 0 !== this.zoom || h.zoom !== this.zoom || k.parentNode !== this.Xk || h.Ka !== this.Ka)
                          w = this.gu(h.da.va),
                          h.Ka = this.Ka,
                          y = l.AE,
                          r = Math.round(w[1] + r + y.y),
                          q = Math.round(w[0] + q + y.x),
                          k.style.top = r + "px",
                          k.style.left = q + "px";
                  h.zoom = this.zoom;
                  k.parentNode !== this.Xk && (g.l.mi && g.a.iepngFix(k),
                  c.appendChild(k));
                  h.Se = m;
                  k.dB = this.Xk
              }
          this.Xk.appendChild(c);
          e || this.LD(d, {
              ER: !0
          })
      },
      gu: function(a) {
          var b = a[0] - this.Ka.x;
          b > g.a.Ca / 2 ? b -= g.a.Ca : b < -g.a.Ca / 2 && (b += g.a.Ca);
          return [b / this.S, (a[1] - this.Ka.y) / this.S]
      }
  });
  var Kc = g.A
    , Sc = g.l
    , ec = g.aa.nu
    , Tc = g.Wta
    , fa = document
    , Uc = !0
    , Vc = [];
  Sc.Cf && Vc.push("touch");
  Sc.Z || Vc.push("mouse");
  Sc.jK && (Vc.push("vectorlayer", "overlay"),
  Sc.rq ? Vc.push("wgl") : Vc.push("cgl"));
  if (Tc) {
      for (var Wc = [], Xc = Tc.split(","), xc = 0; xc < Xc.length; xc += 1) {
          var Yc = Xc[xc];
          ec[Yc] && Wc.push.apply(Wc, ec[Yc]);
          Wc.push(Yc)
      }
      Vc = Vc.concat(Wc)
  }
  Vc.push("sync");
  if (Sc.es) {
      var Zc = !0
        , $c = []
        , ad = [];
      try {
          for (var xc = 0, bd = Vc.length; xc < bd; xc++) {
              var cd = JSON.parse(localStorage.getItem("_AMap_" + Vc[xc]));
              if (cd && cd.version === Kc.uj)
                  $c.push(cd.script),
                  cd.css && ad.push(cd.css);
              else {
                  $c = void 0;
                  Zc = !1;
                  break
              }
          }
      } catch (dd) {
          $c = ad = void 0,
          Zc = !1
      }
      if (Zc)
          try {
              ad.length && ed();
              var fd = $c.join(";");
              eval(fd)
          } catch (gd) {
              Uc = !1
          }
      else
          Uc = !1
  } else
      Uc = !1;
  if (Uc)
      for (xc = 0; xc < Vc.length; xc += 1)
          g.qb.hC(Vc[xc]).status = 1;
  else
      Kc.aD = !1,
      hd();
  function id() {
      for (var a = fa.getElementsByTagName("script"), b, c = 0; c < a.length; c += 1)
          if (0 === a[c].src.indexOf(Kc.yb + "/maps?")) {
              b = a[c];
              break
          }
      return Kc.Gc || b && b.async
  }
  function hd() {
      var a = Kc.yb + "/maps/modules?v=" + Kc.gr + "&key=" + Kc.key + "&vrs=" + Kc.uj + "&m=" + Vc.join(",");
      id() ? jd(a) : (fa.write('<script crossorigin="anonymous" id="amap_plus_js" src="' + a + '" type="text/javascript">\x3c/script>'),
      setTimeout(function() {
          fa.getElementById("amap_plus_js") || jd(a)
      }, 1))
  }
  function jd(a) {
      var b = fa.createElement("script");
      b.charset = "utf-8";
      b.src = a;
      b.id = "amap_plus_js";
      (a = fa.head || fa.getElementsByTagName("head")[0] || fa.body) && a.appendChild(b)
  }
  function ed() {
      var a = ad.join("\n")
        , b = fa.createElement("style");
      b.type = "text/css";
      -1 === Kc.yb.indexOf("webapi.amap.com") && (a = a.replace(/webapi.amap.com/gi, Kc.yb.split("://")[1]));
      "https" === Kc.Cc && (a = a.replace(/http:/gi, "https:"));
      if (b.styleSheet) {
          var c = function() {
              try {
                  b.styleSheet.cssText = a
              } catch (c) {}
          };
          b.styleSheet.disabled ? setTimeout(c, 10) : c()
      } else
          b.appendChild(fa.createTextNode(a));
      c = fa.head || fa.getElementsByTagName("head")[0];
      2 > c.childNodes.length ? c.appendChild(b) : c.insertBefore(b, c.childNodes[1])
  }
  ;
}
)(["24e27b17847a56fc66cfc5ee32c03219", [118.344933, 29.188757, 120.721945, 30.566516, 120.153576, 30.287459], "https://webapi.amap.com", 1, "1.4.14", null, "330100", "AMap.ControlBar", true, true, true, true, "1557231539-1"])
