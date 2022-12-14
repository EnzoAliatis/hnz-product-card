import { useEffect, useState, useRef } from 'react';
import { useProductArgs } from '../interfaces/interfaces';


export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues.count || value);
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        const newValue = Math.min(Math.max(counter + value, 0), initialValues.maxCount ?? Infinity)

        setCounter(newValue);

        onChange && onChange({
            product,
            count: newValue
        })
    }

    const reset = () => {
        setCounter(initialValues.count ?? 0);
    }




    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, [])



    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues.count && initialValues.maxCount === counter,
        maxCount: initialValues.maxCount,
        reset,
    }

}