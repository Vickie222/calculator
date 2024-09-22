exports.add = (req,res) => {
    const {num1,num2} = req.body;
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        res.status(400).json({message: 'Supplied data must be a number'});
                return;
    }
    const sum = num1 + num2;
    res.json({result: sum});

};

exports.subtract = (req, res) => {
    const {num1,num2} = req.body;
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        res.status(400).json({message: 'Supplied data must be a number'});
                return;
    }
    const difference = num1 - num2;
    res.json({result: difference});
};
exports.multiply = (req, res) => {
    const {num1,num2} = req.body;
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        res.status(400).json({message: 'Supplied data must be a number'});
                return;
    }
    const product = num1 * num2;
    res.json({result: product});

};
exports.divide = (req, res) => {
    const {num1,num2} = req.body;
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        res.status(400).json({message: 'Supplied data must be a number'});
                return;
    }
    else if (num2 === 0) {
        return res.status(400).json({error: 'Division by Zero is not allowed'});
    }
    const quotient = num1 / num2;
    res.json({result: quotient });

};
