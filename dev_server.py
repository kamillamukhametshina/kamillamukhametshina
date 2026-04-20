from livereload import Server


def main() -> None:
    server = Server()
    server.watch("index.html")
    server.watch("styles.css")
    server.watch("script.js")
    server.watch("assets/**/*")
    server.serve(root=".", host="127.0.0.1", port=5500, open_url_delay=0)


if __name__ == "__main__":
    main()
