var conexao = require("./conexao");
var UsuarioScheme = conexao.Schema
(
    {
        resultado01: { type: int },
        resultado02: { type: int },
        resultado03: { type: int },
        resultado04: { type: int },
});

module.exports = conexao.model("Usuario", UsuarioScheme);