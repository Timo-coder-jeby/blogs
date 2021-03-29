export default {
  data:[
    {
      name:'CSS',
      id:0,
      checked:true,
      data:[
        {
          title:'Less使用calc公式',
          checked:true,
          content:[
            {
              type:'code',
              show_type: 'css',
              text:'width: calc(~"100% - 50px");(注意需要使用“~”)'
            }
          ]
        },
        {
          title:'解决弹窗页面滑动问题',
          checked:false,
          content:[
            {
              type:'html',
              text:'在index.html中'
            },
            {
              type:'code',
              show_type:'js',
              text:'<script type="text/javascript">\n' +
                '\t\t    //解决遮罩层滚动穿透问题，分别在遮罩层弹出后和关闭前调用\n' +
                '\t\t    const ModalHelper = ( (bodyCls) =>{\n' +
                '\t\t        let scrollTop;\n' +
                '\t\t        return {\n' +
                '\t\t            afterOpen: function () {\n' +
                '\t\t                scrollTop = document.scrollingElement.scrollTop;\n' +
                '\t\t                document.body.classList.add(bodyCls);\n' +
                '\t\t                document.body.style.top = -scrollTop + \'px\';\n' +
                '\t\t            },\n' +
                '\t\t            beforeClose: function () {\n' +
                '\t\t                document.body.classList.remove(bodyCls);\n' +
                '\t\t                // scrollTop lost after set position:fixed, restore it back.\n' +
                '\t\t                document.scrollingElement.scrollTop = scrollTop;\n' +
                '\t\t            }\n' +
                '\t\t        };\n' +
                '\t\t    })(\'dialog-open\');\n' +
                '\t\t</script>\n'
            },
            {
              type:'html',
              text:'在全局css中'
            },
            {
              type:'code',
              show_type:'js',
              text:'tbody.dialog-open {\n' +
                '\t\t    position: fixed;\n' +
                '\t\t    width: 100%;\n' +
                '     }'
            },
            {
              type:'html',
              text:'对话框弹出后调用'
            },
            {
              type:'code',
              show_type: 'js',
              text:'ModalHelper.afterOpen();'
            },
            {
              type:'html',
              text:'对话框弹关闭后调用'
            },
            {
              type:'code',
              show_type: 'js',
              text:'ModalHelper.beforeClose();'
            },
          ]
        },
        {
          title:'移动端完美适配方案',
          checked: false,
          content: [
            {
              type:'href',
              text: 'https://www.jianshu.com/p/7aa4250c9293'
            }
          ]

        },
        {
          title:'移动端ios滑动卡顿',
          checked: false,
          content: [
            {
              type:'code',
              show_type: 'css',
              text: '-webkit-overflow-scrolling: touch;'
            }
          ]

        },
        {
          title:'超出一行显示...',
          checked: false,
          content: [
            {
              type:'code',
              show_type: 'css',
              text: '\t\toverflow:hidden; /*超出的部分隐藏起来。*/\n' +
                '\t\t\twhite-space:nowrap;/*不显示的地方用省略号...代替*/ \n' +
                '\t\t\ttext-overflow:ellipsis;'
            }
          ]

        },
        {
          title:'超出n行显示...',
          checked: false,
          content: [
            {
              type:'code',
              show_type: 'css',
              text: '\t\toverflow: hidden;\n' +
                '\t\t\ttext-overflow: ellipsis; \n' +
                '\t\t\tdisplay: -webkit-box; \n' +
                '\t\t\t-webkit-line-clamp: [n]; \n' +
                '\t\t\t-webkit-box-orient: vertical;'
            }
          ]

        },
        {
          title:'三角形设置阴影',
          checked: false,
          content: [
            {
              type:'code',
              show_type: 'css',
              text: 'filter:drop-shadow(0 2px 2px #D4D4D4)'
            }
          ]
        },
        {
          title:'vue-transition动画',
          checked: false,
          content: [
            {
              type:'code',
              show_type: 'css',
              text: '\t\tenter-active-class="animated slideInRight"\n' +
                '\t\t\tleave-active-class="animated slideOutRight"\n'
            },
            {
              type:'html',
              text: '需要在transitions上加name="bounce"属性'
            },
            {
              type:'code',
              show_type: 'css',
              text: '\t\t.bounce-enter-active\n' +
                '\t\t\t\ttanimation:bounceInLeft.5s;\n' +
                '\t\t\t.bounce-leave-active\n' +
                '\t\t\t\tanimation:bounceOutLeft.5s;'
            },
          ]
        },
        {
          title:'图片黑白效果',
          checked: false,
          content: [
            {
              type:'code',
              show_type: 'css',
              text: '\t\t.gray {\n' +
                '\t\t\t\t-webkit-filter: grayscale(100%);\n' +
                '\t\t\t\t-moz-filter: grayscale(100%);\n' +
                '\t\t\t\t-ms-filter: grayscale(100%);\n' +
                '\t\t\t\t-o-filter: grayscale(100%);\n' +
                '\t\t\t\tfilter: grayscale(100%);\n' +
                '\t\t\t\tfilter: gray;\n' +
                '\t\t\t}'
            }
          ]
        },
        {
          title:'苹方字体',
          checked: false,
          content: [
            {
              type:'html',
              text: '苹方-简 常规体'
            },
            {
              type:'code',
              show_type: 'css',
              text: 'font-family: PingFangSC-Regular, sans-serif;'
            },
            {
              type:'html',
              text: '苹方-简 极细体'
            },
            {
              type:'code',
              show_type: 'css',
              text: 'font-family: PingFangSC-Ultralight, sans-serif;'
            },
            {
              type:'html',
              text: '苹方-简 细体'
            },
            {
              type:'code',
              show_type: 'css',
              text: 'font-family: PingFangSC-Light, sans-serif;'
            },
            {
              type:'html',
              text: '苹方-简 纤细体'
            },
            {
              type:'code',
              show_type: 'css',
              text: 'font-family: PingFangSC-Thin, sans-serif;'
            },
            {
              type:'html',
              text: '苹方-简 中黑体'
            },
            {
              type:'code',
              show_type: 'css',
              text: 'font-family: PingFangSC-Medium, sans-serif;'
            },
            {
              type:'html',
              text: '苹方-简 中粗体'
            },
            {
              type:'code',
              show_type: 'css',
              text: 'font-family: PingFangSC-Semibold, sans-serif;'
            },
          ]
        },
        {
          title:'英文不拆分单词换行',
          checked: false,
          content: [
            {
              type:'code',
              show_type: 'css',
              text: '\t\tword-wrap: break-word;\n' +
                '\t\t\tword-break: normal;'
            }
          ]
        },
        {
          title:'各种移动端设备独立像素',
          checked: false,
          content: [
            {
              type:'href',
              text: 'https://www.mydevice.io/#compare-devices'
            }
          ]
        },
        {
          title:'各种机型媒体查询条件',
          checked: false,
          content: [
            {
              type:'code',
              show_type: 'css',
              text: '\t\t@media screen and (max-device-width: 1025px) {}\n' +
                '\t\t\t//总体 \n' +
                '\t\t\t@media screen and (min-device-width: 1026px) {}\n' +
                '\t\t\t//5 \n' +
                '\t\t\t@media screen and (min-device-width: 300px) and (max-device-width: 373px) {}\n' +
                '\t\t\t//6 \n' +
                '\t\t\t@media screen and (min-device-width: 374px) and (max-device-width: 412px) {}\n' +
                '\t\t\t//plus \n' +
                '\t\t\t@media screen and (min-device-width:413px) and (max-device-width: 767px) {}\n' +
                '\t\t\t//ipad \n' +
                '\t\t\t@media screen and (min-device-width:768px) and (max-device-width: 1025px) {}\n' +
                '\t\t\t//1280×1366 \n' +
                '\t\t\t@media screen and (min-device-width: 1026px) and (max-device-width: 1367px) {}\n' +
                '\t\t\t//1920  \n' +
                '\t\t\t@media screen and (min-device-width: 1368px) and (max-device-width: 1440px) {}\n' +
                '\t\t\t/**/\n' +
                '\t\t\t@media screen and (min-device-width: 1441px) {}'
            }
          ]
        },
        {
          title:'修改系统滚动条样式',
          checked: false,
          content: [
            {
              type:'code',
              show_type: 'css',
              text: '/*修改滚动条样式*/\n' +
                '\t\tdiv::-webkit-scrollbar{\n' +
                '\t\t\twidth:10px;\n' +
                '\t\t\theight:10px;\n' +
                '\t\t}\n' +
                '\t\tdiv::-webkit-scrollbar-track{\n' +
                '\t\t\tbackground: rgb(239, 239, 239);\n' +
                '\t\t\tborder-radius:2px;\n' +
                '\t\t}\n' +
                '\t\tdiv::-webkit-scrollbar-thumb{\n' +
                '\t\t\tbackground: #bfbfbf;\n' +
                '\t\t\tborder-radius:10px;\n' +
                '\t\t}\n' +
                '\t\tdiv::-webkit-scrollbar-thumb:hover{\n' +
                '\t\t\tbackground: #333;\n' +
                '\t\t}\n' +
                '\t\tdiv::-webkit-scrollbar-corner{\n' +
                '\t\t\tbackground: #179a16;\n' +
                '\t\t}'
            },
            {
              type:'html',
              text: '参数说明'
            },
            {
              type:'code',
              show_type: 'css',
              text: '\t::-webkit-scrollbar  /*滚动条整体部分*/\n' +
                '\t\t::-webkit-scrollbar-thumb    /*滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）*/\n' +
                '\t\t::-webkit-scrollbar-track    /*滚动条的轨道（里面装有Thumb）*/\n' +
                '\t\t::-webkit-scrollbar-button   /*滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。*/\n' +
                '\t\t::-webkit-scrollbar-track-piece    /*内层轨道，滚动条中间部分（除去）*/\n' +
                '\t\t::-webkit-scrollbar-corner   /*边角，即两个滚动条的交汇处*/\n' +
                '\t\t::-webkit-resizer    /*两个滚动条的交汇处上用于通过拖动调整元素大小的小控件*/'
            },
          ]
        },
      ]
    },
    {
      name:'JS',
      id:1,
      checked:false,
      data:[
        {
          title:'富文本编辑',
          checked:true,
          content:[
            {
              type:'href',
              text:'https://www.cnblogs.com/mnwd/archive/2004/01/13/13330830.html'
            }
          ]
        },
        {
          title:'时间戳常用获取方法',
          checked:false,
          content:[
            {
              type:'code',
              show_type:'js',
              text:'\tvar timestamp=(new Date()).valueOf(); //1525831530843\n' +
                '\t\tvar timestamp=(new Date()).getTime()；//1525831504961'
            }
          ]
        },
        {
          title:'数组元素互换位置',
          checked:false,
          content:[
            {
              type:'code',
              show_type:'js',
              text:'/**\n' +
                '\t\t\* \n' +
                '\t\t\* @param arr 数组\n' +
                '\t\t\* @param index1 索引1\n' +
                '\t\t\* @param index2 索引2\n' +
                '\t\t\*/\n' +
                '\t\t\export const swapArray = (arr,index1,index2) => {\n' +
                '\t\t\tarr[index1]=arr.splice(index2,1,arr[index1])[0]\n' +
                '\t\t\treturn arr\n' +
                '\t\t}\n'
            }
          ]
        },
        {
          title:'axios简单封装',
          checked:false,
          content:[
            {
              type:'code',
              show_type:'js',
              text:'\timport axios from \'axios\'\n' +
                '\t\timport qs from \'qs\'\n' +
                '\t\timport { Message } from \'element-ui\';\n' +
                '\t\tconst service = {}\n' +
                '\t\tMessage.closeAll()\n' +
                '\t\t\n' +
                '\t\tservice.get = function (url, params){\n' +
                '\t\t  return new Promise((resolve, reject) =>{\n' +
                '\t\t    axios.get(url, {\n' +
                '\t\t      params: params\n' +
                '\t\t    }).then(res => {\n' +
                '\t\t      resolve(res.data);\n' +
                '\t\t    }).catch(err =>{\n' +
                '\t\t      reject(err.data || err)\n' +
                '\t\t      Message.error(`请求出错: ${err.message || err.msg || err}`)\n' +
                '\t\t    })\n' +
                '\t\t  })\n' +
                '\t\t}\n' +
                '\t\tservice.post =  function (url, params) {\n' +
                '\t\t  return new Promise((resolve, reject) => {\n' +
                '\t\t    axios.post(url, qs.stringify(params))\n' +
                '\t\t      .then(res => {\n' +
                '\t\t        resolve(res.data);\n' +
                '\t\t      })\n' +
                '\t\t      .catch(err =>{\n' +
                '\t\t        reject(err.data || err)\n' +
                '\t\t        Message.error(`请求出错: ${err.message || err.msg || err}`)\n' +
                '\t\t      })\n' +
                '\t\t  });\n' +
                '\t\t}\n' +
                '\t\texport default service'
            }
          ]
        },
        {
          title:'debugger文件不显示',
          checked:false,
          content:[
            {
              type:'code',
              show_type:'js',
              text:'//# sourceURL=dynamicScript.js（js文件开头或者末尾加）'
            }
          ]
        },
        {
          title:'函数节流',
          checked:false,
          content:[
            {
              type:'code',
              show_type:'js',
              text:'\tfunction throttle(fn,delay=500){\n' +
                '\t\t\tLet flag=true;\n' +
                '\t\t\treturn(...args)=>{\n' +
                '\t\t\t\tif(!flag)return;\n' +
                '\t\t\t\tflag=false;\n' +
                '\t\t\t\tsetTimeout(()=>{\n' +
                '\t\t\t\t\tfn.apply(this,args);\n' +
                '\t\t\t\t\tflag=true;\n' +
                '\t\t\t\t},delay)\n' +
                '\t\t\t};\n' +
                '\t\t}\n' +
                '\t\texport default throttle'
            }
          ]
        },
        {
          title:'函数防抖',
          checked:false,
          content:[
            {
              type:'code',
              show_type:'js',
              text:'\tfunction debounce(func,delay=1000){\n' +
                '\t\t\tlet timeout;\n' +
                '\t\t\treturn function(){\n' +
                '\t\t\t\tletcontext=this;\n' +
                '\t\t\t\tletargs=arguments;\n' +
                '\t\t\t\tif(timeout)clearTimeout(timeout);\n' +
                '\t\t\t\ttimeout=setTimeout(()=>{\n' +
                '\t\t\t\t\tfunc.apply(context,args)\n' +
                '\t\t\t\t},delay);\n' +
                '\t\t\t}\n' +
                '\t\t}'
            }
          ]
        },
        {
          title:'vue自动化组件构建',
          checked:false,
          content:[
            {
              type:'code',
              show_type:'js',
              text:'\timport Vue from\'vue\'\n' +
                '\t\tconst components=require.context(\'@/components\',false,/\\.vue$/)\n' +
                '\t\tcomponents.keys().forEach(filename=>{\n' +
                '\t\t\tlet componentEntity=components(filename).default\n' +
                '\t\t\tVue.component(componentEntity.name,componentEntity)\n' +
                '\t\t})'
            }
          ]
        },
        {
          title:'获取页面滚动距离',
          checked:false,
          content:[
            {
              type:'code',
              show_type:'js',
              text:'window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop'
            }
          ]
        },
        {
          title:'判断鼠标滚轮方向',
          checked:false,
          content:[
            {
              type:'code',
              show_type:'js',
              text:'\tscrollLoad(e){\n' +
                '\t\t\tconst el=document.querySelector(\'.logList\')\n' +
                '\t\t\tlet elH=el.clientHeight\n' +
                '\t\t\tlet scrollT=parseInt(el.scrollTop)\n' +
                '\t\t\tlet scroll=scrollT-this.i;\n' +
                '\t\t\tthis.i=scrollT;\n' +
                '\t\t\tif(scroll<0){\n' +
                '\t\t\t\tconsole.log(\'up\')\n' +
                '\t\t\t}else{\n' +
                '\t\t\t\tconsole.log(\'down\')\n' +
                '\t\t\t}\n' +
                '\t\t}'
            }
          ]
        },
        {
          title:'禁止系统滚动条',
          checked:false,
          content:[
            {
              type:'html',
              text:'css版'
            },
            {
              type:'code',
              show_type:'css',
              text:'document.documentElement.style.overflowY = "hidden"'
            },
            {
              type:'html',
              text:'js版'
            },
            {
              type:'code',
              show_type:'js',
              text:'\tdocument.body.addEventListener(\'touchmove\', function (e) {\n' +
                '\t\t\te.preventDefault();\n' +
                '\t\t}, {passive: false});'
            },
          ]
        },
        {
          title:'图片转base64',
          checked:false,
          content:[
            {
              type:'html',
              text:'方法一'
            },
            {
              type:'code',
              show_type:'js',
              text:'\tfunction getBase64(imgUrl){\n' +
                '\t\t\treturn newPromise(resolve=>{\n' +
                '\t\t\t\twindow.URL=window.URL||window.webkitURL;\n' +
                '\t\t\t\tvar xhr=newXMLHttpRequest();\n' +
                '\t\t\t\txhr.open("get",imgUrl,true);\n' +
                '\t\t\t\t//至关重要\n' +
                '\t\t\t\txhr.responseType="blob";\n' +
                '\t\t\t\txhr.onload=function(){\n' +
                '\t\t\t\t\tif(this.status==200){\n' +
                '\t\t\t\t\t//得到一个blob对象\n' +
                '\t\t\t\t\tvar blob=this.response;\n' +
                '\t\t\t\t\t//至关重要\n' +
                '\t\t\t\t\tlet oFileReader=new FileReader();\n' +
                '\t\t\t\t\toFileReader.onloadend=function(e){\n' +
                '\t\t\t\t\t\tlet base64=e.target.result;\n' +
                '\t\t\t\t\t\tresolve(base64)\n' +
                '\t\t\t\t\t};\n' +
                '\t\t\t\t\toFileReader.readAsDataURL(blob);\n' +
                '\t\t\t\t\tvar img=document.createElement("img");\n' +
                '\t\t\t\t\timg.onload=function(e){\n' +
                '\t\t\t\t\t\twindow.URL.revokeObjectURL(img.src);//清除释放\n' +
                '\t\t\t\t\t};\n' +
                '\t\t\t\t\tlet src=window.URL.createObjectURL(blob);\n' +
                '\t\t\t\t\timg.src=src\n' +
                '\t\t\t\t\t}\n' +
                '\t\t\t\t}\n' +
                '\t\t\t\txhr.send();\n' +
                '\t\t\t})\n' +
                '\t\t}'
            },
            {
              type:'html',
              text:'方法二'
            },
            {
              type:'code',
              show_type:'js',
              text:'\tfunction getBase64Image(img,width,height){\n' +
                '\t\t\tvar canvas=document.createElement("canvas");\n' +
                '\t\t\tcanvas.width=width?width:img.width;\n' +
                '\t\t\tcanvas.height=height?height:img.height;\n' +
                '\t\t\tvar ctx=canvas.getContext("2d");\n' +
                '\t\t\tctx.drawImage(img,0,0,canvas.width,canvas.height);\n' +
                '\t\t\tvar dataURL=canvas.toDataURL();\n' +
                '\t\t\treturn dataURL;\n' +
                '\t\t}\n' +
                '\t\tfunction getCanvasBase64(img){\n' +
                '\t\t\tvar image=newImage();\n' +
                '\t\t\timage.crossOrigin=\'anonymous\';\n' +
                '\t\t\timage.src=img;\n' +
                '\t\t\tvar deferred=$.Deferred();\n' +
                '\t\t\tif(img){\n' +
                '\t\t\t\timage.onload=function(){\n' +
                '\t\t\t\t\tdeferred.resolve(getBase64Image(image))\n' +
                '\t\t\t\t}\n' +
                '\t\t\t\treturn deferred.promise()\n' +
                '\t\t\t}\n' +
                '\t\t}\n'
            },
          ]
        },
      ]
    },
    {
      name: '正则',
      id: 2,
      checked: false,
      data: [
        {
          title: '只能输入正数和小数点后两位',
          checked: true,
          content: [
            {
              type: 'code',
              show_type:'js',
              text: '\toninput="this.value=this.value.match(/\\d+(\\.\\d{0,2})?/)?this.value.match(/\\d+(\\.\\d{0,2})?/)[0]:\'\'"\n' +
                '\t\t/^\\d+(\\.\\d{0,2})?$/.test(\'12\')  // true\n' +
                '\t\t/^\\d+(\\.\\d{0,2})?$/.test(\'12.12\')  // true\n' +
                '\t\t/^\\d+(\\.\\d{0,2})?$/.test(\'1a.12\')  // false\n' +
                '\t\t/^\\d+(\\.\\d{0,2})?$/.test(\'12.123\')  // false'
            }
          ]
        },
      ]
    },
    {
      name: '面试总结',
      id: 2,
      checked: false,
      data: [
        {
          title: '...',
          checked: true,
          content: [
            {
              type: 'code',
              show_type:'js',
              text: '等有时间再加...'
            }
          ]
        },
      ]
    }
  ]
}
