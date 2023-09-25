import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const NovoOrcamento = () => {
  const [numeroOrcamento, setNumeroOrcamento] = useState(1);
  const [cliente, setCliente] = useState('');
  const [data, setData] = useState('');
  const [servico, setServico] = useState('');
  const [pecas, setPecas] = useState('');
  const [valor, setValor] = useState('');
  const [informacoesAdicionais, setInformacoesAdicionais] = useState('');

  const criarNovoOrcamento = () => {
    const novoOrcamento = {
      numero: numeroOrcamento,
      cliente,
      data,
      servico,
      pecas,
      valor,
      informacoesAdicionais,
    };

    // Aqui você pode adicionar a lógica para salvar o novo orçamento onde preferir.

    // Atualize o número do orçamento para o próximo
    setNumeroOrcamento(numeroOrcamento + 1);

    // Limpe os campos após a criação do orçamento
    setCliente('');
    setData('');
    setServico('');
    setPecas('');
    setValor('');
    setInformacoesAdicionais('');

    // Exemplo: salvar o orçamento em um estado ou exibir um alerta de sucesso
  };

  return (
    <View>
      <Text>Número do Orçamento: {numeroOrcamento}</Text>
      <TextInput
        placeholder="Cliente"
        value={cliente}
        onChangeText={(text) => setCliente(text)}
      />
      <TextInput
        placeholder="Data"
        value={data}
        onChangeText={(text) => setData(text)}
      />
      <TextInput
        placeholder="Serviço"
        value={servico}
        onChangeText={(text) => setServico(text)}
      />
      <TextInput
        placeholder="Peças"
        value={pecas}
        onChangeText={(text) => setPecas(text)}
      />
      <TextInput
        placeholder="Valor"
        value={valor}
        onChangeText={(text) => setValor(text)}
      />
      <TextInput
        placeholder="Informações Adicionais"
        value={informacoesAdicionais}
        onChangeText={(text) => setInformacoesAdicionais(text)}
      />
      <Button title="Salvar Orçamento" onPress={criarNovoOrcamento} />
    </View>
  );
};

export default NovoOrcamento;
