'use strict';

var utils = require('../utils/writer.js');
var Documentos = require('../service/DocumentosService');

module.exports.guiasGET = function guiasGET (req, res, next, guia_id) {
  Documentos.guiasGET(guia_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guiasListaGET = function guiasListaGET (req, res, next, mes, ano) {
  Documentos.guiasListaGET(mes, ano)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guiasPOST = function guiasPOST (req, res, next, body, name, tipoGuia) {
  Documentos.guiasPOST(body, name, tipoGuia)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
