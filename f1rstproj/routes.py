# start of imports
from f1rstproj import app
from flask import render_template, url_for
# end of imports

# homepage path
@app.route ('/')
def index ():
    return render_template ('index.html')

# menu path
@app.route ('/principal')
def principal ():
    return render_template ('principal.html')

# intro path
@app.route ('/intro')
def intro ():
    return render_template ('intro.html')

# instru path
@app.route ('/instru')
def instru ():
    return render_template ('instru.html')

# histo path
@app.route ('/histo')
def histo ():
    return render_template ('histo.html')

# creditos path
@app.route ('/creditos')
def creditos ():
    return render_template ('creditos.html')

# espacial path
@app.route ('/espacial')
def espacial ():
    return render_template ('espacial.html')
