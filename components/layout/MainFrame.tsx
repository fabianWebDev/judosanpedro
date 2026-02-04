export default function MainFrame({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50">
            {children}
        </div>
    )
}