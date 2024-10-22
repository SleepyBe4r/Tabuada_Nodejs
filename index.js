
import http, { Server } from "http";
import url, { URLSearchParams } from "url";

const host = "localhost";
const port = 3000;

function responder_Requisicao(requisicao, resposta) {
    if (requisicao.method === "GET") {

        const dados = new URLSearchParams(url.parse(requisicao.url).query);
        const tabuada = dados.get("tabuada");
        const sequencia = dados.get("sequencia");
        
        resposta.setHeader("Content-Type","text/html");
        resposta.write("<html>");
        resposta.write("<head>");
        resposta.write("<title>Tabuada NOde</title>");
        resposta.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">')
        resposta.write("<meta charset='UTF-8'>");
        resposta.write("<head>");
        resposta.write("<body class='bg-dark'>");
        resposta.write("<div class='container mt-5 p-3 border border-dark rounded bg-light'>");
        resposta.write("<table class='table'>");
        resposta.write("<tr> <th>Tabuada do " + tabuada + " </th> </tr>");    
        if(tabuada && sequencia){
            for (let i = 0; i <= parseInt(sequencia); i++) {
                let resultado = parseInt(tabuada) * i;
                resposta.write("<tr>");    
                resposta.write("<td>");    
                resposta.write( tabuada + " X " + i + " = " + resultado );                
                resposta.write("</td>");    
                resposta.write("</tr>");    
            }
        }else if(!tabuada && sequencia){
            for (let i = 0; i <= parseInt(sequencia); i++) {
                let resultado = 0 * i;
                resposta.write("<tr>");    
                resposta.write("<td>");    
                resposta.write( 0 + " X " + i + " = " + resultado );                
                resposta.write("</td>");    
                resposta.write("</tr>");    
            }
        }else if(tabuada && !sequencia){
            for (let i = 0; i <= 10; i++) {
                let resultado = parseInt(tabuada) * i;
                resposta.write("<tr>");    
                resposta.write("<td>");    
                resposta.write( tabuada + " X " + i + " = " + resultado );                
                resposta.write("</td>");    
                resposta.write("</tr>");    
            }
        }

        resposta.write("</table>");
        resposta.write("</div>")
        resposta.write("</body>");
        resposta.write("</html>");
        resposta.end();
    }
}

const servidor = http.createServer(responder_Requisicao);

servidor.listen(port, host, () => {

})