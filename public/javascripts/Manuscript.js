function Manuscript() {
}

// "bbox 197 272 249 281"
// hOCR format: https://docs.google.com/document/d/1QQnIQtvdAC_8n92-LhwPcjtAUFwBlzE8EWnKAxlgVf0/preview
// bbox x0 y0 x1 y1
Manuscript.bboxToStyle = function(bbox_str) {
  arr = bbox_str.split(" ");
  left_pos = "left:"+arr[1]+"px; ";
  top_pos = "top:"+arr[2]+"px; ";
  width = "width:"+(arr[3]-arr[1])+"px; ";
  height = "height:"+(arr[4]-arr[2])+"px; ";
  return left_pos + top_pos + width + height;
};
