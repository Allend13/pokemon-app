export const Content = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="p-20">
            {children}
        </div>
    )
}
