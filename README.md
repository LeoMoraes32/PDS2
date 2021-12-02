# PDS2
Trabalho de Projeto e Desenvolvimento de Softwares 2 - Instagram Clone

# REQUISITOS
Para rodar o projeto há a necessidade da instalação de:
  * Nodejs
  * Expo GO
  * Git
  
# INSTALANDO REQUISITOS
  *Nodejs: https://nodejs.org/en/ ou choco install nodejs (precisa da instalação do Chocolatey)
  *Expo GO: npm install --global expo-cli ----- https://www.devmedia.com.br/primeiro-app-com-react-native/40737 ------ para ajuda
  *Git: https://git-scm.com/downloads ou choco install git (precisa da instalação do Chocolatey)
  
# CLONANDO PROJETO
Crie uma pasta para o projeto em seu ambiente local;
Abra seu terminal de preferência neste local;
No terminal insira:
 * git init
 * git remote add origin https://github.com/LeoMoraes32/PDS2.git
 * git branch main
 * git pull
 ------- crie sua branch após -------
 Caso for a primeira vez, preencha o nome que desejas inserir nos commits e o e-mail cadastrado (Github):
  *git config --global user.email "E-mail"
  *git config --global user.name "Nome"
 
# FAZENDO COMMIT
NUNCA faça commit na MASTER. Nela será feito um merge com a branch atual.
Crie uma nova branch na interface do Github e rode os seguintes comandos:
 *git checkout "nome da branch"
 *git add "nome dos arquivos" ou git add .  - marca tudo para subir no commit, CUIDADO
 *git commit -m "mensagem do commit"
 *git push -u
 
 # Rodando projeto
 ---Use o CMD do Windows para facilitar, pelo PowerShell há necessidade de adicionar caminhos no Path.---
 * npm init -y
 * npm install
 * npm install --global expo-cli
 * expo start
 
 Façam o download e instalação do APP do Expo Cli em seu smartphone. Após isso, conecte o telefone via cabo USB no seu computador, e abra o APP na opção de ler QR, e leia o código QR na página web que abriu apos rodar o "expo start".
