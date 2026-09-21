function AdminBadge({superAdmin}){
    return(
        <div
            style={{
                backgroundColor:superAdmin?"gold":"silver",
                padding:"10px",
                width:"150px",
                marginTop:"10px"

            }}
            >
            <strong>AdminBadge</strong>
        </div>
    );
}
export default AdminBadge;
