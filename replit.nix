{ pkgs }: {
	deps = [
    pkgs.nodejs_18
    pkgs.nodePackages.npm
    pkgs.nodePackages.typescript-language-server
    pkgs.nodePackages.yarn
	];
}