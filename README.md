# Template para Projetos PO-UI/Protheus

Para compilar o projeto e Buildar deve utilizar a versão do Node `<19.0.0`. Nesse Projeto foi utilizado a `@18.19.0`

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.7.

## Development server

To start a local development server, run:

```bash
ng serve
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Bibliotecas que foram utilizadas

[Protheus Lib Core](https://tdn.totvs.com/display/public/framework/Protheus-lib-core)

[POUI](https://po-ui.io/) 

### Exemplos de aplicações 

https://github.com/deboraconstantino/universo_totvs24/blob/main/package.json

## Como fazer para compilar no Protheus?

Primeiramente se deve buildar o projeto 
para fazer isso utilize o comando:

```bash
ng build
```
Após compilar o projeto será criado um arquivo na pasta `dist/`. Compacte o arquivo, troque a extensão do arquivo de `.zip` para `.app`

depois disso basta jogar o `nome_do_arquivo.app` no projeto do protheus e compilar, chamando a função `FWCallApp(nome_do_arquivo)`, não precisa colocar a extensão do arquivo ao chama-lo na Função.
