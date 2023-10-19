export async function GET() {
  const data = [
    {
      title: "LISTA DE TAREFAS",
      description:
        "Um aplicativo de lista de tarefas simples, permite que os usuários adicionem, excluam e marquem as tarefas como concluidas.",
      thumbnail: "https://bg-so-1.zippyimage.com/2023/10/19/e860a402f3daf40d2d1dc688bb0b5f75.png",
      github_link: "https://github.com/Cheeviiii/lista-de-tarefas",
      projeto_demo: "https://lista-de-tarefas-indol-sigma.vercel.app/",
    },

    {
      title: "PORTFOLIO",
      description:
        "Projeto web de portfolio onde compartilho minhas habilidades, experiências e projetos anteriores de forma visualmente atraente e fácil de navegar.",
      thumbnail:
        "https://bg-so-1.zippyimage.com/2023/10/19/f791387fd99e34936218078f0bcdf63c.png",
      github_link: "https://github.com/Cheeviiii/Cheevi-Portfolio",
      projeto_demo: "https://cheevi-portfolio.vercel.app",
    },

    {
      title: "CONTROLE FINANCEIRO",
      description:
        "Projeto web de controle financeiro oferece uma plataforma intuitiva para gerenciar despesas, receitas e orçamentos, proporcionando uma vida financeira mais organizada e equilibrada.",
      thumbnail:
        "https://bg-so-1.zippyimage.com/2023/07/15/1998924cbb01370db96da386b87f55cb.png",
      github_link: "https://github.com/Cheeviiii/controle-financeiro",
      projeto_demo: "https://controle-financeiro-weld.vercel.app/",
    },

    {
      title: "PASSWORD GENERATOR",
      description:
        "Projeto simples de um gerador de senhas aleatórias, onde você pode escolher entre o tamanho, letras minúsculas, maiúscula e caracteres especiais",
      thumbnail:
        "https://bg-so-1.zippyimage.com/2023/10/19/cedf1d54e38d2ae21a4d095ef05757c3.png",
      github_link: "https://github.com/Cheeviiii/password-generator",
      projeto_demo: "https://password-generator-taupe-xi.vercel.app/",
    },
  ];

  return Response.json(data);
}
