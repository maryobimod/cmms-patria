export default function DataTables() {
    return (
      <div className="grid">
        <div className="card card-grid min-w-full rounded">
          <div className="card-body">
            <div
              data-datatable="true"
              data-datatable-page-size="5"
              data-datatable-state-save="true"
              id="datatable_1"
            >
              <div className="scrollable-x-auto">
                <table
                  className="table table-auto table-border"
                  data-datatable-table="true"
                >
                  <thead>
                    <tr>
                      <th className="min-w-[185px]">
                        <span className="sort">
                          <span className="sort-label">Last Session</span>
                          <span className="sort-icon"></span>
                        </span>
                      </th>
                      <th className="w-[185px]">
                        <span className="sort">
                          <span className="sort-label">Label</span>
                          <span className="sort-icon"></span>
                        </span>
                      </th>
                      <th className="w-[185px]">
                        <span className="sort">
                          <span className="sort-label">
                            <span
                              className="pt-px"
                              data-tooltip="true"
                              data-tooltip-offset="0, 5px"
                              data-tooltip-placement="top"
                            ></span>
                            Method
                          </span>
                          <span className="sort-icon"></span>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>6 Aug, 2024</td>
                      <td>HR Dept</td>
                      <td>Basic auth</td>
                    </tr>
                    <tr>
                      <td>22 Jul 2024</td>
                      <td>Guy Hawkins</td>
                      <td>Web</td>
                    </tr>
                    <tr>
                      <td>18 Jul, 2024</td>
                      <td>Sales Dept</td>
                      <td>SSH</td>
                    </tr>
                    <tr>
                      <td>15 Jul, 2024</td>
                      <td>Sales Dept</td>
                      <td>Kerberos</td>
                    </tr>
                    <tr>
                      <td>30 Jul, 2024</td>
                      <td>Legal Dept</td>
                      <td>Token</td>
                    </tr>
                    <tr>
                      <td>28 Jul, 2024</td>
                      <td>Finance Dept</td>
                      <td>API Key</td>
                    </tr>
                    <tr>
                      <td>16 Jul, 2024</td>
                      <td>Design Dept</td>
                      <td>FIDO U2F</td>
                    </tr>
                    <tr>
                      <td>11 Aug, 2024</td>
                      <td>Compliance Dept</td>
                      <td>OpenID</td>
                    </tr>
                    <tr>
                      <td>19 Jul, 2024</td>
                      <td>Alice Smith</td>
                      <td>Biometric</td>
                    </tr>
                    <tr>
                      <td>6 Aug, 2024</td>
                      <td>HR Dept</td>
                      <td>Basic auth</td>
                    </tr>
                    <tr>
                      <td>22 Jul 2024</td>
                      <td>Guy Hawkins</td>
                      <td>Web</td>
                    </tr>
                    <tr>
                      <td>18 Jul, 2024</td>
                      <td>Sales Dept</td>
                      <td>SSH</td>
                    </tr>
                    <tr>
                      <td>15 Jul, 2024</td>
                      <td>Sales Dept</td>
                      <td>Kerberos</td>
                    </tr>
                    <tr>
                      <td>30 Jul, 2024</td>
                      <td>Legal Dept</td>
                      <td>Token</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-3 text-gray-600 text-2sm font-medium">
                <div className="flex items-center gap-2">
                  Show
                  <select
                    className="select select-sm w-16"
                    data-datatable-size="true"
                    name="perpage"
                  ></select>
                  per page
                </div>
                <div className="flex items-center gap-4">
                  <span data-datatable-info="true"></span>
                  <div
                    className="pagination"
                    data-datatable-pagination="true"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
} 