import {ChangeEvent, useState} from 'react';

export default function HexToRgb (){
  const [colorHex, setHex] = useState ('#34495e');
  const [colorRgb, setRgb] = useState ('rgb(52, 73, 94)');
  const divStyle = {
    background: colorHex,
  }
  const error = 'Ошибка!'
  /*const converter = (hex: string) => {
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
    }*/
    function hexToRgb(hex: string) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });
    
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
       ] : null;
    }
  const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
    const {value} = e.target;
    setHex(value)
    console.log(value)
    if (/^#[0-9A-F]{6}$/i.test(value) && value.length === 7 || value.length === 4){
      let newColor = (hexToRgb(value));
      if(newColor){
        setRgb('rgb(' + newColor+ ')')
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