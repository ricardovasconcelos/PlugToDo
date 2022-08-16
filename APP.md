
# Padrão de código
Os projeto está usando o Eslint, Prettier e também o Pre-commit do husky usando o Conventional Commits

# Estilos
O projeto foi feito usando a biblioteca styled components para criação tanto dos componentos quanto das telas. Essa lib foi usada pelo fato de lidar muito bem com Typescript, permitir definir um guia de estilos padrão para o projeto e também ela permitir a passagem de propriedades para dentro dos arquivos de estilos

# Componentes do Design System
Os components foram construidos usando o principio de dumb components, tentando passar o minimo possível de regra de negocio para dentro dos componentes. Isso permiteu fazer uma melhor utilização em todos os casos de uso da aplicação

Os components do Design System foi criado dentro da própria pasta components dentro do src mas caso a aplicação escala-se, seria uma boa separar esses components do DS em outro arquivo para não misturar com componentes mais "smart" que podem surgir ao longo do desenvolvimento

# Roteamento

Para o roteamento foi usado o React Router Dom

# Layout
Como todas as telas usam o mesmo componente de Header, foi criado um arquivo de layout que será usado por todas as telas, importando o componente Header apenas uma vez. Assim, não foi preciso importar o Header em cada tela. 

Foi utilizado o React Router Dom para criar o DefaultLayout da aplicação

# Hooks

## UseTasks
Esse hook é usado para salvar a lista de tarefas, fazer a adição de uma nova tarefa e fazer a atualização de uma tarefa. O mesmo foi criado pensando no melhor compartilhamento das informações entre todas as telas e componentes que precisam algumas informações. A ideia da criação foi também pra evitar fazer prop drilling das informações entre os componentes

## UseDisableScroll
Esse hook foi criado para fazer o disable do scroll do browser quando o usúario abrir modal da sidebar. Isso faz com que ele não tente fazer o scroll estando com a sidebar aberta


# Testes
Foi feito teste unitários do componentes do Design System. Ainda tem alguns componentes que precisam de testes mas pela falta de tempo acabou ficando como melhoria futura. Também ficou como melhoria a adição de Teste E2E


# Drag and Drop
Foi adicionado a função arrasta e solta ( drag and drop ) na aplicação, para isso foi adicionado a lib React-dnd que lida de uma forma bem local com a api de drag and drop do próprio HTML