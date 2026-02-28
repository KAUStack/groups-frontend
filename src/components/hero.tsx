export function Hero() {
	return (
		<div className="mt-[15vh] mb-6 text-center w-full transition-all duration-500">
			<div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
				<h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
					Find Your{" "}
					<span className="text-green-600 dark:text-green-400">Groups</span>
				</h1>
				<p className="text-muted-foreground mb-4 max-w-lg mx-auto text-lg">
					Search and discover groups at King Abdulaziz University with ease.
				</p>
			</div>
		</div>
	);
}
