import { useState } from "react";

function PublicationsList() {
    // Lista de artigos
    const [articles, setArticles] = useState([
        {
            title: "The Role of the Periodic Table of the Elements of Green and Sustainable Chemistry in a High School Educational Context",
            resume: "A Tabela Periódica dos Elementos da Química Verde e Sustentável (PT-GSC) representa uma ferramenta potencialmente significativa para o ensino e a aprendizagem da Química Verde.",
            content: "No entanto, há uma falta de estudos explorando a aplicação da PT-GSC em contextos educacionais. Para contribuir para preencher essa lacuna, uma abordagem qualitativa e participante foi desenvolvida para examinar os efeitos do uso da PT-GSC em um ambiente de ensino médio, com foco na análise dos desafios e oportunidades associados. Durante um período de cinco semanas, 23 alunos do ensino médio matriculados em um curso de química em uma escola pública no Brasil trabalharam em pequenos grupos para desenvolver soluções para um estudo de caso abordando questões sociocientíficas relacionadas à escassez de água na região local usando elementos da PT-GSC. Os resultados dos questionários pré e pós, juntamente com as resoluções escritas do estudo de caso, fornecem evidências dos ganhos de conhecimento dos alunos, particularmente em alfabetização científica crítica para a Educação em Química Verde e Sustentável. As descobertas mostraram que a PT-GSC é uma ferramenta interdisciplinar para introduzir os alunos aos conceitos de Química Verde dentro do ecossistema social e científico mais amplo. A implementação de novos estudos de caso incorporando elementos do PT-GSC é uma forma de apoiar nosso trabalho contínuo com alunos e o público, contribuindo para um futuro sustentável.",
            doi: "https://doi.org/10.3390/su16062504",
            pdf: "https://drive.google.com/file/d/15WJCTJGo2Q8emOunJrk2y6r3xNOyNGx3/view?usp=sharing",
            showMore: false
        },
        
    ]);


    const toggleShowMore = (index) => {
        setArticles(articles.map((article, i) => 
            i === index ? { ...article, showMore: !article.showMore } : article
        ));
    };

 
    const [searchTerm, setSearchTerm] = useState("");

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    
    return (
        <>
            <div className="search mb-8"> 
                <svg  className="inline-flex items-center size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" id="search-bar" placeholder="Pesquisa..."  
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ml-2 p-2 border rounded-md shadow-sm w-full max-w-md"/> 
            </div>
            {searchTerm === "" && (
                <h3 className="text-xl font-normal mb-4">ARTIGOS PUBLICADOS</h3>
            )}
            <div id="articles-container" className="space-y-8">
                    {filteredArticles.map((article, index) => (
                        <div key={index} className="article p-6 bg-white shadow rounded-md" data-title={article.title}>
                            <h2 className="text-2xl font-serif mb-4">{article.title}</h2>
                            <p className="font-bold mb-2">Resumo:</p>
                        <span>
                            {article.resume}
                            <button
                                id="forMore"
                                onClick={() => toggleShowMore(index)}
                                className="mt-4 text-blue-600 hover:underline"
                            >
                                Saiba mais
                            </button>
                            {article.showMore && (
                                <p  className="mt-2 leading-relaxed">
                                    {article.content}
                                    {article.doi && (
                                        <a href={article.doi} target="_blank" className="text-blue-600 hover:underline">DOI</a>
                                    )}
                                    {article.pdf && (
                                        <a href={article.pdf} target="_blank">
                                            <img src="./img/pdf.svg" alt="pdf" className="inline ml-2"/>
                                        </a>
                                    )}
                                </p>
                            )}
                        </span>
                        </div>
                    ))}
            </div>
            
        </>
    );
}

export default PublicationsList;
