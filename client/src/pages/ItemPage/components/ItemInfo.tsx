import React, { FC } from 'react';
import { FieldData } from 'src/types/templateDataType';

type PropType = {
  data: FieldData[]
}

const ItemInfo: FC<PropType> = ({data}) => {
  return (
    <>
      <h2>Stats</h2>
      {data.map(({field, value}) => {
        const {_id: id, fieldName, measure} = field
        return(
          <dl key={id}>
            <dt>
              <span>
                {fieldName}:
              </span>
            </dt>
            <dd>{`${value} ${measure}`}</dd>
          </dl>
        )
      })}
    </>
  )
}

export default ItemInfo;