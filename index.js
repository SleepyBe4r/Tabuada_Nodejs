
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
        resposta.write("<meta charset='UTF-8'>");
        resposta.write("<head>");
        resposta.write("<body>");
        resposta.write("<p>Se isso aparecer esta funcionando</p>");
        resposta.write("<table>");
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
        
        resposta.write("</body>");
        resposta.write("</html>");
        resposta.end();
    }
}

const servidor = http.createServer(responder_Requisicao);

servidor.listen(port, host, () => {

})