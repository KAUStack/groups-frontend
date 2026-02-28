export function Hero() {
	return (
		<main className="flex-1 flex flex-col items-center px-4 py-8 max-w-5xl mx-auto w-full">
			{/* Spacer to push content down */}
			<div className="mt-[15vh] mb-12 text-center w-full transition-all duration-500">
				<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
					<h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
						Find Your{" "}
						<span className="text-green-600 dark:text-green-400">Groups</span>
					</h1>
					<p className="text-muted-foreground mb-10 max-w-lg mx-auto text-lg">
						Search and discover groups at King Abdulaziz University with ease.
					</p>
				</div>
			</div>
		</main>
	);
}
