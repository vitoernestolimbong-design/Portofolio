export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 bg-background/50 backdrop-blur-lg">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Designed & Built by Vito Ernesto Limbong
        </p>
      </div>
    </footer>
  );
}
