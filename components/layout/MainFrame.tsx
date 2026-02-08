export default function MainFrame({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen items-center">
            {children}
        </div>
    )
}