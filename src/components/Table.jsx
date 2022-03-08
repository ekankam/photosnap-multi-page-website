import React from 'react'
import { ReactComponent as CheckIcon } from '../assets/pricing/desktop/check.svg'

const Table = () => {
  return (
    <div className="compare">
      <h1>compare</h1>

      <table className="compare__table">
        <thead>
          <tr>
            <th>the features</th>
            <th>basics</th>
            <th>pro</th>
            <th>business</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>unlimited story posting</td>
            <td>
              <CheckIcon className="icon" />
            </td>
            <td>
              <CheckIcon className="icon" />
            </td>
            <td>
              <CheckIcon className="icon" />
            </td>
          </tr>
          <tr>
            <td>unlimited photo upload</td>
            <td>
              <CheckIcon className="icon" />
            </td>
            <td>
              <CheckIcon className="icon" />
            </td>
            <td>
              <CheckIcon className="icon" />
            </td>
          </tr>
          <tr>
            <td>embedding custom content</td>
            <td></td>
            <td>
              <CheckIcon className="icon" />
            </td>
            <td>
              <CheckIcon className="icon" />
            </td>
          </tr>
          <tr>
            <td>customize metadata</td>
            <td></td>
            <td>
              <CheckIcon className="icon" />
            </td>
            <td>
              <CheckIcon className="icon" />
            </td>
          </tr>
          <tr>
            <td>advanced metrics</td>
            <td></td>
            <td></td>
            <td>
              <CheckIcon className="icon" />
            </td>
          </tr>
          <tr>
            <td>photo downloads</td>
            <td></td>
            <td></td>
            <td>
              <CheckIcon className="icon" />
            </td>
          </tr>
          <tr>
            <td>search engine indexing</td>
            <td></td>
            <td></td>
            <td>
              <CheckIcon className="icon" />
            </td>
          </tr>
          <tr>
            <td>custom analytics</td>
            <td></td>
            <td></td>
            <td>
              <CheckIcon className="icon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
