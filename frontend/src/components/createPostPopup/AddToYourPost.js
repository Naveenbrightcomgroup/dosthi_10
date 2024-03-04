
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
export default function AddToYourPost({ setShowPrev }) {
  return (
    <div className="addtoyourpost">
      <div className="addto_text"
        onClick={() => {
          setShowPrev(true);
        }}
        >
          <span>Add Images </span>
      
        <PhotoSizeSelectActualIcon/>
      </div>
     
    </div>
  );
}
