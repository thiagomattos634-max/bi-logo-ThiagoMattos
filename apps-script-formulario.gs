/**
 * Recebe as submissões do formulário de contato da landing page
 * (index.html) e grava cada uma como uma nova linha numa planilha
 * do Google Sheets.
 *
 * COMO PUBLICAR (uma vez só):
 *
 * 1. Crie uma planilha nova no Google Sheets (sheets.new).
 *    Na primeira linha, crie as colunas:
 *    Data | Nome | Empresa | Segmento | Telefone | Observações
 *
 * 2. Nessa planilha, vá em Extensões > Apps Script.
 *
 * 3. Apague o conteúdo padrão do editor e cole todo o código deste
 *    arquivo no lugar.
 *
 * 4. Clique em Implantar > Nova implantação.
 *    - Tipo: "App da Web"
 *    - Executar como: "Eu" (sua conta)
 *    - Quem pode acessar: "Qualquer pessoa"
 *    Clique em Implantar e autorize o acesso quando pedido.
 *
 * 5. Copie a URL do app da Web gerada (termina em /exec).
 *
 * 6. Cole essa URL no index.html, dentro do bloco CONFIG no final
 *    do arquivo, no campo:
 *        appsScriptUrl: "COLE_A_URL_AQUI"
 *
 * Pronto: toda submissão do formulário vira uma linha nova na planilha.
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var params = e.parameter;

  sheet.appendRow([
    new Date(),
    params.nome || "",
    params.empresa || "",
    params.segmento || "",
    params.telefone || "",
    params.observacoes || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
