from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def inicio():
    return render_template("index.html")

@app.route("/menu")
def menu():
    return "<h1>🍗 Página de Menú</h1>"

@app.route("/promociones")
def promociones():
    return "<h1>🔥 Página de Promociones</h1>"

@app.route("/contacto")
def contacto():
    return "<h1>📞 Página de Contacto</h1>"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)