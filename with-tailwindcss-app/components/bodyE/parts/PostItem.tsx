import React, {FC} from 'react';
import future from "./Future";
import {License} from "../../../types/licenses";

interface PostItemProps {
    number: number,
    remove: any,
    post: License
}

const PostItem: FC<PostItemProps> = (props) => {
    return (
        <div className=" mt-4 flex justify-between items-center mr-3 border-4 border-gray-200 rounded-lg" >
            <strong className="w-1/3">{props.number}. {props.post.organization} {props.post.subdomain}</strong>
            <div className="h-14">
                Лицензия будет действительна до: (пользовательский баланс / сумма((лицензий * стоимость)) =  количество дней до конца)
                <div className="flex justify-center rounded-2xl bg-gray-300">{props.post.licenses} количество лицензий по {props.post.price_per_license / 100} в день =
                    {(props.post.licenses * props.post.price_per_license / 100) * 30} рублей {/*цена в копейках,
                    делим на 100, чтобы стало в рублях, умножаем на количество лицензий, узнаем сколько в день,
                    умножаем на 30 узнаем сколько в месяц */}
                </div>
            </div>
            <div>
                <button className=" hover:bg-gray-900 hover:text-white p-2 mr-3 border-2 border-blue-900 rounded-lg ">Изменить</button>
                <button  onClick={()=> props.remove(props.post)} className="hover:bg-red-400 hover:text-white p-2 mr-3 border-2 border-blue-900 rounded-lg">Удалить</button>
            </div>

        </div>
    );
};

export default PostItem;
