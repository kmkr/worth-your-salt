/** @jsx h */
import { h } from 'preact'

const DEFAULT_VALUE = '--'

const PROFESSIONS = [
  { name: DEFAULT_VALUE },
  {
    name: 'designer',
    subProfessions: [
      DEFAULT_VALUE,
      'product design',
      'graphic design',
      'interaction design',
      'leader'
    ]
  },
  {
    name: 'developer',
    subProfessions: []
  }
]

function getSubProfessions (selectedProfession) {
  return (
    (
      PROFESSIONS.filter(
        profession => profession.name === selectedProfession
      )[0] || {}
    ).subProfessions || []
  )
}

const Professions = ({
  selectedProfession,
  selectedSubProfession,
  onChange
}) => {
  const subProfessions = getSubProfessions(selectedProfession)

  return (
    <span>
      <select name='profession' onChange={onChange}>
        {PROFESSIONS.map(profession => (
          <option
            value={profession.name}
            selected={profession === selectedProfession}
          >
            {profession.name}
          </option>
        ))}
      </select>
      {!!subProfessions.length && (
        <span>
          more specifically with
          <select name='subProfession' onChange={onChange}>
            {subProfessions.map(subProfession => (
              <option
                value={subProfession}
                selected={subProfession === selectedSubProfession}
              >
                {subProfession}
              </option>
            ))}
          </select>
        </span>
      )}
    </span>
  )
}

export default Professions
