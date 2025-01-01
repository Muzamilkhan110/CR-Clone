export default function AboutLayout({children,}: {children : React.ReactNode}){
    return <div>
        <div className="bg-black text-yellow-300">
            <h1> About Page </h1>
        </div>
        {children}
    </div>
}