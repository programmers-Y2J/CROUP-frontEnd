import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';
import { forwardRef, useMemo } from 'react';

const QuillEditor = forwardRef((props, ref) => {
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'align',
    'strike',
    'script',
    'blockquote',
    'background',
    'list',
    'bullet',
    'indent',
    'link',
    'color',
    'code-block',
  ];
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],

          [{ header: 1 }, { header: 2 }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ indent: '-1' }, { indent: '+1' }],

          [{ color: [] }, { background: [] }],
          [{ align: [] }],
        ],
      },
    }),
    [],
  );
  return <ReactQuill style={{ height: '430px' }} theme="snow" modules={modules} formats={formats} ref={ref} />;
});

QuillEditor.displayName = 'QuillEditor';

export default QuillEditor;
