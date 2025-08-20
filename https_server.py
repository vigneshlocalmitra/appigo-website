import http.server
import ssl
import socketserver
import os

# Change to website directory
os.chdir('/home/appigo.in/public_html')

PORT = 8443
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.socket = ssl.wrap_socket(httpd.socket, 
                                  keyfile="appigo.key", 
                                  certfile="appigo.crt", 
                                  server_side=True)
    print(f"HTTPS Server running on port {PORT}")
    httpd.serve_forever()
