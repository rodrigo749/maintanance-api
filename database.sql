---Rode o script no banco da sua aplicação

CREATE TABLE usuarios(
	id INTEGER PRIMARY KEY IDENTITY,
	usuario VARCHAR(30) NOT NULL,
	senha VARCHAR(100) NOT NULL,
	perfil VARCHAR(30) NOT NULL
)

INSERT INTO usuarios(usuario, senha, perfil)
VALUES ('admin', 'e10adc3949ba59abbe56e057f20f883e', 'adm')

---A senha está em md5, é 123456