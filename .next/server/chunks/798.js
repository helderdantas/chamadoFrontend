"use strict";
exports.id = 798;
exports.ids = [798];
exports.modules = {

/***/ 8798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Titulo.tsx

// Componente que criar o modelo de titulo
function Titulo(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "px-10 py-2 text-xl",
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "border-2 border-gray-600"
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/public/logotipoSeec.png
/* harmony default export */ const logotipoSeec = ({"src":"/_next/static/media/logotipoSeec.06cb5494.png","height":120,"width":145,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/ASOBPigP/ARPzoO+s9jW2iEKCQ7qHiEY3DVmPFT2KgSbAR99OMMCAQs8eCc69wsDH94NCAT15+vaCnDUvywg+PmFARt/QK408d8+GSSTExcUGQDu+AAA9PHZAL7gcQAF/yyLAQAA/wCUXgFwbCfNfKMyBhPC6QT8m+Pn93rhQrCG8FWDAZhsOQAb9+xnhi87hvUB2RIHBQwAFPMX7Wm/pXLfGySiAVO6OAsr2AKc6wXvCcwBFyr2/v35Rv7u4Qz8D/KDb8ZbAanQDQfq3S5Q7+4KKhAL7AH0+gUC//wQ+w8T89FFRseyOytlYFywrzIAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/Layout.tsx




// opt-out of image optimization, no-op
const customLoader = ({ src  })=>{
    return src;
};
function Layout_image(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        ...props,
        loader: customLoader
    });
}
// Componente que criar o layout da aplicacao
function Layout(props) {
    return(//configuracao do tamanho do layout w-8/9
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `
            flex flex-col w-99
            bg-gray-200
            text-gray-800 
            rounded-md
        `,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "columns-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `grid justify-items-center`,
                        children: Layout_image(logotipoSeec)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "px-0 py-0 text-xl text-center",
                        children: "Secretaria de Educa\xe7\xe3o, do Esporte e Lazer do Estado do Rio Grande do Norte"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "px-0 py-0 text-xl text-center",
                        children: "Grupo de Processamento de Dados - GPD"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "px-0 py-0 text-xl text-center",
                        children: "Suporte"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "border-2 border-gray-600"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Titulo, {
                children: props.titulo
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-2",
                children: props.children
            })
        ]
    }));
};


/***/ })

};
;