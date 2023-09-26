**Aplicativo Simples para Pedidos de Pizza:**

1. **Descrição Geral:**
   - Criar um aplicativo simples onde os usuários podem fazer pedidos de uma ou mais pizzas de um menu.

2. **Autenticação:**
   - Não requer contas de usuário ou login.
   - Os usuários devem inserir seus nomes antes de usar o aplicativo.

3. **Menu de Pizzas:** ✔
   - O menu de pizzas pode mudar e deve ser carregado de uma API.

4. **Carrinho de Compras:**
   - Os usuários podem adicionar várias pizzas ao carrinho antes de fazer o pedido.

5. **Pedido:**
   - Fazer um pedido requer apenas o nome do usuário, número de telefone e endereço.
   - Se possível, fornecer também a localização GPS para facilitar a entrega.

6. **Prioridade de Pedido:**
   - Os usuários podem marcar seu pedido como "prioritário" por um adicional de 20% no preço do carrinho.

7. **Processo de Pedido:**
   - Os pedidos são feitos enviando uma requisição POST com os dados do pedido (usuário + pizza selecionada) para a API.

8. **Pagamentos:**
   - Os pagamentos são feitos na entrega, portanto, nenhum processamento de pagamento é necessário no aplicativo.

9. **Identificação Única de Pedido:**
   - Cada pedido receberá um ID único que deve ser exibido, permitindo que o usuário acompanhe seu pedido com base no ID.

10. **Atualizações pós-pedido:**
    - Os usuários devem poder marcar seu pedido como "prioritário" mesmo depois de terem feito o pedido.
