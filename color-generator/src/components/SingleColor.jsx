import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const copyColor = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color has been copied to clipboard');
      } catch (error) {
        toast.error('Color cannot be copied to clipboard');
      }
    } else {
      toast.error('Color cannot be copied to clipboard');
    }
  };

  return (
    <div
      onClick={copyColor}
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className='color-weight'>{weight}%</p>
      <p className='color-hex'>{`#${hex}`}</p>
    </div>
  );
};
export default SingleColor;
