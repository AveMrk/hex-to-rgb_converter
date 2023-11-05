import {ChangeEvent, useState} from 'react';

export default function HexToRgb (){
  const [colorHex, setHex] = useState ('#34495e');
  const [colorRgb, setRgb] = useState ('rgb(52, 73, 94)');
  const divStyle = {
    background: colorHex,
  }
  const error = 'Ошибка!'
  const converter = (hex: string) => {
  hex = hex.replace('#', '');
  var aRgbHex = hex.match(/.{1,2}/g);
  console.log(aRgbHex);
  if(aRgbHex === null){
    return;
  }
  var aRgb = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16)
  ];
  let aRgbStr = 'rgb('+ aRgb.join()+')';
  return aRgbStr;
    }
  const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
    const {value} = e.target;
    setHex(value)
    console.log(value)
    if (value.length === 7){
      let newColor = converter(value);
      if(newColor){
        setRgb(newColor)
      }
    } else if(value.length > 7){
      setRgb(error);
    }
  }
  return (
    <div style={divStyle} className="converter">
      <div className='container'>
      <form>
        <input id='inputHex' type='text' value={colorHex} onChange={handleChange}/>
        <label htmlFor='inputHex'>{colorRgb}</label>
      </form>
      </div>
    </div> 
  )
}