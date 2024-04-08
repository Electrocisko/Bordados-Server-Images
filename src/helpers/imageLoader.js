import multer from 'multer';

// las options de storage se dejo como memoria

 const upLoader = multer({storage: multer.memoryStorage()});

export default upLoader;