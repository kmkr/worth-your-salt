/** @jsx h */
import { h } from 'preact'

const GENDER = ['person', 'female', 'male']

const Gender = ({ selectedGender, onChange }) => (
  <select name='gender' onChange={onChange}>
    {GENDER.map(gender => (
      <option value={gender} selected={selectedGender === gender}>
        {gender}
      </option>
    ))}
  </select>
)

export default Gender
