function Footer() {
    return (
        <footer className="bg-green-800 text-white w-full py-8 relative ">
            <div className="flex flex-col items-center xs:pr-5 ">
                <div className="flex gap-2 items-center">
                    Follow us
                    <a href="https://www.instagram.com/green_maker_lab/?igsh=OWJydmpjcWg3eTBp" target="_blank" className="topics hover:scale-110 hover:underline">
                        <img src="/./public/insta.svg" alt="Instagram" className="w-5 h-5 transition-transform duration-300"/>
                    </a>
                    <a href="https://youtube.com/@greenmakerlab?si=kV6nSefRa9THFY5n" target="_blank" className="topics hover:scale-110 hover:underline">
                        <img src="/./public/yt.svg" alt="YouTube" className="w-5 h-5 transition-transform duration-300"/>
                    </a>
                </div>
                <p className="m-0 text-center mr-3 xs:mr-12">
                    © Developed by Jefferson Teodoro - 2024
                </p>
            </div>

            <div className="absolute right-4 bottom-3 xs:ml-2">
                <a href="https://dgp.cnpq.br/dgp/espelhogrupo/2028798278924905" target="_blank">
                    <img src="/./public/cnpq.jpg" alt="Certificado-CNPQ" className="xl:w-20 xl:h-19 xs:w-14 xs:h:15 rounded-full transition-all duration-500 ease-in-out hover:scale-110" /> 
                </a>
            </div>
        </footer>
    );
}

export default Footer;
