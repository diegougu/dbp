from flask import Flask, render_template, request, redirect, jsonify

app = Flask(__name__)

tasks = []

@app.route('/')
def index():
    return render_template('index.html', tasks=tasks)

@app.route('/add', methods=['POST'])
def add():
    task = request.form.get('task')
    tasks.append(task)
    return redirect('/')

@app.route('/delete', methods=['POST'])
def delete():
    task_to_delete = request.json.get('task')  # Cambiado para obtener el valor desde el cuerpo JSON
    if task_to_delete in tasks:
        tasks.remove(task_to_delete)
        return jsonify(success=True)
    else:
        return jsonify(success=False)

if __name__ == '_main_':
    app.run(debug=True)