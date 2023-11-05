import dynamic.resume_variables as resume
from flask import Flask, render_template,jsonify
from user.models import User


app = Flask(__name__)

from user import routes

@app.route('/')
def home_page():
    return render_template('index.html')
    
@app.route('/resume')
def resume_page():
    return render_template('resume.html',
                           personal_information = resume.personal_info,
                           tech_stack = resume.tech_stack_dict,
                           professional_summary = resume.professional_summary_list,
                           work_history = resume.history
                           )


if __name__ == '__main__':
    app.run(debug=True,port=5000)


    
    
    