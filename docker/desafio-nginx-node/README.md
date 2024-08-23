# Full Cycle 3.0 - Desafio Docker/Ngnix-Node

## Execução
Para executar o projeto, execute o comando abaixo:

```bash
docker compose up -d
```
> Ao subir os containers, nenhuma ação adicional é necessária, as dependências são instaladas automaticamente e o
> banco de dados é criado e populado na inicialização.

## Uso
Para listar as pessoas, sem realizar a criação, acesse a seguinte URL no navegador:

```
http://localhost:8080
```

Para criar uma pessoa, adicione o parâmetro `name` na URL, conforme exemplo abaixo:

```
http://localhost:8080?name=Daniel
```
