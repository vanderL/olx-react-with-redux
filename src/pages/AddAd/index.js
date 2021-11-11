import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import useApi from '../../services/Api';
import { PageArea } from './styles';
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents';

function AddAd() {
    const api = useApi();
    const history = useHistory();

    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');

    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    function handleImgChange({target}) {
      setImg(target.files[0])
  }

    useEffect(() => {
      const getCategories = async (state) => {
        const categoriesList = await api.getCategories();
        setCategories(categoriesList);
      }

      getCategories();
    }, [])

    const handleSubmit = async (e) => {
      e.preventDefault();
      setDisabled(true);
      setError('');

      let erros = [];

      if(!title.trim()) erros.push('Sem titulo');
      if(!category) erros.push('Sem categoria');

      if(erros.length===0){

        const formData = new FormData();
        
        formData.append('title', title);
        formData.append('price', price);
        formData.append('priceneg', priceNegotiable);
        formData.append('desc', desc);
        formData.append('cat', category);

       
        formData.append('img', img);
      

        const json = await api.addAd(formData);

        if(!json.error) {
          history.push(`/ad/${json.id}`);
          return
        } else {
          setError(json.error);
        }

      } else {
        setError(erros.join("\n"));
      }

      setDisabled(false);

    }

    const priceMask = createNumberMask({
      prefix: 'R$ ',
      includeThousandsSeparator: true,
      thousandsSeparatorSymbol: '.',
      allowDecimal: true,
      decimalSymbol: ',',
    });

    return (
      <PageContainer>
            <PageTitle>Postar</PageTitle>
            <PageArea>
                {error && 
                    <ErrorMessage> {error} </ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label 
                        htmlFor="titulo" 
                        className="area"
                    >
                        <div className="area--title">Titulo</div>
                        <div className="area--input">
                            <input 
                                type="text" 
                                id="titulo"
                                disabled={disabled}
                                value={title}
                                onChange={ e => setTitle(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label 
                        htmlFor="category" 
                        className="area"
                    >
                        <div className="area--title">Categoria</div>
                        <div className="area--input">
                            <select 
                              name="category" 
                              id="category"
                              disabled={disabled}
                              onChange={ e => setCategory(e.target.value)}
                              required
                            >
                              <option disabled value="">Selecione a Categoria</option>
                              {categories && categories.map(category => (
                                <option key={category._id} value={category._id}>{category.name}</option>

                              ))}
                            </select>
                        </div>
                    </label>
                    <label 
                        htmlFor="remember" 
                        className="area"
                    >
                        <div className="area--title">Preço</div>
                        <div className="area--input">
                            <MaskedInput 
                              mask={priceMask}
                              placeholder={'R$ '}
                              disabled={disabled || priceNegotiable}
                              value={price}
                              onChange={ e => setPrice(e.target.value)}
                            />
                        </div>
                    </label>

                    <label 
                        htmlFor="priceNegotiable" 
                        className="area"
                    >
                        <div className="area--title">Preço Negociável</div>
                        <div className="area--input">
                          <input 
                              type="checkbox" 
                              id="priceNegotiable"
                              disabled={disabled}
                              value={priceNegotiable}
                              onChange={ e => setPriceNegotiable(!priceNegotiable)}
                          />
                        </div>
                    </label>

                    <label 
                        htmlFor="desc" 
                        className="area"
                    >
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                          <textarea 
                              type="checkbox" 
                              id="desc"
                              disabled={disabled}
                              value={desc}
                              onChange={ e => setDesc(e.target.value)}
                          ></textarea>
                        </div>
                    </label>

                    <label 
                        htmlFor="fileField" 
                        className="area"
                    >
                        <div className="area--title">Imagens (1 ou mais)</div>
                        <div className="area--input">
                          <input 
                              type="file" 
                              name="img" 
                              id="img" 
                              disabled={disabled}
                              accept="image/*"
                              onChange={handleImgChange} 
                              multiple
                          />
                        </div>
                    </label>

                    <label 
                        htmlFor="addAd" 
                        className="area"
                    >
                        <div className="area--title"></div>
                        <div className="area--input">
                           <button disabled={disabled}>Adicionar Anuncio</button>
                        </div>
                    </label>
                </form>
          </PageArea>
      </PageContainer>
  )
}

export default AddAd;