/**
 * Create a user card
 * @param {{backgroundIcon:string, colorIcon:string, src:string, altIcon:string}} param0
 * @returns {JSX.Element} Card component
 */

function CardIcon({ backgroundIcon, colorIcon, srcIcon, altIcon, classIcon }) {
  return (
    <div className='icon' style={{background: backgroundIcon}}>
        <img className={classIcon} src={srcIcon} style={{color: colorIcon}} alt={altIcon} />
    </div>
  );
}

export default CardIcon;