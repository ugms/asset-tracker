import React from "react";
import "./AssetTable2.scss";

const AssetTable2 = ({ assets }) => {
  return (
    <div>
      <table className="flat-table">
        <tbody>
          <tr>
            <th>Chassie</th>
            <th>Current User</th>
            <th>Previous User</th>
            <th>Previous User</th>
            <th>Name 2</th>
            <th>Manufacturer</th>
            <th>Model</th>
            <th>OS</th>
            <th>Serial Number</th>
            <th>Purchase Date</th>
            <th>Notes</th>
          </tr>
          <tr>
            <td>Example 1</td>
            <td>Example 2</td>
            <td>Example 3</td>
            <td>Example 4</td>
            <td>Example 5</td>
            <td>Example 6</td>
            <td>Example 7</td>
            <td>Example 8</td>
            <td>Example 9</td>
            <td>Example 10</td>
            <td>Example 11</td>
          </tr>
          <tr>
            <td>Example 1</td>
            <td>Example 2</td>
            <td>Example 3</td>
            <td>Example 4</td>
            <td>Example 5</td>
            <td>Example 6</td>
            <td>Example 7</td>
            <td>Example 8</td>
            <td>Example 9</td>
            <td>Example 10</td>
            <td>Example 11</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AssetTable2;