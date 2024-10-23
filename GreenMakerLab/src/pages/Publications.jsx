import PublicationsList from "../components/PublicationsList";

function  Publications() {
    return(
        <section id="publications" className="p-8">
        <h2 className="text-3xl font-bold mb-6">Publications</h2>
        <PublicationsList/>
    </section>
    )
}

export default Publications;